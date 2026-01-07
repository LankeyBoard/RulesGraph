import { CharacterClass } from "../../../../schema/types.generated";

const shapeshifter: CharacterClass = {
  title: "Shapeshifter",
  slug: "SHIFTER",
  description: [
    "A naturalistic shape shifter able to take on the form of a beast and commune with the nature spirits.",
  ],
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
        pick: 1,
        options: [
          "Hammers & Clubs",
          "Slashing Swords",
          "Piercing Swords & Daggers",
          "Axes",
          "Flails",
        ],
      },
      ranged: {
        pick: 1,
        options: ["Heavy Throwing", "Light Throwing", "Bows", "Crossbows"],
      },
      special: null,
    },
    magic: null,
  },
  attackStat: ["HEART"],
  range: { min: 0, max: 60 },
  damage: { dice: 6, count: 1, stat: ["HEART"] },
  deflect: { dice: 4, count: 1 },
  features: [
    {
      level: 1,
      title: "Shape Changer",
      slug: "SHIFTER-SHAPE-CHANGER",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Pick your form from the list of Forms at the end of the Class rules. The exact form is up to you and your GM, the forms provide templates for general size and type of animal. While transformed. Your Size, Armor and Damage are replaced by your new Form's, and  you can use your Heart instead of your Form's Attack Stat anywhere that Stat would be used. Any gear you are wearing or carrying when you transform is melded with the new form. The form lasts until you Catch Your Breath or you are reduced to 0 Health. You can also end the form early at any time.",
        },
      ],
    },
    {
      level: 1,
      title: "Shift",
      slug: "SHIFTER-SHIFT",
      staminaCost: 1,
      costsFortunesFavor: false,
      actionType: "ACTION",
      text: [
        {
          type: "RULE",
          text: "Spend 1 Stamina to transform into your chosen form. You can transform as an Action or as part of your Basic Attack Action.",
        },
      ],
    },
    {
      level: 2,
      title: "Commune with Nature",
      slug: "SHIFTER-COMM-NATURE",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You can understand and communicate with animals, you gain a +4 on Tests when interacting with animals that closely resemble your chosen form.",
        },
        {
          type: "EG",
          text: "All bears if your form is a grizzly bear, or all snakes if your form is a cobra.",
        },
      ],
    },
    {
      level: 3,
      title: "Reinvigorate",
      slug: "SHIFTER-REINVIGORATE",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "Spend Fortune's Favor to add your Heart to your Armor until the end of your next turn.",
        },
        {
          type: "FLAVOR",
          text: "The spirit of nature fills your body, hardening your flesh against attack.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "SHIFTER-SU1",
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
      title: "Shifter's Strike",
      slug: "SHIFTER-WRATH",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you Shift as part of a Basic Attack, deal an extra 1d6 damage on this attack.",
        },
      ],
    },
    {
      level: 5,
      title: "Second Skin",
      slug: "SHIFTER-SECOND-SKIN",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You are able to maintain your Shift for longer. Your shift only ends when you are taking a Night's Rest or when you choose to end it.",
        },
      ],
    },
    {
      level: 6,
      title: "Nature's Wrath",
      slug: "SHIFTER-WRATH",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you make your Last Stand, add 2d6 Rot damage to all Attacks and you can immediately Shift.",
        },
      ],
    },
    {
      level: 6,
      title: "Stat Up 2",
      slug: "SHIFTER-SU2",
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
      title: "Blood Tracker",
      slug: "SHIFTER-TRACKER",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Gain +5 on Tests to track an enemy you've dealt damage to in the last hour.",
        },
      ],
    },
    {
      level: 7,
      title: "Impeccable Survivalist",
      slug: "SHIFTER-SURVIVALIST",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While traveling, you don't have to reduce your pace to forage for food or water. In addition, if there is enough to be found, you find enough supplies for your entire party.",
        },
        {
          type: "FLAVOR",
          text: "In all but the harshest environments you can find food and water for your party.",
        },
      ],
    },
    {
      level: 8,
      title: "Third Skin",
      slug: "SHIFTER-THIRD SKIN",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Pick a second form. When you Shift, you can pick either form.",
        },
      ],
    },
  ],
  extra: {
    forms: [
      {
        title: "Big (Bear or Bull)",
        slug: "SHIFTER-BIG-FORM",
        size: "LARGE",
        attackStat: "METTLE",
        damage: [
          {
            dice: 10,
            count: 1,
            type: ["slashing", "bludgeoning", "piercing"],
            stat: ["METTLE"],
          },
        ],
        armor: {
          baseArmor: 12,
          stat: "METTLE",
        },
        features: [
          {
            text: "Gain 4 Health per Shapeshifter level, this Health lasts until you leave this form.",
          },
          {
            text: "Gain a +3 to Mettle tests to lift, carry or drag.",
          },
          {
            title: "Heavy Blows",
            text: "When you deal damage to a Medium or smaller creature you can spend 2 Stamina to try and also knock them down. Make a contested Mettle Test, on a Success, you knock them Prone, or shove them 5 ft. away from you. On a Mixed Result you reduce their speed by Half.",
          },
        ],
      },
      {
        title: "Medium (Wolf or Big Cat)",
        slug: "SHIFTER-MID-FORM",
        size: "MEDIUM",
        attackStat: "AGILITY",
        damage: [
          {
            dice: 10,
            count: 1,
            type: ["slashing", "bludgeoning", "piercing"],
            stat: ["AGILITY"],
          },
        ],
        armor: {
          baseArmor: 12,
          stat: "AGILITY",
        },
        features: [
          {
            text: "+10 to Speed",
          },
          {
            text: "Add your Agility to your jump distance, and to Tests to navigate difficult terrain.",
          },
          {
            title: "Menacing Strike",
            text: "When you Attack an enemy within 5 ft. of you, you can spend 2 Stamina to grant the next Ally to Attack the enemy a bonus to their damage equal to your Heart.",
          },
        ],
      },
      {
        title: "Small (Snake or Lizard)",
        slug: "SHIFTER-SMALL-FORM",
        size: "SMALL",
        attackStat: "AGILITY",
        damage: [
          {
            dice: 4,
            count: 1,
            type: ["Piercing"],
          },
          {
            dice: 4,
            count: 1,
            stat: ["HEART"],
            type: ["Rot"],
          },
        ],
        armor: {
          baseArmor: 10,
          stat: "AGILITY",
        },
        features: [
          {
            text: "-10 to Speed",
          },
          {
            text: "Add your Agility to your jump distance, and to Tests to navigate difficult terrain.",
          },
          {
            title: "Sneaky",
            text: "Gain a +5 on Agility Tests to move stealthily and hide.",
          },
          {
            title: "Venomous Strike",
            text: "When you hit an enemy with a Melee Attack, spend 2 Stamina to increase your Rot Damage by 1 Dice Step. If you also used this ability last Round, increase the Rot Damage by an additional Step.",
          },
        ],
      },
    ],
  },
};

export default shapeshifter;
