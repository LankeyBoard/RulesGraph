import { CharacterClass } from "../../../../schema/types.generated";

const wizard: CharacterClass = {
  title: "Wizard",
  slug: "WIZARD",
  description: [
    "You have spent your vast intellect studying and applying yourself to the bending of the arcane to your will.",
  ],
  complexity: "COMPLEX",
  health: 16,
  healthOnLevel: 2,
  staminaStat: "INTELLECT",
  stamina: 10,
  staminaOnLevel: 0,
  training: {
    armor: null,
    shields: null,
    weapons: { melee: null, ranged: null, special: null },
    magic: { options: ["Arcane"] },
  },
  attackStat: ["INTELLECT"],
  range: { min: 0, max: 60 },
  damage: { dice: 6, count: 1, stat: ["INTELLECT"] },
  deflect: { dice: 4, count: 1 },
  img: {
    target:
      "https://uploads6.wikiart.org/images/harry-clarke/the-year-s-at-the-spring-1920-26.jpg",
    style: "w-full",
  },
  features: [
    {
      level: 1,
      title: "Learning Spells",
      slug: "WIZARD-LEARNING-SPELLS",
      costsFortunesFavor: false,
      staminaCost: 0,
      text: [
        {
          type: "RULE",
          text: "You start off knowing 4 + 2 * Intellect spells You can only learn Spells that are less than or equal to your current level. When you level up, learn 2 additional Spell. You can also learn spells from another wizard, or a written source. Over the duration of a R&R, you may attempt to learn the new spell. At the end of the rest, take an Intellect test 13 + Spell Level. On a Success you learn the spell. On a Mixed, the next time you take the test for the same spell, gain +3.",
        },
        {
          type: "RULE",
          text: "You can only ever learn spells that are less than or equal to your current Level.",
        },
      ],
    },
    {
      level: 1,
      title: "Preparing Spells",
      slug: "WIZARD-PREPARING-SPELLS",
      costsFortunesFavor: false,
      staminaCost: 0,
      text: [
        {
          type: "RULE",
          text: "From the spells you know, you must prepare the spells you want to cast. Preparing a new set of spells takes 1 hour. This can be done during a Night's Rest. You can have 2 + Intellect Spells prepared at any time.",
        },
      ],
    },
    {
      level: 1,
      title: "Spellcasting",
      slug: "WIZARD-SPELLCASTING",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "To cast a spell, spend Stamina equal to the Spell's level while using your Spell Focus.",
        },
        {
          type: "RULE",
          text: "[Arcane Spells](/rules/spells?filter=1)",
        },
      ],
    },
    {
      level: 1,
      title: "Spell Focus",
      slug: "WIZARD-SPELL-FOCUS",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You need a way to focus the arcane energy into spells. Whatever focus you choose, you must have both hands free to cast spells.",
        },
        {
          type: "EG",
          text: "If you are using a staff, you holding it in two hands or if you have a wand, you need to make grand arcane gestures with your wand and your free hand.",
        },
      ],
    },
    {
      level: 2,
      title: "Desperation Casting",
      slug: "WIZARD-DESPERATION",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While making your Last Stand, you gain one extra Action. You can only use this Action to cast one first level spell.",
        },
      ],
    },
    {
      level: 2,
      title: "Sense Magic",
      slug: "WIZARD-SENSE-MAGIC",
      staminaCost: 2,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You can sense active magic within 30 ft. of you.",
        },
        {
          type: "RULE",
          text: "Spend 2 Stamina to analyze the magic more closely. You must be touching the magic to do so. You learn the duration of the magic and the general nature of the magic.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "WIZARD-SU1",
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
      title: "Limit Break",
      slug: "WIZARD-LIMIT-BREAK",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "Spend Fortune's Favor to cast a spell you don't have prepared.",
        },
        {
          type: "FLAVOR",
          text: "In moments of desperation you pull from your full repertoire of spells.",
        },
      ],
    },
    {
      level: 5,
      title: "Perfected Spell",
      slug: "WIZARD-PERFECTED-SPELL",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Choose one spell you know, reduce that spells level by one.",
        },
        {
          type: "FLAVOR",
          text: "You've researched and experimented and gone beyond anyone before you.",
        },
      ],
    },

    {
      level: 6,
      title: "Stat Up 2",
      slug: "WIZARD-SU2",
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
      title: "Into the Arcane",
      slug: "WIZARD-INTO-THE-ARCANE",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you take your Last Stand, you become untargetable, immune to damage, and you can move through solid objects. You also gain the ability to cast 2 Spells that require an Action to cast as part of a single Action.",
        },
        {
          type: "FLAVOR",
          text: "You release yourself fully into the arcane. In the moments before you lose yourself completely you gain immense power.",
        },
      ],
    },
    {
      level: 8,
      title: "Spell Modification",
      slug: "WIZARD-SPELL-MODIFICATION",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "You can spend Fortune's Favor to use one of the following effects.",
        },
        {
          text: "Increase or decrease the size of a spells effect by 10 ft.",
        },
        {
          text: "For spells with a duration greater than 1 minute, Increase or decrease the duration by 1 minute.",
        },
        {
          text: "Change the damage type of a spell to any other damage type.",
        },
      ],
    },
  ],
};

export default wizard;
