import fs from "node:fs";
import {
  GenericRule,
  List,
  Maybe,
  RuleText,
  RuleType,
} from "./schema/types.generated";

const files = [{ filename: "generalRules" }, { filename: "gmSections" }];

const readFile = (filename: string): string => {
  try {
    const data = fs.readFileSync(`${filename}.md`, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
  return "";
};

const ruleTextToStr = (contents: Maybe<RuleText>[]): string => {
  if (contents.length < 1) return "";
  let result = `[`;
  contents.forEach((rule) => {
    if (!rule) return;
    const text =
      rule.text.at(rule.text.length - 1) === "\\"
        ? rule.text.slice(0, -1)
        : rule.text;
    result += `
    {
    text: ${text},
    type: "${rule.type}"
    },`;
  });
  result += "]";
  return result;
};

const ruleListsToStr = (contents: Maybe<Maybe<List>[]>): string => {
  if (!contents || contents.length < 1) return "";
  let result = `[`;
  contents.forEach((li) => {
    if (!li) return;

    result += `{
    label: "${li.label}",
    items: ${listItemsToStr(li.items)}
  },`;
  });
  if (result.at(-1) === ",") {
    result = result.slice(0, -1);
  }
  result += "]";
  return result;
};

const listItemsToStr = (listItems: Maybe<Maybe<string>[]>): string => {
  if (!listItems || listItems.length < 1) return "";
  let result = `[`;
  listItems.forEach((li) => {
    if (!li) return;
    result += `'${li}', `;
  });
  return result + "]";
};

const fileContentsToJsonStr = (contents: Maybe<GenericRule>[]): string => {
  if (contents === undefined) return "";
  let result = "[";
  contents.forEach((rule) => {
    if (!rule) return;
    const text = rule.text ? ruleTextToStr(rule.text) : "";
    const lists = ruleListsToStr(rule.lists);
    const subRules = rule.subRules ? fileContentsToJsonStr(rule.subRules) : "";
    result += `
    {
    title: "${rule.title}",
    slug: "${rule.slug}",`;
    if (rule.ruleType) result += `ruleType: "${rule.ruleType}",`;
    if (rule.text) result += `text: ${text},`;
    if (rule.lists) result += `lists: ${lists},`;
    if (rule.subRules) result += `subRules: ${subRules}`;
    result += `},`;
  });
  result += "]";
  return result;
};

const writeToFile = (contents: GenericRule[], filename: string) => {
  const rules = fileContentsToJsonStr(contents);
  const write =
    `import { GenericRule } from "../../schema/types.generated";
const ${filename}: GenericRule[] = ` +
    rules +
    `\nexport default ${filename};`;
  fs.writeFile(`generated${filename}.ts`, write, (err: unknown) => {
    // In case of a error throw err.
    if (err) throw err;
  });
};

const textMaker = (textArray: string[]): RuleText[] => {
  const text: RuleText[] = [];
  let buffer: string[] = [];
  let type: string = "RULE";

  const pushBuffer = () => {
    if (buffer.length > 0) {
      text.push({
        text: JSON.stringify(buffer.join("\n")),
        type,
      });
      buffer = [];
      type = "RULE";
    }
  };

  textArray.forEach((line) => {
    if (line !== "" && line !== "#") {
      if (line.substring(0, 4) === "EG: ") {
        pushBuffer();
        buffer.push(line.slice(4));
        type = "EG";
        pushBuffer();
      } else if (line[0] === "*") {
        pushBuffer();
        buffer.push(line.slice(1));
        type = "FLAVOR";
        pushBuffer();
      } else {
        buffer.push(line);
        type = "RULE";
      }
    } else {
      pushBuffer();
    }
  });
  pushBuffer();
  return text;
};

const listMaker = (listArray: string[]): List[] => {
  const lists: List[] = [];
  let currentList: List | undefined = undefined;
  listArray.forEach((line) => {
    if (line !== "") {
      if (line[0] === "-") {
        if (!currentList) {
          currentList = { label: "", items: [line.slice(2)] };
        } else currentList.items?.push(line.slice(2));
      } else if (line.includes("label: ")) {
        if (currentList) {
          lists.push(currentList);
        }
        currentList = { label: line.slice(7), items: [] };
      }
    }
  });
  if (currentList) {
    lists.push(currentList);
  }
  return lists;
};

const badStartingChar = (c: string | undefined): boolean => {
  if (!c) return false;
  if (c.includes("#") || c.includes(" ")) return true;
  return false;
};

const badEndingChar = (c: string | undefined): boolean => {
  if (c === "\\" || c === " ") return true;
  return false;
};

const lineProcessor = (line: string): string => {
  let processingLine = line;
  let processedLine = "";
  while (badStartingChar(processingLine.at(0)) && line.length > 0) {
    processingLine = processingLine.substring(1);
  }
  while (badEndingChar(processingLine.at(-1)) && line.length > 0) {
    processingLine = processingLine.substring(0, -2);
  }
  // if the line ends in an extra \r, remove it
  if (processingLine.indexOf("\r") === processingLine.length - 1) {
    processingLine = processingLine.slice(0, -1);
  }
  processedLine = processingLine;
  return processedLine;
};

const strToRuleType = (str: string): RuleType | null => {
  str = lineProcessor(str);
  str = str.substring("ruleType: ".length, str.length - 1);
  if (
    str === "EG" ||
    str === "FLAVOR" ||
    str === "RULE" ||
    str === "ATTACK" ||
    str === "CHOICE" ||
    str === "LIST" ||
    str === "LISTCOMPACT"
  )
    return str;
  return null;
};

//Rules come in as an array of strings split on top headings
//For each rule in the array, split on sub headings so the first section is the rule and lower ones are sub-rules
//make a new Generic Rule from array[0] and subRules from the rest of the array

const ruleArrayToRule = (rulesArray: string[], level: number) => {
  if (level > 3 || rulesArray === undefined) return;
  const rules: GenericRule[] = [];
  rulesArray.forEach((rule) => {
    const splitStr = new RegExp("[^#]" + "#".repeat(level + 1) + " ");
    const splitRule = rule.split(splitStr);
    const baseRule = splitRule[0].split(/\n/);
    if (baseRule[-1] === "") baseRule.pop();
    const subRules =
      splitRule.length < 2
        ? []
        : ruleArrayToRule(splitRule.slice(1), level + 1);
    // need to split out list text from text blocks
    const title = lineProcessor(baseRule[0]);
    const slug = baseRule[2] ? lineProcessor(baseRule[2].slice(6)) : "ERROR";
    const unprocessedText: string[] = [];
    const unprocessedListText: string[] = [];

    let ruleType: RuleType | null = null;

    baseRule.slice(3).forEach((line) => {
      if (typeof line === "string") {
        if (line.includes("ruleType")) ruleType = strToRuleType(line);
        else if (line[0] !== "-" && !line.includes("label: "))
          unprocessedText.push(lineProcessor(line));
        else unprocessedListText.push(lineProcessor(line));
      }
    });
    const text = textMaker(unprocessedText);
    const lists: List[] = listMaker(unprocessedListText);

    if (baseRule.length > 1) {
      const ruleBuilder: { title: string; slug: string; [k: string]: unknown } =
        { title: title, slug: slug };
      if (ruleType) ruleBuilder.ruleType = ruleType;
      if (text.length > 0) ruleBuilder.text = text;
      if (lists.length > 0) ruleBuilder.lists = lists;
      if (subRules && subRules?.length > 0) ruleBuilder.subRules = subRules;
      rules.push(ruleBuilder);
    }
  });
  return rules;
};

const rulesStringToObj = (fileContents: string): GenericRule[] | undefined => {
  return ruleArrayToRule(fileContents.split(/[^#]# /), 1);
};

function main() {
  files.forEach((file) => {
    console.log(`Reading ${file.filename}.md`);
    const fileContentsStr = readFile(file.filename);
    const rules = rulesStringToObj(fileContentsStr);
    if (rules) writeToFile(rules, file.filename);
    console.log(`Writing generated${file.filename}.ts`);
  });
}
main();
