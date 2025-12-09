import { CharacterClass } from "../../../../schema/types.generated";

const spellsword: CharacterClass = {
  title: "Spellsword",
  slug: "SPELLSWORD",
  description: [
    "The Spellsword arcane warrior who blends magic with old fashioned steel to get the job done.",
  ],
  complexity: "COMPLEX",
  health: 20,
  healthOnLevel: 2,
  staminaStat: "INTELLECT",
  stamina: 10,
  staminaOnLevel: 0,
  training: {
    armor: ["Light", "Medium"],
    shields: ["Light", "Medium"],
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
  attackStat: ["METTLE", "AGILITY"],
  range: { min: 0, max: 80 },
  damage: { dice: 8, count: 1, stat: ["METTLE", "AGILITY"] },
  deflect: { dice: 4, count: 1 },
  features: [
    {
      level: 1,
      title: "Fighting Style",
      slug: "SPELLSWORD-STYLE",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Select either Mettle or Agility for your Attack and Damage Stat.",
        },
      ],
    },
    {
      level: 1,
      title: "Infusion Dice",
      slug: "SPELLSWORD-ID",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Your Infusion Dice is 1d6",
        },
      ],
    },
    {
      level: 1,
      title: "Basic Infusions",
      slug: "SPELLSWORD-INFUSIONS",
      staminaCost: 2,
      costsFortunesFavor: false,
      ruleType: "CHOICE",
      text: [
        {
          type: "RULE",
          text: "Pick 2 Basic Infusions from the list below. You can only benefit from the effect of 1 Infusion at a time. Activating an Infusion requires 2 Stamina. When you start a rest, all Infusions are deactivated.",
        },
      ],
      chooseNum: 2,
      choices: [
        {
          title: "Absorb",
          slug: "INFUSION-ABSORB",
          text: [
            {
              text: "Requires a shield, when you or an ally within 30 ft. would take damage, reduce the damage taken by your Infusion Dice.",
            },
          ],
        },
        {
          title: "Bind",
          slug: "INFUSION-BIND",
          text: [
            {
              text: "Attempt to bind an enemy within 30 ft. of you to the ground. They make a Mettle Test, difficulty is equal to 10+Infusion Dice. Fail, they are Pinned until the start of the next round. Mixed, they are Entangled until the start of the next round.",
            },
          ],
        },
        {
          title: "Bolster",
          slug: "INFUSION-BOLSTER",
          text: [
            {
              text: "Add your Infusion Dice to your next Mettle or Agility Test within the next minute.",
            },
          ],
        },
        {
          title: "Disrupt",
          slug: "INFUSION-DISRUPT",
          text: [
            {
              text: "When you or an ally within 30 ft. is Attacked, after the Attack is rolled, reduce the Attack Roll by your Infusion Dice. ",
            },
          ],
        },
        {
          title: "Elemental Weapon",
          slug: "INFUSION-WEAPON",
          text: [
            {
              text: "Infuse your weapon with an elemental damage [Fire, Cold, or Lightning] for 6 rounds.  While infused, increase your Base Damage by 1 step and deal damage of the chosen element instead of the weapon's regular damage type.",
            },
          ],
        },
        {
          title: "Launch",
          slug: "INFUSION-Launch",
          text: [
            {
              text: "Use when you make a Ranged Attack. The Attacks Range doubles and deals extra damage equal to your Infusion Dice.",
            },
          ],
        },
        {
          title: "Sight",
          slug: "INFUSION-SIGHT",
          text: [
            {
              text: "For the next 10 minutes you can see invisible creatures and objects. You can also see in dim light and complete darkness as though it was well lit.",
            },
          ],
        },
        {
          title: "Veil",
          slug: "INFUSION-VEIL",
          text: [
            {
              text: "Add your Infusion Dice to any Tests to hide or stealth you make for the next minute.",
            },
          ],
        },
      ],
    },
    {
      level: 2,
      title: "Double Up",
      slug: "SPELLSWORD-DOUBLE-UP",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "Spend Fortune's Favor to activate a second Infusion. This infusions effect is limited to at most 1 Round.",
        },
      ],
    },
    {
      level: 2,
      title: "Moment of Brilliance",
      slug: "SPELLSWORD-MOMENT-OF-BRILLIANCE",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While you make your Last Stand, you can use any infusion you could have chosen, not just the few you did choose.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "SPELLSWORD-SU1",
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
      title: "Infusion Training",
      slug: "SPELLSWORD-INFUSION-TRAINING",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Pick a third Basic Infusion.",
        },
      ],
    },
    {
      level: 5,
      title: "Spell Weaver",
      slug: "SPELLSWORD-WEAVER",
      staminaCost: 0,
      costsFortunesFavor: false,
      ruleType: "RULE",
      text: [
        {
          text: "When you activate an infusion, add your Infusion Dice to the next Attack Test you take this Round.",
          type: "RULE",
        },
      ],
    },
    {
      level: 6,
      title: "Infusion of Power",
      slug: "SPELLSWORD-INFUSION-POWER",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Pick a fourth Infusion.",
        },
        {
          type: "Rule",
          text: "Increase your Infusion Dice to 1d8",
        },
      ],
    },
    {
      level: 6,
      title: "Stat Up 2",
      slug: "SPELLSWORD-SU2",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Increase one of your stats by 1 (max 5)",
        },
        {
          type: "RULE",
          text: "Select a Veteran Feature",
        },
      ],
    },
    {
      level: 7,
      title: "Limit Break",
      slug: "SPELLSWORD-LIMIT-BREAK",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While making your Last Stand, double your Infusion Dice.",
        },
      ],
    },
    {
      level: 8,
      title: "Advanced Infusion Training",
      slug: "SPELLSWORD-ADVANCED-INFUSION",
      staminaCost: 4,
      costsFortunesFavor: false,
      chooseNum: 2,
      text: [
        {
          text: "Choose 1 advanced infusions from the list below. They cost 4 Stamina to use.",
        },
      ],
      choices: [
        {
          title: "Binding Cage",
          slug: "INFUSION-BINDING",
          type: "ACTION",
          text: [
            {
              text: "As an Action, drive a weapon into the ground. As the weapon hits, a binding barbs. Enemies in the barbed area as Slowed, and if they move more than 5ft. they take piercing damage equal to your Infusion Dice.",
            },
          ],
        },
        {
          title: "Blink Step",
          slug: "INFUSION-BLINK",
          type: "ACTION",
          text: [
            {
              text: "As an Action, teleport into an unoccupied space you can see within 30 ft. and then make a Basic Attack, adding your Infusion Dice to the roll. On a hit, add your Infusion Dice to the damage.",
            },
          ],
        },
        {
          title: "Gravitational Warp",
          slug: "INFUSION-GATHER",
          text: [
            {
              text: `Use when you make a Basic Attack. Choose to either push or pull. On a hit, if you chose pull, enemies within 30ft. of the target are pulled 15ft. closer to them. If you chose push, enemies within 15ft. are pushed 15ft. away from them.  
              Regardless, if they would collide with the target or another solid obstacle they stop in the nearest unoccupied space and take damage equal to your Infusion Dice.`,
            },
          ],
        },
        {
          title: "Dancing Blade",
          slug: "INFUSION-DANCING-BLADE",
          type: "ACTION",
          text: [
            {
              text: "As an Action, infuse one of your weapons, allowing it to float and obey mental commands from you. As part of the infusion and for the next 5 rounds you can make 1 additional Basic Attack with this weapon. On a hit, deal damage equal to you Infusion Dice + Intellect.  The weapon stays within 30 ft. of you and you can move it up to your speed when you move. While Infused, you cannot use this weapon normally.",
            },
          ],
        },
      ],
    },
  ],
};

export default spellsword;
