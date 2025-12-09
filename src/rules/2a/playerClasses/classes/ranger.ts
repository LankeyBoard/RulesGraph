import { CharacterClass } from "../../../../schema/types.generated";

const ranger: CharacterClass = {
  title: "Ranger",
  slug: "RANGER",
  description: [
    "A skilled survivalist as well as ranged and melee fighter relying more on quickness and skill than outright strength.",
  ],
  complexity: "SIMPLE",
  health: 18,
  healthOnLevel: 2,
  staminaStat: "AGILITY",
  stamina: 10,
  staminaOnLevel: 0,
  training: {
    armor: ["Light", "Medium"],
    shields: null,
    weapons: {
      melee: {
        pick: 1,
        options: ["Axes", "Piercing Swords & Dagers", "Slashing Swords"],
      },
      ranged: { pick: 2, options: ["Bows", "Crossbows", "Light Throwing"] },
      special: null,
    },
    magic: null,
  },
  attackStat: ["AGILITY"],
  range: { min: 0, max: 120 },
  damage: { dice: 8, count: 1, stat: ["AGILITY"] },
  deflect: { dice: 4, count: 1 },
  features: [
    {
      level: 1,
      title: "Predator's Sense",
      slug: "RANGER-SENSE",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "You have almost supernaturally heightened senses.",
        },
        {
          type: "RULE",
          text: "Gain +4 to Tests to track and spot creatures.",
        },
      ],
    },
    {
      level: 1,
      title: "Precision of the Hawk",
      slug: "RANGER-PRECISION",
      staminaCost: 1,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "Your attacks are incredibly accurate, always targeting the weakest points in the target.",
        },
        {
          type: "RULE",
          text: "When you roll Weapon Attack Damage, if you have any 1's on your dice you can spend 1 Stamina per 1 on the dice to reroll it.",
        },
      ],
    },
    {
      level: 1,
      title: "The Focus of Death",
      slug: "RANGER-FOCUS-OF-DEATH",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "While making your Last Stand, when you roll Weapon Attack Damage, you can reroll any 1s or 2s, taking the new result.",
        },
      ],
    },
    {
      level: 2,
      title: "Wild Guide",
      slug: "RANGER-GUIDE",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "You move through rough and wild terrain with skill and can guide others along the safest routes with ease.",
        },
        {
          type: "RULE",
          text: "Your party can add your Agility to their daily pace when traveling across terrain without roads.",
        },
      ],
    },
    {
      level: 3,
      title: "Stat Up",
      slug: "RANGER-SU1",
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
      title: "Cunning Stalker",
      slug: "RANGER-STALKER",
      staminaCost: 3,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "You have spent countless hours tracking prey through the woods or back alleys and instinctively step lightly and quietly.",
        },
        {
          type: "RULE",
          text: "Spend 3 Stamina. You leave no tracks and are almost silent as you move. Gain +5 to Stealth Tests.",
        },
      ],
    },
    {
      level: 4,
      title: "Quickdraw Counter",
      slug: "RANGER-QUICK-COUNTER",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "FLAVOR",
          text: "Your weapons are just a hand twitch away.",
        },
        {
          type: "RULE",
          text: "When you Counter Attack, you can use any weapon on your person to make the Counter.",
        },
      ],
    },
    {
      level: 5,
      title: "Poisoned Blade",
      slug: "RANGER-POISON",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Whenever you Catch Your Breath you can coat one of your weapons in poison. When you deal damage with that weapon, deal an extra 1d4 rot damage.",
        },
      ],
    },

    {
      level: 6,
      title: "Stat Up 2",
      slug: "RANGER-SU2",
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
      title: "Long Shot",
      slug: "RANGER-LS",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Reduce your speed to 0 to double your range until the start of the next round.",
        },
      ],
    },
    {
      level: 8,
      title: "Final Hunt",
      slug: "RANGER-FINAL-HUNT",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When making your Last Stand, your speed increases by 10ft. and increase the damage from Poison Blade to 1d8.",
        },
      ],
    },
  ],
};

export default ranger;
