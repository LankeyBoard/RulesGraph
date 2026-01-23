import { MonsterList } from "../../../../schema/types.generated";
import { MonsterTags } from "../MonsterTags";

const Orcs: MonsterList = {
  name: "Orcs",
  description: [
    {
      text: "Orcs are large, they are green, and they are mean. They take what they want and leave destruction in their wake. They usually travel in small to medium war bands, but with the right leadership, their numbers can swell.",
    },
  ],
  img: {
    target:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/DnD_Orc.png/960px-DnD_Orc.png",
  },
  monsters: [
    {
      name: "Orc Initiate",
      level: 3,
      size: "MEDIUM",
      type: "Minion",
      tags: [MonsterTags.SKIRMISHER],
      description: [
        {
          text: "These orcs have just come of age, and are still learning the ropes. They typically fight with spears and stolen weapons.",
        },
      ],
      health: 15,
      armor: 13,
      Stats: { mettle: 2, agility: 2, heart: -1, intellect: -2 },
      speed: [{ type: "ground", speed: 30 }],
      hit: 4,
      range: { min: 0, max: 60 },
      damage: { count: 1, dice: 10, flat: 4, type: ["Piercing", "Slashing"] },
      features: [],
    },
    {
      name: "Orc Raider",
      level: 3,
      size: "MEDIUM",
      type: "Monster",
      tags: [MonsterTags.BRUISER],
      description: [
        {
          text: "Orc raiders are skilled fighters, strong and practiced they are always going for the kill.",
        },
      ],
      health: 21,
      armor: 14,
      Stats: { mettle: 4, agility: 2, heart: -1, intellect: -2 },
      speed: [{ type: "ground", speed: 30 }],
      hit: 5,
      range: { min: 0, max: 80 },
      damage: { count: 1, dice: 10, flat: 5, type: ["Piercing", "Slashing"] },
      features: [
        {
          title: "Worg Rider",
          slug: "ORC-WORG-RIDER",
          text: [
            {
              text: "While mounted on a Worg, the Orc Raider's Damage Dice is increased by 1 Step.",
            },
          ],
        },
      ],
    },
    {
      name: "Worg",
      level: 3,
      size: "LARGE",
      type: "Monster",
      tags: [MonsterTags.MOUNT],
      description: [
        {
          text: "Worgs are large, hiena like animals, covered in coarse gray and brown fur, with large strong jaws. They were bread by the orcs to act as equal parts attack dog and mount. They are ferocious and loyal to their orcs, but quick to snap at any perceived threat.",
        },
      ],
      health: 21,
      armor: 14,
      Stats: { mettle: 3, agility: 3, heart: -2, intellect: -3 },
      speed: [{ type: "ground", speed: 40 }],
      hit: 5,
      range: { min: 0, max: 5 },
      damage: { count: 1, dice: 10, flat: 5, type: ["Piercing"] },
      features: [],
    },
    {
      name: "Orc Shaman",
      level: 3,
      size: "MEDIUM",
      type: "Monster",
      tags: [MonsterTags.SUPPORT],
      description: [
        {
          text: "Trained in a combination of herbal medicine and war magic, the Shaman provides support for their allies.",
        },
      ],
      health: 18,
      armor: 13,
      Stats: { mettle: -1, agility: 0, heart: 3, intellect: 1 },
      speed: [{ type: "ground", speed: 30 }],
      hit: 5,
      range: { min: 0, max: 100 },
      damage: { count: 1, dice: 8, flat: 5, type: ["Rot"] },
      features: [
        {
          title: "Invigorating Chant",
          slug: "ORC-CHANT",
          text: [
            {
              text: "As an Action, begin to chant. While Chanting, all orcs within 120 ft. gain +2 to Hit and Damage. When the Shaman takes damage while Chanting, they must make a Heart Test equal to 5 + damage taken. On a failure, the chant stops. On a mixed, the next time they make this test this Round. They make it with misfortune.",
            },
          ],
        },
      ],
    },
    {
      name: "Orc General",
      level: 3,
      size: "MEDIUM",
      type: "Boss",
      tags: [MonsterTags.SKIRMISHER],
      description: [
        {
          text: "Typically the leader of a tribe, an Orc General is a formidable opponent. They will be equipped with the best of the items their tribe has found and in peak physical condition.",
        },
      ],
      health: 30,
      armor: 15,
      Stats: { mettle: 3, agility: 0, heart: 2, intellect: 0 },
      speed: [{ type: "ground", speed: 30 }],
      hit: 5,
      range: { min: 0, max: 120 },
      damage: { count: 2, dice: 6, flat: 5, type: ["Piercing", "Slashing"] },
      features: [
        {
          title: "Cleaving Strikes",
          slug: "ORC-CLEAVE",
          text: [
            {
              text: "The Orc General's Melee attacks strike up to 3 targets within melee range and next to each other.",
            },
          ],
        },
        {
          title: "Exploit Openings",
          slug: "ORC-EXPLOIT",
          text: [
            {
              text: "When unengaged, the Orc General's Damage is increased by 2 Steps.",
            },
            {
              type: "FLAVOR",
              text: "If not kept in check, the General is excellent at using the opening created by their servants.",
            },
          ],
        },
      ],
    },
  ],
};

export default Orcs;
