import fs from "node:fs";
import { GenericRule } from "./schema/types.generated";

const readFile = (filename: string): string => {
  try {
    const data = fs.readFileSync(filename, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
  return "";
};

const ruleArrayToRule = (rulesArray: string[], level: number) => {
  if (level > 3) return;
  console.log("incoming: ", rulesArray);
  const rules: GenericRule[] = [];
  rulesArray.forEach((rule) => {
    const splitRule = rule.split(/\n/);
    const newRule = {
      title: splitRule[0],
      slug: splitRule[1].slice(6),
      subRules: ruleArrayToRule(
        rule.split("[^#]" + "#".repeat(level) + " "),
        level + 1
      ),
    };
    rules.push(newRule);
  });
  return rules;
};

const rulesStringToObj = (fileContents: string): GenericRule[] | undefined => {
  console.log(fileContents);
  return ruleArrayToRule(fileContents.split(/[^#]# /), 0);
};

function main() {
  const fileContentsStr = readFile("generalRules.md");
  const rules = rulesStringToObj(fileContentsStr);
  console.log("rules data", rules);
}
main();
