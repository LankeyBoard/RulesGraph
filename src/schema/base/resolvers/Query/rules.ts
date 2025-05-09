import type {
  QueryResolvers,
  RuleSection,
  RuleSectionNames,
} from "./../../../types.generated";
import generalRules from "../../../../rules/1b/generalRules";

const sectionNames = {
  PLAYER: "Player Rules",
  GM: "Running the Game",
  MONSTERS: "Monsters",
};
const rulesSections = new Map([[sectionNames.PLAYER, generalRules]]);
export const rules: NonNullable<QueryResolvers['rules']> = async (
  _parent,
  _arg,
) => {
  let ruleSection = _arg.ruleSectionsToInclude;
  if (!ruleSection)
    ruleSection = Object.keys(sectionNames).map(
      (sectionName) => sectionName as RuleSectionNames,
    );

  const rulesOutput: RuleSection[] = [];
  Object.keys(sectionNames).forEach((sectionName) => {
    if (ruleSection.includes(sectionName as RuleSectionNames)) {
      const rules = rulesSections.get(sectionName);
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
