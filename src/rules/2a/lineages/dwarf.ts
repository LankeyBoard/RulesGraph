import { Lineage } from "../../../schema/types.generated";

const dwarf: Lineage = {
  title: "Dwarf",
  slug: "DWARF",
  description: [
    "Dwarves are stout and stocky, with thick beards and durable builds",
    "Dwarves reach maturity around 30 years old, and will typically live between 150 and 200 years.",
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
      costsFortunesFavor: true,
      text: [
        {
          text: "You dig at twice the normal speed.",
        },
        {
          text: "You can spend your Fortune's Favor to automatically pass any digging related Test.",
        },
      ],
    },
    {
      title: "Hearty",
      slug: "DWARF-HEARTY",
      text: [
        {
          text: "Gain +5 to Tests to resist poisons as well as alcohol related effects.",
        },
      ],
    },
  ],
};
export default dwarf;
