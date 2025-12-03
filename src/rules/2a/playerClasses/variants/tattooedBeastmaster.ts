import { CharacterClassVariant } from "../../../../schema/types.generated";

const tattooedBeastmaster: Partial<CharacterClassVariant> = {
  title: "Tattooed Beastmaster",
  slug: "TATTOOOEDBEASTMASTER",
  description: [
    "You've received a tattoo that can be used to summon forth a beast under your command.",
  ],
  features: [
    {
      level: 1,
      title: "Summon Beast",
      slug: "TATTOOOEDBEASTMASTER-SUMMON",
      staminaCost: 0,
      actionType: "ACTION",
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "As an Action, touch your tattoo and summon your beast companion forth into an unoccupied space within 5ft. of you.",
        },
      ],
    },
  ],
};

export default tattooedBeastmaster;
