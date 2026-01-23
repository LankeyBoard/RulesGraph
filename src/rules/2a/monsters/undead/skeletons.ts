import { MonsterList } from "../../../../schema/types.generated";
import { MonsterTags } from "../MonsterTags";

const Skeletons: MonsterList = {
  name: "Skeletons",
  description: [
    {
      text: "Skeletons are reanimated bones, suitable for low level adventures.",
    },
  ],
  monsters: [
    {
      name: "Skeleton",
      level: 0.5,
      size: "MEDIUM",
      type: "Minion",
      description: [
        {
          text: "A reanimated skeleton. It has limited senses and follows exactly the commands of its creator.",
        },
      ],
      img: null,
      health: 10,
      armor: 10,
      Stats: { mettle: -2, agility: -4, heart: -4, intellect: -4 },
      speed: [{ type: "ground", speed: 20 }],
      hit: 2,
      range: { min: 0, max: 5 },
      damage: { count: 1, dice: 4 },
      features: [],
    },
    {
      name: "Armored Skeleton",
      level: 0.5,
      size: "MEDIUM",
      type: "Monster",
      description: [
        {
          text: "A reanimated skeleton equipped with a rusted set of armor and weapons.",
        },
      ],
      img: null,
      health: 20,
      armor: 12,
      Stats: { mettle: -2, agility: -4, heart: -4, intellect: -4 },
      speed: [{ type: "ground", speed: 20 }],
      hit: 3,
      range: { min: 0, max: 60 },
      damage: { count: 1, dice: 4, flat: 2 },
      features: [],
    },
    {
      name: "Skeleton Juggernaut",
      level: 0.5,
      size: "LARGE",
      type: "Boss",
      description: [
        {
          text: "Extra enchantments and runes have infused this skeleton with more power.",
        },
      ],
      img: null,
      health: 20,
      armor: 12,
      Stats: { mettle: 0, agility: -4, heart: -4, intellect: -4 },
      speed: [{ type: "ground", speed: 30 }],
      hit: 3,
      range: { min: 0, max: 80 },
      damage: { count: 1, dice: 6, flat: 2 },
      tags: [MonsterTags.BRUISER],
      features: [],
    },
  ],
};

export default Skeletons;
