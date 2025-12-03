import { CharacterClass } from "../../../../schema/types.generated";

const elementalist: CharacterClass = {
  title: "Elementalist",
  slug: "ELEMENTALIST",
  description: [
    "An elemental magic user who uses their mastery over their chosen elements to defeat their enemies.",
  ],
  complexity: "SIMPLE",
  health: 16,
  healthOnLevel: 2,
  staminaStat: "INTELLECT",
  stamina: 10,
  staminaOnLevel: 0,
  training: {
    armor: null,
    shields: null,
    weapons: { melee: null, ranged: null, special: null },
    magic: {
      pick: 1,
      options: ["cold", "fire", "lightning"],
    },
  },
  attackStat: ["INTELLECT"],
  range: { min: 0, max: 80 },
  damage: { dice: 6, count: 1, stat: ["INTELLECT"] },
  deflect: { dice: 4, count: 1 },
  features: [
    {
      level: 1,
      title: "Elemental Adept",
      slug: "ELEM-EA",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You can summon forth your chosen magic to perform minor tasks and tricks as are reasonable for your element.",
        },
        {
          type: "RULE",
          text: "Your Base Damage Type is based on your chosen magic.",
        },
        {
          type: "EG",
          text: "You can summon flames to start a fire or shed light, or use cold powers to cool your drink on a hot day.",
        },
      ],
    },
    {
      level: 1,
      title: "Elemental Burst",
      slug: "ELEM-EB",
      staminaCost: 1,
      costsFortunesFavor: false,
      actionType: "ACTION",
      text: [
        {
          type: "FLAVOR",
          text: "A burst of elemental energy surrounds you, warding off nearby foes.",
        },
        {
          type: "RULE",
          text: "Make an AOE Base Attack against all creatures within 5ft. of you.",
        },
      ],
    },
    {
      level: 2,
      title: "Power Overwhelming",
      slug: "ELEM-PO",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "During your Last Stand you can choose to end it early and die. If you choose to do so, make a final 60ft. radius Attack. The attack deals 3 times your Base Damage to those who it hits, and half damage to all who you either Clash or miss. Using this ability kills you.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "ELEM-SU1",
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
      title: "Enhance",
      slug: "ELEM-ENHANCE",
      staminaCost: 1,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "Surround yourself or an ally with your element, bolstering their natural abilities.",
        },
        {
          type: "RULE",
          text: "Select yourself or an ally you can see within 30ft. of you, add your Intellect to the next Mettle or Agility test they make. If you have Fortune's Favor, you can spend it to double the bonus Enhance provides.",
        },
      ],
    },
    {
      level: 4,
      title: "Focused Training",
      slug: "ELEM-FT",
      staminaCost: 0,
      costsFortunesFavor: false,
      ruleType: "CHOICE",
      text: [
        {
          type: "RULE",
          text: "Pick one of the following options to enhance yourself",
        },
      ],
      chooseNum: 1,
      choices: [
        {
          title: "Elemental Armor",
          slug: "ELEM-ARMOR",
          text: [
            {
              text: "Add your Intellect to your Armor and take half damage from your chosen element.",
            },
          ],
        },
        {
          title: "Bolt Thrower",
          slug: "ELEM-BOLT-THROWER",
          text: [{ text: "Increase your Base Attack range by 30ft." }],
        },
        {
          title: "Bigger Burst",
          slug: "ELEM-BIGGER-BURST",
          text: [
            {
              text: "Increase the size of your Elemental Burst by 5ft.",
            },
          ],
        },
      ],
    },

    {
      level: 5,
      title: "Overcharge",
      slug: "ELEM-OVERCHARGE",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you take damage of your elemental type, increase your Base Damage by 2 Dice Steps the next time you deal elemental damage.",
        },
      ],
    },
    {
      level: 5,
      title: "Twin Attack",
      slug: "ELEM-TA",
      staminaCost: 3,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 3 Stamina when you make a Basic Attack. You can make 2 Basic Attacks as an action. Each attack is rolled separately and can hit the same or different creatures.",
        },
      ],
    },
    {
      level: 6,
      title: "Stat Up 2",
      slug: "ELEM-SU2",
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
      title: "Bursting Shot",
      slug: "ELEM-BURST-SHOT",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "You can spend your Fortune's Favor when you make a magic attack. If the attack hits, all enemies within 5ft of the target take half as much damage.",
        },
      ],
    },
    {
      level: 8,
      title: "Elemental Avatar",
      slug: "ELEM-AVATAR",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While you are making a Last Stand you become the embodiment of your element. Gain immunity to your element and at the start of each round make an Elemental Burst at a range of 15ft.",
        },
      ],
    },
    {
      level: 8,
      title: "Elemental Footwork",
      slug: "ELEM-FOOTWORK",
      staminaCost: 0,
      costsFortunesFavor: true,
      ruleType: "CHOICE",
      text: [
        {
          type: "RULE",
          text: "Gain one of the following effect depending on your chosen element.",
        },
      ],
      chooseNum: 1,
      choices: [
        {
          title: "Fire",
          slug: "ELEM-FOOTWORK-FIRE",
          text: [
            {
              text: "+10ft. Base Speed.",
            },
          ],
        },
        {
          title: "Cold",
          slug: "ELEM-FOOTWORK-Cold",
          text: [
            {
              text: "Automatically pass Agility Tests to stay standing on Ice.",
            },
            {
              text: "As a Free Action, create a patch of ice within 5ft. of yourself. This ice id difficult terrain and lasts until the start of your next turn.",
            },
          ],
        },
        {
          title: "Lightning",
          slug: "ELEM-FOOTWORK-LIGHTNING",
          text: [
            {
              text: "Increase your jump distances by 10ft.",
            },
            {
              text: "Always make Tests to avoid fall damage with Fortune's Favor.",
            },
          ],
        },
      ],
    },
  ],
};

export default elementalist;
