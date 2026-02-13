import type { CharacterResolvers } from "./../../types.generated";

export const Character: CharacterResolvers = {
  characterClass: (parent) => {
    // if the character is a spellsword and a high enough level to get a 3rd or 4th basic infusion, update the basic infusion chooseNum
    if (parent.characterClass.slug === "SPELLSWORD") {
      const tempClass = { ...parent.characterClass };
      if (parent.level >= 4) {
        const basicInfusionsIndex = tempClass.features.findIndex(
          (f) => f?.slug === "SPELLSWORD-INFUSIONS",
        );
        const basicInfusions = tempClass.features.at(basicInfusionsIndex);
        if (basicInfusions && basicInfusions.chooseNum) {
          basicInfusions.chooseNum += 1;
          if (parent.level >= 6) basicInfusions.chooseNum += 1;
        }
      }
      console.debug("SPELLSWORD UPDATED", tempClass);
      return tempClass;
    } else return parent.characterClass;
  },
  maxSlots: (parent) => {
    return 9 + Math.trunc(0.5 * parent.mettle) + Math.floor(0.5 * parent.level);
  },
  slots: (parent) => {
    return !parent.items
      ? 0
      : parent.items.reduce((accumulator, currentValue) => {
          if (currentValue?.slots) return accumulator + currentValue?.slots;
          return accumulator;
        }, 0);
  },
  spells: (parent) => parent.spells || [],
  noviceFeatures: (parent) => parent.noviceFeatures || [],
  veteranFeatures: (parent) => parent.veteranFeatures || [],
};
