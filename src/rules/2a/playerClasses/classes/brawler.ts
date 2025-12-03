import { CharacterClass } from "../../../../schema/types.generated";

const brawler: CharacterClass = {
  title: "Brawler",
  slug: "BRAWLER",
  description: [
    "The brawler is a master of close-quarters combat, relying on unmatched agility, mettle, and strategic counter attacks to prevail in the heat of battle.",
  ],
  complexity: "STANDARD",
  health: 24,
  healthOnLevel: 2,
  staminaStat: "METTLE",
  stamina: 10,
  staminaOnLevel: 0,
  training: {
    armor: null,
    shields: null,
    weapons: {
      melee: { options: ["unarmed", "improvised"] },
      ranged: { options: ["improvised"] },
      special: null,
    },
    magic: null,
  },
  attackStat: ["METTLE", "AGILITY"],
  range: { min: 0, max: 40 },
  damage: { dice: 10, count: 1, stat: ["METTLE", "AGILITY"] },
  deflect: { dice: 4, count: 1, flat: 2 },
  features: [
    {
      level: 1,
      title: "Fighting Style",
      slug: "BRAWLER-STYLE",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Select either Mettle or Agility for your Attack Stat. Selecting Agility doubles your Base Attack Range.",
        },
      ],
    },
    {
      level: 1,
      title: "Muscle Bound Body",
      slug: "BRAWLER-MBB",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you are not wearing armor, you can calculate your Armor as 10+Mettle+Agility (max of 2)",
        },
        {
          type: "FLAVOR",
          text: "Your years of training and fighting have honed your body to take blows that would have felled a lesser being.",
        },
      ],
    },
    {
      level: 1,
      title: "Tag Team",
      slug: "BRAWLER-TT",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you succeed in a Melee Attack Test, you can move the enemy up to 5ft into melee range of an ally or swap places with it if you can move. Until the start of the next turn the enemy is Exposed to that ally's next attack.",
        },
        {
          type: "FLAVOR",
          text: "Teamwork is the greatest weapon. You know just how to set the stage for your allies to attack.",
        },
      ],
    },
    {
      level: 2,
      title: "Bravado",
      slug: "BRAWLER-BRAVADO",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When trying to intimidate an enemy, add your Mettle in addition to any other bonuses to the test.",
        },
        {
          type: "FLAVOR",
          text: "Intimidation is as easy as breathing for you.",
        },
      ],
    },
    {
      level: 2,
      title: "Running on Pure Adrenaline",
      slug: "BRAWLER-RPA",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While making a Last Stand, double your lift, carry and drag amounts, gain Fortune's Favor on all Mettle Tests and double your jump distance.",
        },
        {
          type: "RULE",
          text: "Any enemy you Attack or Clash with is Slowed.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "BRAWLER-SU1",
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
      title: "Counter Puncher",
      slug: "BRAWLER-COUNTER",
      staminaCost: 2,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you make a Clash Action, you can spend 2 Stamina to use 2 Clash Actions as part of the action.",
        },
        {
          type: "FLAVOR",
          text: "If an enemy is foolish enough to open themselves up to your counter attacks, you make sure they pay the price.",
        },
      ],
    },

    {
      level: 4,
      title: "Signature Move",
      slug: "BRAWLER-SIGNATURE-MOVE",
      staminaCost: 0,
      costsFortunesFavor: false,
      ruleType: "CHOICE",
      text: [
        {
          text: "Select a Signature Move from the list below.",
          type: "RULE",
        },
      ],
      chooseNum: 1,
      choices: [
        {
          title: "Spinning Lariat",
          slug: "BRAWLER-SL",
          staminaCost: 1,
          costsFortunesFavor: false,
          actionType: "ACTION",
          text: [
            {
              type: "RULE",
              text: "Spend 1 Stamina plus 1 Stamina per enemy within melee range of you. Make an AOE Attack that deals your base damage against all enemies within melee range of you.",
            },
          ],
        },
        {
          title: "Crippling Strke",
          slug: "BRAWLER-CS",
          staminaCost: 2,
          costsFortunesFavor: false,
          actionType: "ACTION",
          text: [
            {
              type: "RULE",
              text: "Spend 2 Stamina plus 1 for each size larger than you the enemy is. When you hit an enemy with a melee attack, reduce the damage done by their attacks by half and reduce their speed to 0 until the end of this round.",
            },
          ],
        },
        {
          title: "Top Rope Takedown",
          slug: "BRAWLER-TRT",
          staminaCost: 1,
          costsFortunesFavor: false,
          actionType: "ACTION",
          text: [
            {
              type: "RULE",
              text: "Requires an ally or sturdy object within 5' of the target to jump off of.",
            },
            {
              type: "RULE",
              text: "Spend 1 Stamina to attempt to knock the target prone with your next attack. You and your target make opposed tests based on your Attack Stat. If you succeed, you knock them prone.",
            },
          ],
        },
        {
          title: "Counter Throw",
          slug: "BRAWLER-CT",
          staminaCost: 1,
          costsFortunesFavor: false,
          actionType: "COUNTER",
          text: [
            {
              type: "RULE",
              text: "When you use your [Counter](/rules/player_rules#BASIC-COUNTERS) to Push, spend 1 Stamina + 1 per size category the target is larger than you. If you do, you move the enemy up to 15 ft.",
            },
          ],
        },
      ],
    },
    {
      level: 5,
      title: "Slab of Beef",
      slug: "BRAWLER-SB",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "At the start of a round of combat, you can spend Fortune's Favor to halve all damage taken until the start of the next round of combat.",
        },
        {
          type: "FLAVOR",
          text: "Your incredibly beefy body can deflect blows just by flexing your muscles.",
        },
      ],
    },
    {
      level: 6,
      title: "Stat Up 2",
      slug: "BRAWLER-SU2",
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
      title: "Mix It Up",
      slug: "BRAWLER-MIU",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "If you are attacking an enemy you did not attack last turn you can spend Fortune's Favor before the attack to double your Base Damage if you hit.",
        },
        {
          type: "FLAVOR",
          text: "Always striking a single enemy is boring and predictable. Mix it up by attacking different enemies.",
        },
      ],
    },
    {
      level: 8,
      title: "Blood for Blood",
      slug: "BRAWLER-BLOOD-FOR-BLOOD",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "While in a Last Stand, whenever an enemy deals damage to you gain a +1 to your Attack and increase your Base Damage by 1 Step.",
        },
        {
          type: "FLAVOR",
          text: "The more you bleed, the more they'll bleed.",
        },
      ],
    },
    {
      level: 8,
      title: "Showstopper",
      slug: "BRAWLER-SHOWSTOPPER",
      staminaCost: 4,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "After landing a clean Attack, spend 4 Stamina to force enemies within 10 ft. of you to make an Intellect Test equal to 10 + Your Mettle, on a Success they are Rattled until the start of the next Round. On a Mixed, they are Rattled until the end of your Turn.",
        },
      ],
    },
  ],
};

export default brawler;
