import { CharacterClass } from "../../../../schema/types.generated";

const devoted: CharacterClass = {
  title: "Devoted",
  slug: "DEVOTED",
  description: [
    "Your reverence and constant spread of your gods holy words has earned you their favor which you use to perform greater deeds in their name.",
  ],
  complexity: "COMPLEX",
  health: 16,
  healthOnLevel: 2,
  staminaStat: "HEART",
  stamina: 10,
  staminaOnLevel: 0,
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
      title: "Spellcasting",
      slug: "DEVOTED-SPELLCASTING",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Learning Spells: Start with Heart spells known from the Divine list. You can only learn spells that are less than or equal to your current level. When you level up, learn 1 additional spell.",
        },
        {
          type: "RULE",
          text: "Casting Spells: To cast a spell you spend stamina equal to the spell's level while using your Holy Symbol.",
        },
        {
          type: "RULE",
          text: "[All Spells](/rules/spells)",
        },
      ],
    },
    {
      level: 1,
      title: "Holy Symbol",
      slug: "DEVOTED-HS",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You need a holy symbol to cast your divine spells. You require one hand either holding your holy symbol or free to cast.",
        },
        {
          type: "FLAVOR",
          text: "If you are using a staff, you have to be holding it in one hand or if you have a tattoo on the back of your hand, then you can't have anything in that hand to cast.",
        },
      ],
    },
    {
      level: 1,
      title: "I've Studied the Word",
      slug: "DEVOTED-STW",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Gain a +3 on Intellect tests to recall specific bits of history or religious information.",
        },
        {
          type: "FLAVOR",
          text: "Your years of study and devotion have granted you deep knowledge of historical and religious facts.",
        },
      ],
    },
    {
      level: 2,
      title: "Rapid Recuperation",
      slug: "DEVOTED-RR",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "3 charges, when you Catch Your Breath, you can expend a charge, you and up to 5 allies regain Health equal to your Heart. You regain all charges when you Rest & Recuperate",
        },
      ],
    },
    {
      level: 2,
      title: "Final Heal",
      slug: "DEVOTED-FINAL-HEAL",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you take your Last Stand, and at the start of each turn while making your Last Stand choose an ally within 30ft. of you. They regain 1d6+your Heart Health.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "DEVOTED-SU1",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Increase one of your stats by 1 (max 5)",
        },
        {
          type: "RULE",
          text: "Select a new Novice Feature.",
        },
      ],
    },
    {
      level: 4,
      title: "Minor Intervention",
      slug: "DEVOTED-MI",
      staminaCost: 3,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "You can spend Fortune's Favor and 3 Stamina to improve yours or your allies Test results. Turning a Failure to a Mixed or a Mixed to a Success. You can do this after the dice are rolled but before consequences are applied.",
        },
      ],
    },
    {
      level: 4,
      title: "Reading the Signs",
      slug: "DEVOTED-RS",
      staminaCost: 1,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 1 Stamina and 10 minutes in deep meditation or praying on a solution to an issue to gain Fortune's Favor on the next Test to resolve the issue.",
        },
      ],
    },
    {
      level: 5,
      title: "Shepherd of the Word",
      slug: "DEVOTED-SOTW",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "You act as a conduit for the word of your god and you know how to gather others to your cause.",
        },
        {
          type: "RULE",
          text: "Add a +3 to tests to persuade others to follow your god's tenets.",
        },
      ],
    },
    {
      level: 6,
      title: "Stat Up 2",
      slug: "DEVOTED-SU2",
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
      title: "Martyr",
      slug: "DEVOTED-M",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "Before you die, you make yourself a holy martyr seeking the final praise of your god.",
        },
        {
          type: "RULE",
          text: "When you use your Last Stand, you can cast 2 spells per Action, and increase your Base Damage by 1 Dice Step.",
        },
      ],
    },
    {
      level: 8,
      title: "Divine Inspiration",
      slug: "DEVOTED-DI",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "3 times per Rest & Recuperation, cast a spell without spending Stamina. Any additional effects of the spell that require Stamina still require you to spend Stamina.",
        },
      ],
    },
  ],
};

export default devoted;
