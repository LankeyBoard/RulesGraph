import fs from "node:fs";
import { GenericRule, Maybe, RuleText } from "./schema/types.generated";

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

const fileContentsToJsonStr = (contents: Maybe<GenericRule>[]): string => {
  if (contents === undefined) return "";
  let result = "[";
  contents.forEach((rule) => {
    if (!rule) return;
    const text = rule.text ? ruleTextToStr(rule.text) : "";
    const subRules = rule.subRules ? fileContentsToJsonStr(rule.subRules) : "";
    result += `
    {
    slug: "${rule.slug}",
    title: "${rule.title}",
    text: ${text},
    subRules: ${subRules}
    },
    `;
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
    // if (level === 1) console.log("baseSplit", baseRule);
    const subRules =
      splitRule.length < 2
        ? []
        : ruleArrayToRule(splitRule.slice(1), level + 1);
    const text = baseRule.length > 2 ? textMaker(baseRule.slice(2)) : [];
    if (baseRule.length > 1)
      rules.push({
        title: lineProcesser(baseRule[0]),
        slug: baseRule[1].slice(6),
        text: text,
        subRules: subRules,
      });
  });
  return rules;
};

const rulesStringToObj = (fileContents: string): GenericRule[] | undefined => {
  return ruleArrayToRule(fileContents.split(/[^#]# /), 1);
};

function main() {
  const fileContentsStr = readFile("generalRules.md");
  const rules = rulesStringToObj(fileContentsStr);
  if (rules) console.log(rules[0]);
  if (rules) writeToFile(rules, "generatedRules.ts");
}
main();
