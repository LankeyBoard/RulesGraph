import { CharacterClass } from "../../../../schema/types.generated";

const fulminare: CharacterClass = {
  title: "Fulminare",
  slug: "FULMINARE",
  description: [
    "The Fulminare was once a traditional warrior, skilled with their chosen armament, but unremarkable. That all changed when they fused with the power of lightning. Now they use lightning and electricity to push themselves to deadly limits.",
  ],
  complexity: "COMPLEX",
  health: 20,
  healthOnLevel: 2,
  staminaStat: "METTLE",
  stamina: 10,
  staminaOnLevel: 0,
  training: {
    armor: ["Light", "Medium"],
    shields: ["Light", "Medium"],
    weapons: {
      melee: {
        pick: 1,
        options: ["Slashing Swords", "Piercing Swords & Daggers", "Axes"],
      },
      ranged: {
        pick: 1,
        options: ["Heavy Throwing", "Light Throwing", "Bows", "Crossbows"],
      },
      special: null,
    },
    magic: null,
  },
  attackStat: ["METTLE"],
  range: { min: 0, max: 80 },
  damage: { dice: 8, count: 1, stat: ["METTLE"] },
  deflect: { dice: 4, count: 1 },
  img: {
    target: "https://art.thewalters.org/images/art/PL1_37.121_Fnt_TR_T05IV.jpg",
    style: "w-full",
  },
  features: [
    {
      level: 1,
      title: "Static",
      slug: "FULMINARE-STATIC",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you make a Basic Attack, roll 1d6. You gain Static equal to the number rolled. If you have not gained or lost Static in the last 1 minute, reset your Static to 0.",
        },
        {
          type: "FLAVOR",
          text: "Your attacks build up a charge of lightning, allowing you to unleash your most potent abilities.",
        },
      ],
    },
    {
      level: 1,
      title: "Overload",
      slug: "FULMINARE-OVERLOAD",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you gain more than 7 Static, immediately lose all Static, dealing lightning damage to yourself and any creature within 5ft. of you. The damage you deal is equal to the amount of Static spent.",
        },
      ],
    },
    {
      level: 1,
      title: "Electrostatic Discharge",
      slug: "FULMINARE-DISCHARGE",
      staminaCost: 2,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 2 Stamina and X Static when you make a Basic Attack. For every 2 Static you spend, the attack deal an extra 1d4 Lightning Damage. If you spent 6 or more Static, increase the damage to 1d6.",
        },
      ],
    },
    {
      level: 2,
      title: "Grounded",
      slug: "FULMINARE-GROUNDED",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While making your Last Stand, you are immune to the damage from Overload",
        },
      ],
    },
    {
      level: 2,
      title: "Lightning Reflector",
      slug: "FULMINARE-LIGHTNING-REFLECTOR",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "When you would take Lightning Damage, you can spend your Fortune's Favor to reflect the attack back at the caster. Make an Attack against the source of the Attack. If it hits, deal damage equal to the Attacks initial damage.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "FULMINARE-SU1",
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
      level: 3,
      title: "Build Static",
      slug: "FULMINARE-BUILD-STATIC",
      staminaCost: 3,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 3 Stamina and 1 minute to gain Static. Gain up to 4 Static this way.",
        },
      ],
    },
    {
      level: 4,
      title: "Flash Step",
      slug: "FULMINARE-FLASH-STEP",
      staminaCost: 2,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 2 Stamina and X Static. Instantly move into an unoccupied spot within 30 ft. Creatures in a line between your starting and ending point must make an Agility Test. The difficulty is equal to 10 + your Mettle If you spent at least 5 Static, increase the difficulty by 3. On a hit they take Xd6 damage. On a mixed they take half.",
        },
      ],
    },
    {
      level: 5,
      title: "Lightning Rod",
      slug: "FULMINARE-LIGHTNING-ROD",
      staminaCost: 4,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When an Ally within 15 ft. of you would take lightning damage, you can spend 4 Stamina to redirect the lightning damage to yourself.",
        },
      ],
    },
    {
      level: 5,
      title: "Snap Reflexes",
      slug: "FULMINARE-SNAP-REFLEXES",
      staminaCost: 2,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 2 Stamina and X Static when you take an Agility Test, before you roll the dice. Add +3 to your roll. If you spent at least 5 Static, add +5 to the roll instead.",
        },
      ],
    },
    {
      level: 6,
      title: "Stat Up 2",
      slug: "FULMINARE-SU2",
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
      level: 6,
      title: "Defibrillate",
      slug: "FULMINARE-DEFIBRILLATE",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "When you take a Test to heal a dying ally, spend Fortune's Favor and X Static. Add +X to your roll for this Test.",
        },
      ],
    },
    {
      level: 7,
      title: "Insulation",
      slug: "FULMINARE-INSULATION",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You are Resistant to Lightning damage.",
        },
      ],
    },
    {
      level: 7,
      title: "Ball Lightning",
      slug: "FULMINARE-BALL-LIGHTNING",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "At the start of every turn while making your Last Stand, gain +3 Static.",
        },
      ],
    },
    {
      level: 7,
      title: "Bolt",
      slug: "FULMINARE-Bolt",
      staminaCost: 3,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 7 Static and make a Ranged Attack. The Attack deals 2d10 Lightning Damage.",
        },
      ],
    },
    {
      level: 8,
      title: "Static Transistor",
      slug: "FULMINARE-TRANSISTOR",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "When you roll Static, you can spend your Fortune's Favor to reroll the dice, taking the new result.",
        },
      ],
    },
  ],
};

export default fulminare;
