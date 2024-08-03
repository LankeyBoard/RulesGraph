import { Lineage } from "../schema/types.generated";

export const lineagesData: Lineage[] = [
  {
    title: "Human",
    slug: "HUMAN",
    description: [
      "Humans typically have a wide range of appearances, with various skin tones, hair colors, and facial features.",
    ],
    size: ["MEDIUM"],
    speed: 30,
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
            text: "Gain Fortune's Favor on Tests to resist the effects of diseases.",
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
    speed: 25,
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
            text: "Gain Fortune's Favor on Tests to resist poisons as well as alcohol related effects.",
          },
        ],
      },
    ],
  },
  {
    title: "ELF",
    slug: "ELF",
    description: [
      "Tall, slender and long lived, Elves have pointed ears and bright eyes.",
    ],
    size: ["MEDIUM"],
    speed: 35,
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
    speeds: [{type: "ground", speed: 20}, {type: "flying", speed: 20}],
    stat: "+1 to Agility or Heart",
    traits: [
      {
        title: "Wings",
        slug: "FAERY-WINGS",
        text: [
          {
            type: "RULE",
            text: "You gain a flying speed of 20 ft. and can remain in the air for up to 10 minutes at a time.",
          },
          {
            type: "FLAVOR",
            text: "Your wings allow you to fly, flitting from place to place.",
          },
        ],
      },
      {
        title: "Fae Origins",
        slug: "FAERY-WINGS",
        text: [
          {
            type: "RULE",
            text: "You have Fortune's Favor on Tests to resist the effects of magical charm effects.",
          },
          {
            type: "FLAVOR",
            text: "Your fae origins help you to resist the effects that would charm you. ",
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
    speed: 30,
    stat: "+1 to any stat",
    traits: [
      {
        title: "Animal Features",
        slug: "CHIMERIC-ANIMAL-FEATURES",
        text: [{ text: "Pick 2 options from the list below." }],
        ruleType: "CHOICE",
        rules: [
          {
            title: "Intimidating",
            slug: "CHIMERIC-INTIMIDATING",
            text: [{ text: "Gain +2 on Tests to intimidate someone." }],
          },
          {
            title: "Cute",
            slug: "CHIMERIC-CUTE",
            text: [{ text: "Gain +2 on Test to persuade someone." }],
          },
          {
            title: "Prehensile Tail",
            slug: "CHIMERIC-PREHENSILE-TAIL",
            text: [
              {
                text: "You can use your prehensile tail to help you balance as well as to grip things and move through the environment. Gain +3 on Tests to climb and balance. Your tail cannot be used to hold weapons or shields in combat.",
              },
            ],
          },
          {
            title: "Fast",
            slug: "CHIMERIC-FAST",
            text: [{ text: "Increase your ground speed by 5 ft." }],
          },
          {
            title: "Tough Skin/Shell",
            slug: "CHIMERIC-TOUGH",
            text: [
              {
                text: "You can calulate your Armor as 13+Agility when not wearing any armor.",
              },
            ],
          },
          {
            title: "Flight",
            slug: "CHIMERIC-FLIGHT",
            text: [
              {
                text: "You have a pair of wings, you have a fly speed equal to your Base Speed. You can fly for up to 10 minutes at a time.",
              },
            ],
          },
          {
            title: "Claws/Fangs",
            slug: "CHIMERIC-CLAWS",
            text: [
              {
                text: "You can attack with your claws/fangs. If you are trained in any melee weapon, you are also trained in your claws/fangs. If you are not, this attack deals 1d6+Mettle damage. Choose if the damage is piercing, slashing or bludgeoning when you pick this trait.",
              },
            ],
          },
          {
            title: "Stealthy",
            slug: "CHIMERIC-STEALTHY",
            text: [
              {
                text: "Add a +2 to Agility Tests to move stealthily and hide.",
              },
            ],
          },
        ],
      },
    ],
  },
];
