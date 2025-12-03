import { Lineage } from "../../../schema/types.generated";

const faery: Lineage = {
  title: "Faery",
  slug: "FAERY",
  description: [
    "Faeries have large gossamer wings, usually similar to butterfly or moth wings. Fully grown they are usually 2-2.5ft tall.",
    "Faeries typically reach maturity at 10 years old and can live to be around 50 years old.",
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
          text: "You gain a Fly Speed of 20ft. and can fly for up to 5 minutes without stopping. If you fly longer you must spend 1 Stamina per minute.",
        },
        {
          text: "Your wings allow you to flit place to place.",
          type: "FLAVOR",
        },
      ],
    },
    {
      title: "Fae Origins",
      slug: "FAERY-ORIGIN",
      text: [
        {
          text: "You can spend Fortune's Favor to automatically pass one Test to resist the effects of a Charm.",
        },
        {
          text: "Your fae origins help you to resist the effects that would charm you.",
          type: "Flavor",
        },
      ],
    },
  ],
};
export default faery;
