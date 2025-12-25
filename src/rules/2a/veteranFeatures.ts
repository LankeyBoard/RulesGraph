import { Feature } from "../../schema/types.generated";

const veteranFeatures: Feature[] = [
  {
    title: "Charger",
    slug: "CHARGER",
    text: [
      {
        text: "If you move at least 15ft in a straight line before you make a non-magical attack, increase your damage dice by 1 step and push the creature back 5ft.",
      },
    ],
  },
  {
    title: "Folk Hero",
    slug: "FOLK-HERO",
    text: [
      {
        text: "Your face and story are known far and wide as are your heroics. When you meet a new character, you can roll a luck test. On a pass (15), they know who you are and have heard of you. On a mixed (10-14), they have a vague recollection of hearing about you. On a fail (9), they haven't heard of you.",
      },
    ],
  },
  {
    title: "Imbued Attacks",
    slug: "IMBUED-ATTACKS",
    text: [
      {
        text: "You have become imbued with magic. Pick a damage type. Your attacks can deal damage of the chosen type on top of any other types.",
      },
    ],
  },
  {
    title: "Legendary",
    slug: "LEGENDARY",
    text: [
      {
        text: "Select a novice feature you've taken that grants a bonus on tests. Double your bonus on those tests.",
      },
    ],
  },
  {
    title: "Perpetual Amateur",
    slug: "PERPETUAL-AMATEUR",
    text: [{ text: "Pick 2 Novice Features." }],
  },
  {
    title: "Skirmisher's Agility",
    slug: "SKIRMISHERS-AGILITY",
    text: [
      {
        text: "Moving into Melee Range of an enemy does not reduce your Speed.",
      },
    ],
  },
  {
    title: "Unfailing",
    slug: "UNFAILING",
    text: [
      {
        text: "Spend Fortune's Favor. If you roll below a mixed result, treat the roll as though it was a mixed result.",
      },
    ],
  },
  {
    title: "Weapon Master",
    slug: "WEAPON-MASTER",
    text: [
      {
        text: "Select a weapon class you are trained in. When attacking with that weapon, increase your base damage by 1 dice step.",
      },
    ],
  },
];

export default veteranFeatures;
