import type { ChoiceResolvers } from "./../../types.generated";

export const Choice: ChoiceResolvers = {
  isChosen: (parent) => parent.isChosen ?? false,

  choiceRule: (parent) => {
    return parent.choiceRule;
  },
};
