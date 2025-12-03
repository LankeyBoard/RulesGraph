import { CharacterClass } from "../../../../schema/types.generated";

const knight: CharacterClass = {
  title: "Knight",
  slug: "KNIGHT",
  complexity: "SIMPLE",
  description: [
    "An honorable fighter heavily armed and armored against the evils of the world.",
  ],
  health: 24,
  healthOnLevel: 2,
  staminaStat: "METTLE",
  stamina: 10,
  staminaOnLevel: 0,
  training: {
    armor: ["Light", "Medium", "Heavy"],
    shields: ["Light", "Medium", "Heavy"],
    weapons: {
      melee: {
        pick: 2,
        options: [
          "Hammers & Clubs",
          "Slashing Swords",
          "Piercing Swords & Daggers",
          "Axes",
          "Flails",
        ],
      },
      ranged: {
        pick: 2,
        options: [
          "Light Throwing",
          "Medium Throwing",
          "Heavy Throwing",
          "Bows",
          "Crossbows",
        ],
      },
      special: null,
    },
    magic: null,
  },
  attackStat: ["METTLE"],
  range: { min: 0, max: 120 },
  damage: { dice: 10, count: 1, stat: ["METTLE"] },
  deflect: { dice: 6, count: 1 },
  features: [
    {
      level: 1,
      title: "Driving Attack",
      slug: "KNIGHT-DA",
      staminaCost: 1,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "Your flurry of attacks drive the enemy back.",
        },
        {
          type: "RULE",
          text: "When you make a Basic Attack you may spend 1 Stamina to attempt to also drive your enemy back 10ft. On a Mix, you chose whether to damage or move the creature back. On a Success, you can do both.\nIf you chose to move a creature, they can opt to instead increase your Base Damage for this attack to avoid being moved.",
        },
      ],
    },
    {
      level: 1,
      title: "Vow",
      slug: "KNIGHT-VOW",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "Your word is your bond, those who recognize your station believe you when you speak truth.",
        },
        {
          type: "RULE",
          text: "When you take a Heart Test to convince someone of true information, you gain a +3 on the Test.",
        },
      ],
    },
    {
      level: 2,
      title: "The Last Line of Defense",
      slug: "KNIGHT-LAST-LINE",
      staminaCost: 1,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "You sweep your attacks, aiming to harm all who stand in your way.",
        },
        {
          type: "RULE",
          text: "While you are taking your Last Stand, gain +3 to Armor and Counter. If you Clash with an Attack, deal damage as though you hit.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "KNIGHT-SU1",
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
      title: "Intercept",
      slug: "KNIGHT-INTERCEPT",
      staminaCost: 1,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "You swiftly step between your ally and danger.",
        },
        {
          type: "RULE",
          text: "When an ally within 5ft of you would be hit by an Attack, you can spend 1 Stamina to switch places with your ally, taking the hit for them.",
        },
      ],
    },
    {
      level: 5,
      title: "Sweeping Attack",
      slug: "KNIGHT-SA",
      staminaCost: 1,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "You sweep your attacks, aiming to harm all who stand in your way.",
        },
        {
          type: "RULE",
          text: "Spend 1 Stamina to make an AOE Melee Attack that targets up to 3 enemies next to each other and within your melee range. On a Hit, deal your Base Damage.",
        },
      ],
    },
    {
      level: 5,
      title: "Unstoppable",
      slug: "KnightU",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "Spend Fortune's Favor, until the end of your next turn, your speed cannot be reduced below half your Base Speed.",
        },
      ],
    },
    {
      level: 6,
      title: "Stat Up 2",
      slug: "KNIGHT-SU2",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Increase one of your stats by 1 (max 6)",
        },
        {
          type: "RULE",
          text: "Select a Veteran Feature",
        },
      ],
    },
    {
      level: 7,
      title: "Mounted Combatant",
      slug: "KNIGHT-MC",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Gain a +3 to tests to control a trained mount.",
        },
      ],
    },
    {
      level: 7,
      title: "No Retreat, No Surrender",
      slug: "KNIGHT-NR-NS",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "You never run from a fight and don’t stop until your enemies are dead.",
        },
        {
          type: "RULE",
          text: "If you Attack the same creature you attacked last turn and did not willingly get further away from them, increase your Base Damage by 1 Step for this Attack.",
        },
      ],
    },

    {
      level: 8,
      title: "You Won't Be The One To Kill Me",
      slug: "KNIGHT-WONT-KILL-ME",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you make your Last Stand, pick a creature, you are immune to damage from that creature.",
        },
      ],
    },
  ],
};

export default knight;
