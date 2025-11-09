import { Lineage } from "../../schema/types.generated";
import chimeric from "./lineages/chimeric";

const lineagesData: Lineage[] = [
  {
    title: "Human",
    slug: "HUMAN",
    description: [
      "Humans typically have a wide range of appearances, with various skin tones, hair colors, and facial features.",
    ],
    size: ["MEDIUM"],
    speeds: [{ speed: 30, type: "ground" }],
    stat: "+1 to any stat",
    traits: [
      {
        title: "Adaptable",
        slug: "HUMAN-ADAPTABLE",
        text: [{ text: "Pick an extra Novice Feature at level 1." }],
      },
      {
        title: "Resilient Immune System",
        slug: "HUMAN-RESILIENT",
        text: [
          {
            text: "Gain Fortune's Favor on tests to resist the effects of diseases.",
          },
        ],
      },
    ],
  },
  {
    title: "Dwarf",
    slug: "DWARF",
    description: [
      "Dwarves are stout and stocky, with thick beards and durable builds",
    ],
    size: ["MEDIUM"],
    speeds: [{ speed: 25, type: "ground" }],
    stat: "+1 to Mettle",
    traits: [
      {
        title: "Low Light Vision",
        slug: "DWARF-LOW-LIGHT-VISION",
        text: [
          {
            text: "You can see in dim light as though it were bright. You cannot see in total darkness.",
          },
        ],
      },
      {
        title: "Diggy Hole",
        slug: "DWARF-DIGGY-HOLE",
        text: [
          {
            text: "You dig at twice the normal speed, gain Fortune's Favor on any Tests related to digging.",
          },
        ],
      },
      {
        title: "Hearty",
        slug: "DWARF-HEARTY",
        text: [
          {
            text: "Gain Fortune's Favor on checks to resist poisons as well as alcohol related effects.",
          },
        ],
      },
    ],
  },
  {
    title: "Elf",
    slug: "ELF",
    description: [
      "Tall, slender and long lived, Elves have pointed ears and bright eyes.",
    ],
    size: ["MEDIUM"],
    speeds: [{ speed: 35, type: "ground" }],
    stat: "+1 to Agility or Intellect",
    traits: [
      {
        title: "Farsight",
        slug: "ELF-FARSIGHT",
        text: [{ text: "You can see twice as far as other races." }],
      },
      {
        title: "Light Footed",
        slug: "ELF-LIGHT-FOOTED",
        text: [{ text: "You can stand atop snow without sinking in." }],
      },
      {
        title: "Trance",
        slug: "ELF-TRANCE",
        text: [
          {
            text: "Instead of sleeping, you are able to enter a trance. While in a trance you cannot move, but remain aware of your surroundings. You have to trance for 6 hours to be fully rested.",
          },
        ],
      },
    ],
  },
  {
    title: "Faery",
    slug: "FAERY",
    description: [
      "Faeries have large gossamer wings, usually similar to butterfly or moth wings. Fully grown they are usually 2-2.5ft tall.",
    ],
    size: ["TINY"],
    speeds: [
      { speed: 20, type: "ground" },
      { speed: 20, type: "flying" },
    ],
    stat: "+1 to Agility or Heart",
    traits: [
      {
        title: "Wings",
        slug: "FAERY-WINGS",
        text: [
          {
            text: "Your wings allow you to fly, flitting from place to place. You gain a flying speed of 20ft and can remain in the air for up to 10 minutes.",
          },
        ],
      },
      {
        title: "Fae Origins",
        slug: "FAERY-ORIGIN",
        text: [
          {
            text: "Your fae origins help you to resist the effects that would charm you. You have Fortune's Favor on tests to resist the effects of charm spells.",
          },
        ],
      },
    ],
  },
];
lineagesData.push(chimeric);
lineagesData.sort((a, b) => a.title.localeCompare(b.title));
export default lineagesData;
