import { InputMaybe, ChoiceInput } from "../schema/types.generated";

const convertChosenToJson = (
  chosen: InputMaybe<ChoiceInput>[],
): Record<string, string[]> | undefined => {
  if (!chosen || chosen.length === 0) return undefined;
  const chosenJSON: Map<string, string[]> = new Map();
  chosen.forEach((choice) => {
    if (!choice) return;
    const currentChoice = chosenJSON.get(choice.featureSlug);
    chosenJSON.set(
      choice.featureSlug,
      currentChoice
        ? [choice.choiceSlug, ...currentChoice]
        : [choice.choiceSlug],
    );
  });
  return Object.fromEntries(chosenJSON);
};

export default convertChosenToJson;
