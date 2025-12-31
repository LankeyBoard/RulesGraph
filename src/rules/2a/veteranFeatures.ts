import { Feature } from "../../schema/types.generated";

const veteranFeatures: Feature[] = [
  {
    title: "Battle Hardened",
    slug: "BATTLE-HARDENED",
    text: [
      {
        text: "If you would gain a Condition.",
      },
    ],
  },
  {
    title: "Charger",
    slug: "CHARGER",
    text: [
      {
        text: "If you move at least 15ft. in a straight line before you make a non-magical Attack, increase your Damage Dice by 1 Step and push the creature back 5ft.",
      },
    ],
  },
  {
    title: "Commander",
    slug: "COMMANDER",
    text: [
      {
        text: "Three times per R&R, when you Attack an enemy you can spend Fortune's Favor to grant the next ally to attack them this round a bonus to their Attack roll equal to your Attack Bonus.",
      },
    ],
  },
  {
    title: "Folk Hero",
    slug: "FOLK-HERO",
    text: [
      {
        text: "When you meet a new character, you can roll a Luck Test. On a pass (15+), they know who you are and have heard of you. On a mixed (10-14), they have a vague recollection of hearing about you. On a fail (9), they haven't heard of you.",
      },
      {
        text: "Your face and story are known far and wide as are your heroics.",
        type: "Flavor",
      },
    ],
  },
  {
    title: "Imbued Attacks",
    slug: "IMBUED-ATTACKS",
    text: [
      {
        text: "You have become imbued with magic. Pick a Damage type. When you make an Attack, you can chose between your available Damage types.",
      },
    ],
  },
  {
    title: "Legendary",
    slug: "LEGENDARY",
    text: [
      {
        text: "Select a Novice Feature you've taken that grants a bonus on Tests. Double your bonus on those tests.",
      },
    ],
  },
  {
    title: "Momentum",
    slug: "MOMENTUM",
    text: [
      {
        text: "When you reduce a target to 0 Health, you may immediately move up to half your Speed and use a Counter Action targeting 1 enemy in range.",
      },
    ],
  },
  {
    title: "Perpetual Amateur",
    slug: "PERPETUAL-AMATEUR",
    text: [{ text: "Pick 2 Novice Features." }],
  },
  {
    title: "Press the Attack",
    slug: "PRESS-THE-ATTACK",
    text: [
      {
        text: "When you Attack an enemy who is Rattled, increase you Damage Dice by 1 Step.",
      },
      {
        text: "You are skilled at turning your enemies mental lapse to your advantage.",
        type: "Flavor",
      },
    ],
  },
  {
    title: "Skirmisher's Agility",
    slug: "SKIRMISHERS-AGILITY",
    text: [
      {
        text: "Your movement does not trigger Counter Actions.",
      },
    ],
  },
  {
    title: "Unfailing",
    slug: "UNFAILING",
    text: [
      {
        text: "Spend Fortune's Favor when you take a Test. If you roll below a Mixed result, treat the roll as though it was a Mixed result.",
      },
    ],
  },
  {
    title: "Weapon Master",
    slug: "WEAPON-MASTER",
    text: [
      {
        text: "Select a weapon class you are trained in. When you Attack with Oomph, if the Attack hits, regain 2 Stamina.",
      },
    ],
  },
];

export default veteranFeatures;
