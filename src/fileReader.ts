import fs from "node:fs";
import {
  GenericRule,
  Maybe,
  RuleText,
  RuleType,
} from "./schema/types.generated";

const readFile = (filename: string): string => {
  try {
    const data = fs.readFileSync(filename, "utf8");
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
    text: "${text}",
    type: "${rule.type}"
    },`;
  });
  result += "]";
  return result;
};
const ruleListToStr = (contents: Maybe<string>[]): string => {
  if (contents.length < 1) return "";
  let result = `[`;
  contents.forEach((li) => {
    if (!li) return;
    result += `"${li}", `;
  });
  result = result.slice(0, -2);
  result += "]";
  return result;
};

const fileContentsToJsonStr = (contents: Maybe<GenericRule>[]): string => {
  if (contents === undefined) return "";
  let result = "[";
  contents.forEach((rule) => {
    console.log(rule?.list);
    if (!rule) return;
    const text = rule.text ? ruleTextToStr(rule.text) : "";
    const list = rule.list ? ruleListToStr(rule.list) : "";
    const subRules = rule.subRules ? fileContentsToJsonStr(rule.subRules) : "";
    result += `
    {
    slug: "${rule.slug}",
    title: "${rule.title}",`;
    if (rule.ruleType) result += `ruleType: "${rule.ruleType}",`;
    if (rule.text) result += `text: ${text},`;
    if (rule.list) result += `list: ${list},`;
    if (rule.subRules) result += `subRules: ${subRules}`;
    result += `},`;
  });
  result += "]";
  return result;
};

const writeToFile = (contents: GenericRule[], filename: string) => {
  const rules = fileContentsToJsonStr(contents);
  const write =
    `import { GenericRule } from "./src/schema/types.generated";
export const generatedRules: GenericRule[] = ` + rules;
  fs.writeFile(filename, write, (err: unknown) => {
    // In case of a error throw err.
    if (err) throw err;
  });
};

const textMaker = (textArray: string[]): RuleText[] => {
  const text: RuleText[] = [];
  textArray.forEach((line) => {
    if (line !== "" && line !== "#") {
      if (line.substring(0, 3) === "Eg. ")
        text.push({
          text: line.slice(3),
          type: "EG",
        });
      else if (line[0] === "*") {
        text.push({
          text: line.slice(1),
          type: "FLAVOR",
        });
      } else {
        text.push({
          text: line,
          type: "RULE",
        });
      }
    }
  });
  return text;
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

const lineProcesser = (line: string): string => {
  let processingLine = line;
  let processedLine = "";
  while (badStartingChar(processingLine.at(0)) && line.length > 0) {
    processingLine = processingLine.substring(1);
    processedLine = processingLine;
  }
  while (badEndingChar(processingLine.at(-1)) && line.length > 0) {
    processingLine = processingLine.substring(0, -2);
    processedLine = processingLine;
  }
  return processedLine;
};

const strToRuleType = (str: string): RuleType | null => {
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
    // if (level === 1) console.log("first split", splitStr, splitRule);
    const baseRule = splitRule[0].split(/\n/);
    if (baseRule[-1] === "") baseRule.pop();
    // if (level === 1) console.log("baseSplit", baseRule);
    const subRules =
      splitRule.length < 2
        ? []
        : ruleArrayToRule(splitRule.slice(1), level + 1);
    // need to split out list text from text blocks
    const title = lineProcesser(baseRule[0]);
    const slug = baseRule[1].slice(6);
    const list: string[] = [];
    const unprocessedText: string[] = [];
    let ruleType: RuleType | null = null;

    baseRule.slice(2).forEach((line) => {
      if (typeof line === "string") {
        if (line.includes("ruleType")) ruleType = strToRuleType(line);
        else if (line[0] === "-") list.push(line.slice(2));
        else unprocessedText.push(line);
      }
    });

    const text = textMaker(unprocessedText);

    if (baseRule.length > 1) {
      const ruleBuilder: { title: string; slug: string; [k: string]: unknown } =
        { title: title, slug: slug };
      if (ruleType) ruleBuilder.ruleType = ruleType;
      if (text.length > 0) ruleBuilder.text = text;
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
  const fileContentsStr = readFile("generalRules.md");
  const rules = rulesStringToObj(fileContentsStr);
  if (rules) writeToFile(rules, "generatedRules.ts");
}
main();
