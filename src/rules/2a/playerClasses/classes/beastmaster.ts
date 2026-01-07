import { variantClassCombiner } from "../../../../extras/variantCombiner";
import { CharacterClass } from "../../../../schema/types.generated";
import tattooedBeastmaster from "../variants/tattooedBeastmaster";

const beastmaster: CharacterClass = {
  title: "Beastmaster",
  slug: "BEASTMASTER",
  description: [
    "You've formed a deep bond with an animal, your faithful companion and your best friend that aids you in your adventures.",
  ],
  complexity: "COMPLEX",
  health: 16,
  healthOnLevel: 2,
  staminaStat: "HEART",
  stamina: 10,
  staminaOnLevel: 0,
  img: {
    target:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Page_122_illustration_in_More_Celtic_Fairy_Tales.png",
    style: "w-full",
  },
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
  attackStat: ["AGILITY"],
  range: { min: 0, max: 120 },
  damage: { dice: 6, count: 1, stat: ["AGILITY"] },
  deflect: { dice: 4, count: 1 },
  variants: [],
  features: [
    {
      level: 1,
      title: "Beast Bond",
      slug: "BEASTMASTER-BEAST-BOND",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Choose the form of your beast, a list of forms is provided at the end of this section. Use your Heart as the Attack bonus for your Beast. When you regain Health during a Rest, your Beast regains the same amount. If your Beast drops to 0 Health, you can stabilize it over a Night's Rest, restoring it to 1 Health. If you are unable to retrieve the body, or the Beast dies, you can find a new Beast during a Rest and Recuperation.",
        },
        {
          type: "RULE",
          text: "During combat, you and your beast can Attack together, one of you using a Setup and the other a Follow-up, otherwise only one of you can Attack. Or both can use any other Actions in combat such as hiding, aiding, etc. separately.",
        },
        {
          type: "RULE",
          text: "If your beast takes damage, as long as you are within 60 feet of each other, you can use your Deflect to reduce their damage take.",
        },
      ],
    },
    {
      level: 1,
      title: "Setup",
      slug: "BEASTMASTER-SETUP",
      staminaCost: 2,
      actionType: "ACTION",
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 2 Stamina to use your Attack Action to make a Setup Attack. Reduce your Attack Damage by 1 dice step for this Attack. If your Setup hits and your beast is within melee range of the target, they may immediately also hit with their Follow-up if they have one.",
        },
      ],
    },

    {
      level: 1,
      title: "Follow-up",
      slug: "BEASTMASTER-Followup",
      staminaCost: 2,
      actionType: "ACTION",
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Spend 2 Stamina to command your Beast make a Setup Attack if they have one and are in melee range of the target. Reduce their Attack Damage by 1 dice step for this Attack. If their Setup hits and you may use your Follow-up to automatically hit the target with a Basic Attack.",
        },
      ],
    },
    {
      level: 2,
      title: "Friends Till the End",
      slug: "BEASTMASTER-FRIENDS-TILL-THE-END",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you enter Last Stand, your Beast immediately regains full Health. During your Last Stand, yours and your Beast's Follow-up Attacks can trigger even if the Setup misses.",
        },
      ],
    },
    {
      level: 2,
      title: "Tracking Team",
      slug: "BEASTMASTER-TRACKING-TEAM",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "You gain +3 on tests to track or follow a target when you can show your Beast what the target looks or smells like.",
        },
      ],
    },
    {
      level: 3,
      title: "Scavenger’s at Heart",
      slug: "BEASTMASTER-SCAVENGERS",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Whenever you spend time foraging or scavenging with your Beast (e.g., gathering rations, materials, supplies), you find twice the normal amount.",
        },
      ],
    },

    {
      level: 3,
      title: "Stat Up",
      slug: "BEASTMASTER-STAT-UP-1",
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
      title: "Ferocity",
      slug: "BEASTMASTER-FEROCITY",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "When you spend Fortune’s Favor on a Setup Attack, you or your Beast may make its Follow-up Attack even if your Setup Attack misses.",
        },
      ],
    },
    {
      level: 5,
      title: "Ultimate Tag Team",
      slug: "BEASTMASTER-TAG-TEAM",
      staminaCost: 2,
      costsFortunesFavor: false,
      ruleType: "CHOICE",
      chooseNum: 2,
      text: [
        {
          type: "RULE",
          text: "Choose two of the following maneuvers. Spend 2 additional Stamina to use the move in place of a standard Setup or Follow-up.",
        },
      ],
      choices: [
        {
          choiceRule: {
            title: "Entangling Strike (Setup)",
            slug: "BEASTMASTER-ENTANGLING-STRIKE",
            text: [
              {
                text: "On Hit, the target must pass a Mettle Test with a difficulty of 10 + your Heart or become Entangled until the start of the next round.",
              },
            ],
          },
          isChosen: false,
        },
        {
          choiceRule: {
            title: "Predator’s Leap (Setup)",
            slug: "BEASTMASTER-PREDATORS-LEAP",
            text: [
              {
                text: "On hit, you may immediately move up to half your Speed.",
              },
            ],
          },
          isChosen: false,
        },
        {
          choiceRule: {
            title: "Protective Pelt (Follow-up)",
            slug: "BEASTMASTER-PROTECTIVE-PELT",
            text: [
              {
                text: "You and your Beast each gain +3 Armor until the start of the next round.",
              },
            ],
          },
          isChosen: false,
        },
        {
          choiceRule: {
            title: "Savage Rend (Follow-up)",
            slug: "BEASTMASTER-SAVAGE-REND",
            text: [
              {
                text: "Inflict deep wounds on the target. They take 2d4 damage at the start of each combat round until they use an Action to staunch the bleeding.",
              },
            ],
          },
          isChosen: false,
        },
      ],
    },
    {
      level: 6,
      title: "Stat Up 2",
      slug: "BEASTMASTER-STAT-UP-2",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "Increase a stat by 1 (max 6).",
        },
        {
          type: "RULE",
          text: "Select a Veteran Feature.",
        },
      ],
    },
    {
      level: 7,
      title: "Shared Senses",
      slug: "BEASTMASTER-SHARED-SENSES",
      staminaCost: 0,
      costsFortunesFavor: false,
      uses: { used: 0, max: 1, rechargeOn: "NIGHTS_REST" },
      text: [
        {
          type: "RULE",
          text: "Once per Night's Rest, you can focus and perceive through your Beast’s senses for up to ten minute. While doing so you are completely unaware of your own surroundings. You can end this effect early at any time.",
        },
      ],
    },
    {
      level: 7,
      title: "Bonded Pair",
      slug: "BEASTMASTER-BONDED-PAIR",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When traveling together, your Beast always knows the direction and distance to you, and you to it, as long as you are within a mile of each other.",
        },
      ],
    },
    {
      level: 8,
      title: "Unbreakable Bond",
      slug: "BEASTMASTER-UNBREAKABLE-BOND",
      staminaCost: 0,
      costsFortunesFavor: false,
      text: [
        {
          type: "RULE",
          text: "When you use your Last Stand, you and your beast gain +3 to your Armor and Deflect.",
        },
        {
          type: "RULE",
          text: "Your beast cannot be reduced below 1 Health while you are in Last Stand",
        },
      ],
    },
    {
      level: 8,
      title: "Teamwork Makes the Dream Work",
      slug: "BEASTMASTER-TEAMWORK",
      staminaCost: 0,
      costsFortunesFavor: true,
      text: [
        {
          type: "RULE",
          text: "Spend Fortune's Favor and make a Setup Attack. If the attack lands, Expose the enemy to an ally of your choice.",
        },
      ],
    },
  ],
  extra: {
    beastMasterPet: {
      title: "Beasts",
      slug: "BEASTMASTER-BEASTS",
      description: [
        "Choose the form of your Beast. The animals listed in the parenthesis are examples. The exact form your beast takes is up to you.  Each Beast has unique stats and abilities that grow as you level up.",
      ],
      beasts: [
        {
          title: "Large (Bear/Tiger)",
          slug: "BEASTMASTER-LARGE-BEAST",
          size: "LARGE",
          health: { base: 16, perLevel: 3 },
          armor: 12,
          stats: {
            mettle: 4,
            agility: 0,
            heart: 0,
            intellect: -4,
          },
          speed: [{ type: "ground", speed: 30 }],
          damage: {
            dice: 8,
            count: 1,
            stat: ["METTLE"],
            type: ["Piercing", "Slashing", "Bludgeoning"],
          },
          abilities: [
            {
              type: "Follow-up",
              title: "Heavy Blow",
              text: "Increase damage by 1 Dice Step.",
            },
          ],
        },
        {
          title: "Medium (Wolf/Panther)",
          slug: "BEASTMASTER-MEDIUM-BEAST",
          size: "MEDIUM",
          health: { base: 6, perLevel: 2 },
          armor: 15,
          stats: {
            mettle: 0,
            agility: 4,
            heart: 0,
            intellect: -4,
          },
          speed: [{ type: "ground", speed: 40 }],
          damage: {
            dice: 6,
            count: 1,
            stat: ["AGILITY"],
            type: ["Piercing", "Slashing", "Bludgeoning"],
          },
          abilities: [
            {
              type: "Setup",
              title: "Menacing Attack",
              text: "Increase your Follow-up damage dice by 1 step.",
            },
            {
              type: "Follow-up",
              title: "Takedown",
              text: "Mettle test 13/8. Knocked Prone on a Fail, or Slowed on a Mixed.",
            },
          ],
        },
        {
          title: "Small Flying Beasts (Hawk/Falcon)",
          slug: "BEASTMASTER-SMALL-FLYING-BEAST",
          size: "SMALL",
          health: { base: 4, perLevel: 1 },
          armor: 15,
          stats: {
            mettle: 0,
            agility: 4,
            heart: 0,
            intellect: -4,
          },
          speed: [{ type: "flying", speed: 60 }],
          damage: {
            dice: 4,
            count: 1,
            stat: ["AGILITY"],
            type: ["Piercing", "Slashing"],
          },
          abilities: [
            {
              type: "Passive",
              title: "Flyby Attacks",
              text: "If the beast attacks a target, that target does not get a Counter Attack when the beast moves out of  melee range.",
            },
            {
              type: "Setup",
              title: "Raking Attack",
              text: "Add your Heart to the Damage bonus of your Follow-up.",
            },
          ],
        },
        {
          title: "Small Ground (Badger/Snake)",
          slug: "BEASTMASTER-SMALL-GROUND-BEAST",
          size: "SMALL",
          health: { base: 4, perLevel: 1 },
          armor: 15,
          stats: {
            mettle: 0,
            agility: 4,
            heart: 0,
            intellect: -4,
          },
          speed: [{ type: "ground", speed: 30 }],
          damage: {
            dice: 6,
            count: 1,
            stat: ["AGILITY"],
            type: ["Piercing", "Slashing", "Rot"],
          },
          abilities: [
            {
              type: "Follow-up",
              title: "Surprise Strike",
              text: "Increase the Damage by 2 steps if the Beast is unseen by the target.",
            },
          ],
        },
      ],
    },
  },
};

const combinedTattooed = variantClassCombiner(beastmaster, tattooedBeastmaster);
beastmaster.variants = [combinedTattooed];
export default beastmaster;
