import { Lineage } from "../../../schema/types.generated";

const elf: Lineage = {
  title: "Elf",
  slug: "ELF",
  description: [
    "Tall, slender and long lived, Elves have pointed ears and bright eyes.",
    "Elves typically reach adulthood at 30 years and can live up to be up to 1,000 years old.",
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
          text: "Instead of sleeping, you are able to enter a trance. While in a trance you cannot move, but remain aware of your surroundings. You have to trance for 6 hours to gain the benefits of a Night's Rest.",
        },
      ],
    },
  ],
};

export default elf;
