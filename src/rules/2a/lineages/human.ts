import { Lineage } from "../../../schema/types.generated";

const human: Lineage = {
  title: "Human",
  slug: "HUMAN",
  description: [
    "Humans have a wide range of appearances, with various skin tones, hair colors, and facial features.",
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
      costsFortunesFavor: true,
      text: [
        {
          text: "You can spend Fortune's Favor to automatically pass one Test to resist a disease.",
        },
      ],
    },
  ],
};

export default human;
