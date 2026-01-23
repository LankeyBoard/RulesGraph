import { MonsterList } from "../../../../schema/types.generated";
import { MonsterTags } from "../MonsterTags";

const Goblins: MonsterList = {
  name: "Goblins",
  description: [
    {
      text: "Small, vile creatures with pointed features and a wicked inventiveness.",
    },
  ],
  monsters: [
    {
      name: "Goblin",
      level: 1,
      size: "SMALL",
      type: "Minion",
      description: [
        {
          text: "A typical goblin, usually wielding a scavenged sword and a light bow.",
        },
      ],
      img: null,
      health: 12,
      armor: 12,
      Stats: { mettle: -1, agility: 2, heart: -2, intellect: -1 },
      speed: [{ type: "ground", speed: 30 }],
      hit: 3,
      range: { min: 0, max: 60 },
      damage: { count: 1, dice: 6, flat: 3 },
      features: [],
    },
    {
      name: "Goblin Scout",
      level: 1,
      size: "SMALL",
      type: "Monster",
      description: [
        {
          text: "Scouts tend to be more agile and use basic poisons to add some extra damage to their attacks.",
        },
      ],
      img: null,
      health: 17,
      armor: 12,
      Stats: { mettle: -1, agility: 3, heart: -2, intellect: 0 },
      speed: [{ type: "ground", speed: 30 }],
      hit: 4,
      range: { min: 0, max: 60 },
      damage: { count: 1, dice: 8, flat: 3, type: ["Rot"] },
      tags: [MonsterTags.AMBUSHER],
      features: [],
    },
  ],
};

export default Goblins;
