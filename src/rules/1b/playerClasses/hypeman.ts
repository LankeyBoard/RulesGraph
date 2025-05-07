import { CharacterClass } from "../../../schema/types.generated";

const hypeman: CharacterClass = {
  title: "Hype Man",
  slug: "HYPEMAN",
  description: [
    "You build those around you up, helping them be the very best versions of themselves the can be.",
  ],
  complexity: "COMPLEX",
  health: 14,
  healthOnLevel: 2,
  staminaStat: "HEART",
  stamina: 6,
  staminaOnLevel: 2,
  training: {
    armor: null,
    shields: null,
    weapons: { melee: null, ranged: null, special: null },
    magic: { options: ["Divine"] },
  },
  attackStat: ["HEART"],
  range: { min: 0, max: 60 },
  damage: { dice: 6, count: 1, stat: ["HEART"] },
  deflect: { dice: 4, count: 1 },
  features: [
    {
      level: 1,
      title: "Build Hype",
      slug: "HM-BUILD-HYPE",
      staminaCost: 1,
      costsFortunesFavor: false,
      text: [
        {
          text: "When an ally succeeds on a Test, you may spend 1 Stamina to gain 1 Hype up to a maximum of 3.",
          type: "RULE",
        },
      ],
    },
    {
      level: 1,
      title: "Hype Up",
      slug: "HM-HYPE-UP",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          text: "You can spend 1 Hype to use the Help Action when an ally within 30 ft. is making a Test and can hear you. If you use the Help Action this way, they add 1d6 to the roll rather than the normal effects of the Help Action.",
          type: "RULE",
        },
      ],
    },
    {
      level: 2,
      title: "Fortune's Friend",
      slug: "HM-FORTUNES-FRIEND",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          text: "When an ally you Hyped still fails the Test, you gain Fortune's Favor.",
          type: "RULE",
        },
      ],
    },
    {
      level: 3,
      title: "Luck On Your Side",
      slug: "HM-LUCK-ON-YOUR-SIDE",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          text: "When an ally rolls with Fortune's Favor, you may spend your Fortune's Favor to let them roll an additional d20, taking the best result.",
          type: "RULE",
        },
      ],
    },
    {
      level: 3,
      title: "Toughen Up",
      slug: "HM-TOUGHEN-UP",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When an ally within 30 ft. Deflects damage, spend 2 Stamina to let them reroll one of their Deflect dice. They must take the new result.",
        },
      ],
    },
    {
      level: 4,
      title: "Stat Up",
      slug: "HM-STAT-UP-1",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Increase one of your stats by 1 (max 5). Select a new Novice Feature.",
        },
      ],
    },
    {
      level: 5,
      title: "Bedtime Story",
      slug: "HM-BEDTIME-STORY",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Once per R&R, when you take a Night's Rest, you and up to 5 allies within 30 ft. regain 2d4 + your Heart Health.",
        },
      ],
    },
    {
      level: 6,
      title: "Don't Let Me Die In Vain",
      slug: "HM-DONT-LET-ME-DIE-IN-VAIN",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While you are making your Last Stand, gain 1 Hype at the start of each Round.",
        },
      ],
    },
    {
      level: 6,
      title: "Try Again Buddy",
      slug: "HM-TRY-AGAIN",
      staminaCost: 0,
      costsFortunesFavor: false,
      actionType: "ACTION",
      text: [
        {
          type: "RULE",
          text: "Use you Action and spend 3 Hype to allow an ally who missed an Attack Test this Round to reroll the Test.",
        },
      ],
    },
    {
      level: 7,
      title: "I'll Pull Up The Slack",
      slug: "HM-PULL-UP-THE-SLACK",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you make a noncombat Test, you may spend 3 Hype to add your Heart to the Test Result.",
        },
      ],
    },
    {
      level: 8,
      title: "Stat Up 2",
      slug: "HM-STAT-UP-2",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Increase a stat by 1 (max 5). Select a Veteran Feature.",
        },
      ],
    },
  ],
};

export default hypeman;
