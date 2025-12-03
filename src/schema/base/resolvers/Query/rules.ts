import type {
  QueryResolvers,
  RuleSection,
  RuleSectionNames,
} from "./../../../types.generated";
import generalRules from "../../../../rules/2a/generalRules";
import gmRules from "../../../../rules/2a/gmSections";

const sectionNames = {
  PLAYER: "General Rules",
  GM: "Running the Game",
  MONSTERS: "Monsters",
};
const rulesSections = new Map([
  ["PLAYER", generalRules],
  ["GM", gmRules],
]);
export const rules: NonNullable<QueryResolvers['rules']> = async (
  _parent,
  _arg,
) => {
  let ruleSection = _arg.ruleSectionsToInclude;
  if (!ruleSection)
    ruleSection = Object.keys(sectionNames).map(
      (sectionName) => sectionName as RuleSectionNames,
    );

  console.log("Rule Sections", ruleSection, gmRules);

  const rulesOutput: RuleSection[] = [];
  Object.keys(sectionNames).forEach((sectionName) => {
    if (ruleSection.includes(sectionName as RuleSectionNames)) {
      const rules = rulesSections.get(sectionName);
      console.log(sectionName, rules);
      if (rules) {
        rulesOutput.push({
          rules,
          sectionName: sectionNames[sectionName as RuleSectionNames],
        });
      }
    }
  });

  return rulesOutput;
};
