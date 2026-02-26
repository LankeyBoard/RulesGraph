import { MonsterList } from "../../../../schema/types.generated";

const Demons: MonsterList = {
  name: "Oni",
  level: 6,
  size: "LARGE",
  type: "Boss",
  tags: ["STRIKER"],
  img: {
    target:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Kobo_Daishi_Practicing_the_Tantra%2C_with_Demon_and_Wolf%2C_by_Hokusai.jpg",
  },
  description: [
    {
      text: "A towering demon with crimson skin and curved horns, capable of fragmenting its essence into multiple forms or possessing nearby objects.",
    },
  ],
  health: 40,
  armor: 15,
  Stats: { mettle: 3, agility: 2, heart: 1, intellect: 3 },
  speed: [{ type: "ground", speed: 35 }],
  hit: 5,
  range: { min: 0, max: 5 },
  damage: { count: 2, dice: 6, flat: 5, type: ["Slashing"] },
  features: [
    {
      title: "Demon Split",
      slug: "ONI-SPLIT",
      text: [
        {
          text: "Once per combat, the Oni can split itself into two forms, each with half its remaining health (rounded down). Each split form acts independently but shares the same initiative. If one form is destroyed, the other can recombine as a free action to restore health equal to half the surviving form's current health.",
        },
      ],
    },
    {
      title: "Possession",
      slug: "ONI-POSSESS",
      text: [
        {
          text: "The Oni can inhabit magic items, giving part of its power as well as the ability to split to the item. If the item is destroyed, the item and the oni return to their original state. It takes the Oni 10 minutes to possess an item.",
        },
      ],
    },
    {
      title: "Illusory Form",
      slug: "ONI-ILLUSION",
      text: [
        {
          text: "The Oni can appear as a humanoid of any race as a free action. This illusion drops when it attacks or takes damage.",
        },
      ],
    },
  ],
};
export default Demons;
