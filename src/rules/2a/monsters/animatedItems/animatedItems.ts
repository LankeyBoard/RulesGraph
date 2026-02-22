import { MonsterList } from "../../../../schema/types.generated";
import { MonsterTags } from "../MonsterTags";

const AnimatedItems: MonsterList = {
  name: "Animated Items",
  description: [
    {
      text: "Items that have been brought to life via arcane animation, either intentional or accidental.",
    },
  ],
  monsters: [
    // ===== MINIONS =====
    {
      name: "Broken Chair",
      level: 4,
      size: "SMALL",
      type: "Minion",
      tags: [MonsterTags.SKIRMISHER],
      description: [
        { text: "A shattered chair that hops and lunges with jagged legs." },
      ],
      health: 12,
      armor: 13,
      Stats: { mettle: 1, agility: 2, heart: -2, intellect: -3 },
      speed: [{ type: "ground", speed: 25 }],
      hit: 5,
      range: { min: 0, max: 5 },
      damage: { count: 1, dice: 8, flat: 5 },
      features: [],
    },
    {
      name: "Swarm of Plates",
      level: 4,
      size: "MEDIUM",
      type: "Minion",
      tags: [MonsterTags.SWARM],
      description: [
        { text: "Dozens of ceramic plates spin and shatter against foes." },
      ],
      health: 14,
      armor: 12,
      Stats: { mettle: 0, agility: 3, heart: -2, intellect: -3 },
      speed: [{ type: "flying", speed: 30 }],
      hit: 5,
      range: { min: 0, max: 10 },
      damage: { count: 1, dice: 8, flat: 5 },
      features: [],
    },

    // ===== MONSTERS =====
    {
      name: "Animated Rug",
      level: 4,
      size: "LARGE",
      type: "Monster",
      tags: [MonsterTags.CONTROLLER],
      description: [
        { text: "A heavy woven rug that twists and wraps around intruders." },
      ],
      health: 21,
      armor: 14,
      Stats: { mettle: 2, agility: 1, heart: 0, intellect: -2 },
      speed: [{ type: "ground", speed: 20 }],
      hit: 5,
      range: { min: 0, max: 5 },
      damage: { count: 1, dice: 10, flat: 5 },
      features: [
        {
          title: "Smother",
          slug: "RUG-SMOTHER",
          text: [
            {
              text: "On a hit, the target is Entangled. The target is Entangled until the Rug takes 10 or more damage, or they use an Action to free themselves.",
            },
            {
              text: "The target must be Large or smaller and only 1 target can be Entangled at a time.",
            },
          ],
        },
      ],
    },
    {
      name: "Living Door",
      level: 5,
      size: "LARGE",
      type: "Monster",
      tags: [MonsterTags.BRUISER],
      description: [
        { text: "A reinforced door that slams, blocks, and bars passage." },
      ],
      health: 23,
      armor: 15,
      Stats: { mettle: 3, agility: -1, heart: 1, intellect: -2 },
      speed: [{ type: "ground", speed: 15 }],
      hit: 5,
      range: { min: 0, max: 5 },
      damage: { count: 1, dice: 12, flat: 5 },
      features: [
        {
          title: "Bar the Way",
          slug: "DOOR-BLOCK",
          text: [
            {
              text: "Allies within 5ft. of the door have [Cover](/rules/player_rules#COVER).",
            },
          ],
        },
      ],
    },
    {
      name: "Animated Weapon Rack",
      level: 5,
      size: "MEDIUM",
      type: "Monster",
      tags: [MonsterTags.SKIRMISHER],
      description: [
        { text: "A cluster of blades and hafts attacking in unison." },
      ],
      health: 21,
      armor: 14,
      Stats: { mettle: 2, agility: 2, heart: 0, intellect: -1 },
      speed: [{ type: "ground", speed: 25 }],
      hit: 5,
      range: { min: 0, max: 10 },
      damage: { count: 1, dice: 12, flat: 4 },
      features: [],
    },
    {
      name: "Haunted Chandelier",
      level: 6,
      size: "LARGE",
      type: "Monster",
      tags: [MonsterTags.SKIRMISHER],
      description: [
        { text: "A blazing chandelier that swings and crashes from above." },
      ],
      health: 24,
      armor: 14,
      Stats: { mettle: 2, agility: 3, heart: 0, intellect: -1 },
      speed: [{ type: "flying", speed: 40 }],
      hit: 6,
      range: { min: 0, max: 10 },
      damage: { count: 2, dice: 6, flat: 5, type: ["Fire"] },
      features: [
        {
          title: "Falling Sparks",
          slug: "CHANDELIER-FIRE",
          text: [
            {
              text: "Creatures damaged by the Chandelier take 1d4 Fire damage at the start of their next turn.",
            },
          ],
        },
      ],
    },

    // ===== BOSSES =====
    {
      name: "Animated Armor",
      level: 6,
      size: "MEDIUM",
      type: "Boss",
      tags: [MonsterTags.BRUISER, MonsterTags.TANK],
      description: [
        { text: "A fully armored knight animated by a binding sigil." },
      ],
      health: 32,
      armor: 16,
      Stats: { mettle: 4, agility: 0, heart: 2, intellect: -1 },
      speed: [{ type: "ground", speed: 30 }],
      hit: 6,
      range: { min: 0, max: 5 },
      damage: { count: 2, dice: 6, flat: 5 },
      features: [
        {
          title: "Unyielding Frame",
          slug: "ARMOR-RESIST",
          text: [
            { text: "The Animated Armor is Resistant to non-magical damage." },
          ],
        },
        {
          title: "Crushing Advance",
          slug: "ARMOR-PUSH",
          text: [
            {
              text: "On a hit, the target must succeed on a Mettle Test or be knocked Prone.",
            },
          ],
        },
      ],
    },
    {
      name: "Grand Wardrobe",
      level: 7,
      size: "LARGE",
      type: "Boss",
      tags: [MonsterTags.CONTROLLER, MonsterTags.SUPPORT],
      description: [
        { text: "An enormous wardrobe spilling cursed garments into battle." },
      ],
      health: 34,
      armor: 15,
      Stats: { mettle: 3, agility: -1, heart: -2, intellect: 2 },
      speed: [{ type: "ground", speed: 20 }],
      hit: 6,
      range: { min: 0, max: 15 },
      damage: { count: 2, dice: 6, flat: 4 },
      features: [
        {
          title: "Ensnaring Cloth",
          slug: "WARDROBE-GRAPPLE",
          text: [
            {
              text: "On a hit, the target is Pinned. The target is Pinned until the Wardrobe takes 20 or more damage, or they use an Action to free themselves.",
            },
            {
              text: "The target must be Large or smaller and only 1 target can be Pinned at a time.",
            },
            {
              text: "At the start of the Round any Pinned Creatures take 1d8 Slashing Damage.",
            },
            {
              type: "FLAVOR",
              text: "The Wardrobe bursts open, scarves and jackets spring forth and snatch the wardrobe's target.",
            },
          ],
        },
        {
          title: "Animate Furnishings",
          slug: "WARDROBE-SUMMON",
          text: [
            {
              text: "Once per encounter, at the start of the Round, summon 2 Broken Chairs or a Swarm of Plates.",
            },
          ],
        },
      ],
    },
  ],
};

export default AnimatedItems;
