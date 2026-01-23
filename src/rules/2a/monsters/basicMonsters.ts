import { MonsterList } from "../../../schema/types.generated";
import AnimatedItems from "./animatedItems/animatedItems";
import Goblins from "./goblins/goblins";
import { MonsterTags } from "./MonsterTags";
import Orcs from "./orcs/orcs";
import Skeletons from "./undead/skeletons";

const basicMonsters: MonsterList[] = [
  {
    name: "Minotaur",
    level: 3,
    size: "LARGE",
    type: "Boss",
    description: [
      {
        text: "A human/bull hybrid, who hunts for pleasure wielding a massive axe.",
      },
    ],
    img: null,
    health: 20,
    armor: 12,
    Stats: { mettle: 3, agility: 1, heart: 1, intellect: -2 },
    speed: [{ type: "ground", speed: 30 }],
    hit: 5,
    range: { min: 0, max: 20 },
    damage: { count: 1, dice: 12, flat: 5 },
    tags: [MonsterTags.SKIRMISHER],
    features: [
      {
        title: "Charger",
        slug: "MINOTAUR-CHARGER",
        text: [
          {
            text: "When the Minotaur moves at least 20 ft. before Attacking, increase their Base Damage by 2 Steps.",
          },
        ],
      },
    ],
  },

  /* ===========================
     LEVEL 1 – BANDITS
     =========================== */
  {
    name: "Bandits",
    description: [
      {
        text: "Desperate or cruel folk preying on travelers. They will happily use underhanded tricks and anything else to get the upper hand and live another day.",
      },
    ],
    monsters: [
      {
        name: "Bandit Cutpurse",
        level: 1,
        size: "MEDIUM",
        type: "Minion",
        tags: [MonsterTags.SKIRMISHER],
        description: [
          { text: "A fast-moving thief with a short blade and a few darts." },
        ],
        health: 12,
        armor: 12,
        Stats: { mettle: 0, agility: 2, heart: -1, intellect: 0 },
        speed: [{ type: "ground", speed: 30 }],
        hit: 4,
        range: { min: 0, max: 60 },
        damage: { count: 1, dice: 6, flat: 3 },
        features: [],
      },
      {
        name: "Bandit Enforcer",
        level: 1,
        size: "MEDIUM",
        type: "Monster",
        tags: [MonsterTags.BRUISER],
        description: [{ text: "A broad-shouldered thug who relies on force." }],
        health: 18,
        armor: 13,
        Stats: { mettle: 2, agility: 0, heart: 0, intellect: -1 },
        speed: [{ type: "ground", speed: 25 }],
        hit: 4,
        range: { min: 0, max: 5 },
        damage: { count: 1, dice: 8, flat: 3 },
        features: [
          {
            title: "Menacing Blow",
            slug: "BANDIT-MENACING",
            text: [
              {
                text: "On a hit, the target is Hindered until the end of their next turn.",
              },
            ],
          },
        ],
      },
      {
        name: "Bandit Hunter",
        level: 1,
        size: "MEDIUM",
        type: "Monster",
        tags: [MonsterTags.AMBUSHER],
        description: [
          {
            text: "Even bandits need to eat, and hunters are usually the ones to get it.",
          },
        ],
        health: 16,
        armor: 13,
        Stats: { mettle: -1, agility: 3, heart: 0, intellect: -1 },
        speed: [{ type: "ground", speed: 30 }],
        hit: 3,
        range: { min: 0, max: 100 },
        damage: { count: 1, dice: 8, flat: 3 },
        features: [
          {
            title: "Sneak's Strike",
            slug: "BANDIT-SNEAKS-STRIKE",
            text: [
              {
                text: "When the Bandit Hunter is Hidden, their Attack Damage is increased by 2 Steps.",
              },
            ],
          },
        ],
      },
      {
        name: "Bandit King",
        level: 1,
        size: "MEDIUM",
        type: "Boss",
        tags: [MonsterTags.LEADER],
        description: [
          {
            text: "A self appointed king, they lead their little group, pillaging and stealing and taking what they need from those who can't stop them.",
          },
        ],
        health: 22,
        armor: 14,
        Stats: { mettle: 2, agility: 0, heart: 2, intellect: -1 },
        speed: [{ type: "ground", speed: 30 }],
        hit: 4,
        range: { min: 0, max: 60 },
        damage: { count: 1, dice: 10, flat: 4 },
        features: [
          {
            title: "Leaders Call",
            slug: "BANDIT-LEADER",
            text: [
              {
                text: "Other Bandits gain +5 Speed when moving towards the Bandit King.",
              },
            ],
          },
          {
            title: "To Arms",
            slug: "BANDIT-TO-ARMS",
            actionType: "ACTION",
            text: [
              {
                text: "When unengaged, as an Action, the Bandit King can increase the Damage Dice of all bandits within 120 ft. by 1 Dice Step.",
              },
            ],
          },
        ],
      },
    ],
  },

  /* ===========================
     LEVEL 2 – SWAMP THINGS
     =========================== */
  {
    name: "Bog Lurker",
    level: 2,
    size: "MEDIUM",
    type: "Monster",
    tags: [MonsterTags.AMBUSHER],
    description: [
      { text: "A half-formed humanoid that strikes from murky water." },
    ],
    health: 21,
    armor: 13,
    Stats: { mettle: 1, agility: 2, heart: -1, intellect: -2 },
    speed: [{ type: "ground", speed: 25 }],
    hit: 4,
    range: { min: 0, max: 5 },
    damage: { count: 1, dice: 6, flat: 4, type: ["Rot"] },
    features: [
      {
        title: "Grasping Strike",
        slug: "BOG-GRASP",
        text: [
          {
            text: "On a hit, the target is Restrained until the end of their next turn.",
          },
        ],
      },
    ],
  },

  /* ===========================
     LEVEL 3 – ARCANE SENTRIES
     =========================== */

  {
    name: "Runic Sentry",
    level: 3,
    size: "SMALL",
    type: "Monster",
    tags: [MonsterTags.CONTROLLER],
    description: [{ text: "A floating stone marked with glowing runes." }],
    health: 21,
    armor: 14,
    Stats: { mettle: 2, agility: 0, heart: 0, intellect: 2 },
    speed: [{ type: "flying", speed: 20 }],
    hit: 5,
    range: { min: 0, max: 60 },
    damage: { count: 1, dice: 10, flat: 4, type: ["Arcane"] },
    features: [
      {
        title: "Disruptive Pulse",
        slug: "SENTRY-PULSE",
        text: [{ text: "On a hit, the target takes -2 to their next Test." }],
      },
    ],
  },

  /* ===========================
     LEVEL 4 – WAR CULT
     =========================== */
  {
    name: "Ashbound Cult",
    description: [{ text: "Fanatics who worship destruction through fire." }],
    monsters: [
      {
        name: "Ashbound Zealot",
        level: 4,
        size: "MEDIUM",
        type: "Monster",
        tags: [],
        description: [
          { text: "A screaming devotee wielding burning weapons." },
        ],
        health: 21,
        armor: 14,
        Stats: { mettle: 2, agility: 1, heart: 1, intellect: -1 },
        speed: [{ type: "ground", speed: 30 }],
        hit: 5,
        range: { min: 0, max: 5 },
        damage: { count: 1, dice: 12, flat: 4, type: ["Fire"] },
        features: [
          {
            title: "Burning Zeal",
            slug: "ZEALOT-BURN",
            text: [
              {
                text: "On a hit, deal 1d4 Fire damage at the start of the target’s next turn.",
              },
            ],
          },
        ],
      },
    ],
  },

  /* ===========================
     LEVEL 5 – BEASTS
     =========================== */

  {
    name: "Thundermaw",
    level: 5,
    size: "MEDIUM",
    type: "Monster",
    tags: [MonsterTags.BRUISER],
    description: [{ text: "A massive predator crackling with static." }],
    health: 26,
    armor: 14,
    Stats: { mettle: 3, agility: 1, heart: 1, intellect: -3 },
    speed: [{ type: "ground", speed: 35 }],
    hit: 6,
    range: { min: 0, max: 5 },
    damage: { count: 2, dice: 6, flat: 4, type: ["Lightning"] },
    features: [
      {
        title: "Thunderous Bite",
        slug: "THUNDERMAW-BITE",
        text: [
          { text: "On a hit, the target is pushed 5ft and knocked Prone." },
        ],
      },
    ],
  },

  /* ===========================
     LEVEL 6 – ELITE SOLDIERS
     =========================== */
  {
    name: "Iron Legion",
    description: [
      { text: "Veteran soldiers equipped with disciplined tactics." },
    ],
    monsters: [
      {
        name: "Legion Vanguard",
        level: 6,
        size: "MEDIUM",
        type: "Monster",
        tags: [MonsterTags.BRUISER],
        description: [{ text: "A heavily armored frontline soldier." }],
        health: 26,
        armor: 14,
        Stats: { mettle: 3, agility: 1, heart: 2, intellect: 0 },
        speed: [{ type: "ground", speed: 25 }],
        hit: 6,
        range: { min: 0, max: 80 },
        damage: { count: 2, dice: 6, flat: 5 },
        features: [
          {
            title: "Shield Wall",
            slug: "LEGION-SHIELD",
            text: [{ text: "Adjacent allies gain +1 Armor." }],
          },
        ],
      },
    ],
  },

  /* ===========================
     LEVEL 8 – BOSS
     =========================== */
  {
    name: "Storm Tyrant",
    level: 8,
    size: "GIGANTIC",
    type: "Boss",
    tags: [MonsterTags.CONTROLLER, MonsterTags.SKIRMISHER],
    description: [{ text: "A towering figure wreathed in living lightning." }],
    health: 45,
    armor: 15,
    Stats: { mettle: 4, agility: 2, heart: 2, intellect: 2 },
    speed: [{ type: "ground", speed: 30 }],
    hit: 6,
    range: { min: 0, max: 60 },
    damage: { count: 2, dice: 8, flat: 6, type: ["Lightning"] },
    features: [
      {
        title: "Chain Lightning",
        slug: "STORM-CHAIN",
        text: [
          {
            text: "On a hit, arc lightning to another target within 10ft for half damage.",
          },
        ],
      },
      {
        title: "Eye of the Storm",
        slug: "STORM-EYE",
        text: [{ text: "Difficult terrain within 15ft of the Storm Tyrant." }],
      },
    ],
  },
];
basicMonsters.push(AnimatedItems);
basicMonsters.push(Skeletons);
basicMonsters.push(Goblins);
basicMonsters.push(Orcs);

export default basicMonsters.sort();
