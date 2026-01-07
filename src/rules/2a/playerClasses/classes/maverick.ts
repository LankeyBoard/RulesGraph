import { CharacterClass } from "../../../../schema/types.generated";

const maverick: CharacterClass = {
  title: "Maverick",
  slug: "MAVERICK",
  description: [
    "The Maverick is a treasure seeker and risk taker, using an array of skills and a helping of luck to get them into the darkest of dungeons and out of the stickiest of situations.",
  ],
  img: {
    target:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Page_166_illustration_in_English_Fairy_Tales.png",
  },
  complexity: "STANDARD",
  health: 20,
  healthOnLevel: 2,
  staminaStat: "HEART",
  stamina: 10,
  staminaOnLevel: 0,
  training: {
    armor: ["Light"],
    shields: null,
    weapons: {
      melee: {
        pick: 2,
        options: ["melee weapon classes"],
      },
      ranged: {
        pick: 1,
        options: ["ranged weapon class"],
      },
      special: {
        options: ["whips"],
      },
    },
    magic: null,
  },
  attackStat: ["AGILITY"],
  range: {
    min: 0,
    max: 80,
  },
  damage: {
    dice: 8,
    count: 1,
    stat: ["AGILITY"],
  },
  deflect: { dice: 6, count: 1 },
  features: [
    {
      level: 1,
      title: "Keen Intuition",
      slug: "MAVERICK-KI",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you take a Test to identify a lie or avoid a trap, add +3 to the roll.",
        },
        {
          type: "FLAVOR",
          text: "Years of practice have sharpened your intuition allowing you to sniff out danger and lies with ease.",
        },
      ],
    },
    {
      level: 1,
      title: "Whip Expert",
      slug: "MAVERICK-WE",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You can use your whip to wrap around objects and either pull them to you or pull yourself to them depending on their weight and size.",
        },
        {
          type: "FLAVOR",
          text: "Your mastery of the whip allows you to use it in unexpected and helpful ways including wrapping it around objects and enemies.",
        },
      ],
    },
    {
      level: 1,
      title: "Yoink",
      slug: "MAVERICK-YOINK",
      staminaCost: 2,
      costsFortunesFavor: false,
      actionType: "ACTION",
      text: [
        {
          type: "RULE",
          text: "As an Action, spend 2 Stamina and make an Attack with your whip. On a Hit deal your Base Damage and if you are at most 1 size smaller than the target, knock them Prone. On a Clash, deal half of your Base Damage and choose an ally to Expose the target to until the end of this Round.",
        },
      ],
    },
    {
      level: 2,
      title: "Luck Runs Out",
      slug: "MAVERICK-LRO",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you make your Last Stand, and at the start of each round while making your Last Stand, gain Fortune's Favor.",
        },
        {
          type: "FLAVOR",
          text: "Everyone's luck runs out eventually.",
        },
      ],
    },
    {
      level: 2,
      title: "Sleight of Hand",
      slug: "MAVERICK-SOH",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Add +3 to tests to snatch and conceal small items.",
        },
      ],
    },
    {
      level: 3,
      title: "A Keen Eye for Coin",
      slug: "MAVERICK-KEC",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You have a good idea how much a relic or art piece is worth, or at least know someone willing to buy it.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "MAVERICK-SU1",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Increase a stat by 1 (max 5).",
        },
        {
          type: "RULE",
          text: "Select a Novice Feature.",
        },
      ],
    },
    {
      level: 4,
      title: "Lucky Shot",
      slug: "MAVERICK-LS",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "Before you roll a Basic Attack Test, you can choose to spend your Fortune's Favor. If you hit with the Attack, deal an extra 2d6 damage.",
        },
      ],
    },
    {
      level: 5,
      title: "Balanced Fighter",
      slug: "MAVERICK-BF",
      staminaCost: 1,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you are wielding a whip and another weapon, when you make a Basic Attack, you may spend 1 Stamina to attack once with each weapon, targeting a different creature with each attack.",
        },
      ],
    },
    {
      level: 6,
      title: "Stat Up 2",
      slug: "MAVERICK-SU2",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Increase a stat by 1 (max 6)",
        },
        {
          type: "RULE",
          text: "Select a Veteran Feature.",
        },
      ],
    },
    {
      level: 7,
      title: "Flee the Scene",
      slug: "MAVERICK-FTS",
      staminaCost: 3,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 3 Stamina to double your Base Speed until the end of your next turn, or 1 minute if not in combat.",
        },
      ],
    },
    {
      level: 8,
      title: "Until Your Luck Runs Out.",
      slug: "MAVERICK-LUCK-RUNS-OUT",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While making your Last Stand, Crit on a roll of 18 or higher.",
        },
      ],
    },
  ],
};

export default maverick;
