import generalRules from "./rules/2a/generalRules";
import { GenericRule, Maybe, RuleText, List } from "./schema/types.generated";

const writeToFile = (contents: string, filename: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require("fs");
  fs.writeFile(filename + ".md", contents, (err: unknown) => {
    // In case of a error throw err.
    if (err) throw err;
  });
};

const textAreaToText = (textArea: Maybe<RuleText>[]): string => {
  let text = "";
  textArea.forEach((ta) => {
    if (!ta || ta === undefined || ta.text === undefined) return;
    switch (ta.type) {
      case "FLAVOR":
        text += "*" + ta.text + "*\\\n";
        break;
      case "EG":
        text += "Eg: " + ta.text + "\\\n";
        break;
      case undefined:
        text += ta.text + "\\\n";
        break;
      case "RULE":
        text += ta.text + "\\\n";
        break;
      default:
        text += ta.type + ": " + ta.text + "\\\n";
    }
    if (ta.choices !== undefined) text += ta.choices + "\\\n";
  });
  // removes the trailing slash at the end of the final line.
  return text.slice(0, -2) + "\n";
};

const listToText = (list: Maybe<List>): string => {
  if (!list || list === undefined) return "";
  let text = list.label ? `label: ${list.label}\n` : "";
  list.items?.forEach((item) => (text += `- ${item}\n`));
  return text;
};

const listsToText = (lists: Maybe<List>[]): string => {
  let text = "";
  lists.forEach((list) => {
    text += listToText(list);
  });
  return text;
};

const ruleToText = (rule: Maybe<GenericRule>, depth: number): string => {
  if (!rule) return "";
  let text = "#".repeat(depth) + " " + rule.title + "\n";
  if (rule.slug) text += "slug: " + rule.slug + "\n\n";
  if (rule.ruleType) text += "ruleType: " + rule.ruleType + `\\\n`;
  if (typeof rule.text !== "undefined" && rule.text !== null)
    text += textAreaToText(rule.text);
  if (typeof rule.lists !== "undefined" && rule.lists !== null)
    text += listsToText(rule.lists);
  if (rule.subRules)
    rule.subRules.forEach((r) => {
      text += ruleToText(r, depth + 1);
    });
  return text + "\n";
};

const writeRulesToFile = (rules: GenericRule[]) => {
  let text = "";
  rules.forEach((rule) => {
    text += ruleToText(rule, 1);
  });
  writeToFile(text, "generatedRules");
};
function main() {
  writeRulesToFile(generalRules);
}
main();
