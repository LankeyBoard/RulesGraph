import { Lineage } from "../../schema/types.generated";

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
        slug: "FAERY-WINGS",
        text: [
          {
            text: "Your fae origins help you to resist the effects that would charm you. You have Fortune's Favor on tests to resist the effects of charm spells.",
          },
        ],
      },
    ],
  },
  {
    title: "Chimeric",
    slug: "CHIMERIC",
    description: [
      "Chimeric are a whole class of people who are humanoids who express animal traits. Often they have the head of their animal, but they come in many shapes and sizes, sometimes indistinguishable from humans, to obviously Chimeric.",
    ],
    size: ["SMALL", "MEDIUM", "LARGE"],
    speeds: [{ speed: 30, type: "ground" }],
    stat: "+1 to any stat",
    traits: [
      {
        title: "Animal Features",
        slug: "CHIMERIC-ANIMAL-FEATURES",
        text: [{ text: "Pick 2 options from the list below." }],
        ruleType: "CHOICE",
        chooseNum: 2,
        choices: [
          {
            title: "Intimidating",
            slug: "CHIMERIC-INTIMIDATING",
            text: [{ text: "Gain +2 on tests to intimidate someone." }],
          },
          {
            title: "Cute",
            slug: "CHIMERIC-CUTE",
            text: [{ text: "Gain +2 on tests to persuade someone." }],
          },
          {
            title: "Prehensile Tail",
            slug: "CHIMERIC-PREHENSILE-TAIL",
            text: [
              {
                text: "You can use your prehensile tail to help you balance as well as to grip things and move through the environment. Gain +3 on tests to climb and balance. Your tail cannot be used to hold weapons or shields in combat.",
              },
            ],
          },
          {
            title: "Fast",
            slug: "CHIMERIC-FAST",
            text: [{ text: "Increase your speed by 5ft." }],
          },
          {
            title: "Tough Skin/Shell",
            slug: "CHIMERIC-TOUGH",
            text: [
              { text: "Add +3 to your Armor when you are not wearing armor." },
            ],
          },
          {
            title: "Flight",
            slug: "CHIMERIC-FLIGHT",
            text: [
              {
                text: "You have a pair of wings, you have a fly speed equal to your speed. You can fly for up to 10 minutes.",
              },
            ],
          },
          {
            title: "Claws/Fangs",
            slug: "CHIMERIC-CLAWS",
            text: [
              {
                text: "You can attack with your claws/fangs. If you are trained in any melee weapon, you deal your base damage. If you are not, this attack deals 1d6+mettle damage. Choose if the damage is piercing, slashing or bludgeoning when you pick this trait.",
              },
            ],
          },
          {
            title: "Stealthy",
            slug: "CHIMERIC-STEALTHY",
            text: [{ text: "Add a +2 to tests when stealthing." }],
          },
        ],
      },
    ],
  },
];

export default lineagesData;
