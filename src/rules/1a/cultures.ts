import { Culture } from "../../schema/types.generated";

const culturesData: Culture[] = [
  {
    title: "Deep Mining",
    slug: "DEEP-MINING",
    description: [
      "The Deep Mining culture hails from the subterranean realms, where they've mastered the art of extracting precious stones and metals. Known for their resilience and craftsmanship, they carve magnificent halls and forge legendary artifacts beneath the earth.",
    ],
    stat: "+1 to Mettle or Heart",
    languages: "Allspeak & Dwarvish",
    traits: [
      {
        title: "A Sense of Value",
        slug: "DEEP-MINGIN-VALUE",
        text: [
          {
            text: "You always know the approximate value of precious stones and metals.",
          },
        ],
      },
      {
        title: "The Stone Remembers",
        slug: "DEEP-MINING-REMEMBERS",
        text: [
          {
            text: "You always have Fortune's Favor on tests to gather and recall information about stones, mining and masonry.",
          },
        ],
      },
    ],
  },
  {
    title: "Forest Folk",
    slug: "FOREST-FOLK",
    description: [
      "The Forest Folk are a mystical elven culture deeply connected to the woods. Their elegant language, infused with nature's harmony, resonates with the rustling leaves and songs of birds. Renowned for their arboreal wisdom, they protect ancient groves and practice the arts and music.",
    ],
    stat: "+1 to Agility or Intellect",
    languages: "Allspeak & Elvish",
    traits: [
      {
        title: "Nature's Steward",
        slug: "FOREST-FOLK-STEWARD",
        text: [
          {
            text: "You always have Fortune's Favor on tests to gather and recall information about trees, plants, and animals.",
          },
        ],
      },
      {
        title: "Woodland Skills",
        slug: "FOREST-FOLK-SKILLS",
        text: [
          { text: "Gain training in a musical instrument or artist's tools." },
        ],
      },
    ],
  },
  {
    title: "Nomads",
    slug: "NOMADS",
    description: [
      "Nomads roam the vast landscapes, embodying a harmonious existence with nature. Unencumbered by permanent settlements, they excel in survival and navigation, possessing an innate connection to the lands they travel.",
    ],
    stat: "+1 to Heart or Mettle",
    languages:
      "Allspeak and one language of your choice based on the regions most traveled in.",
    traits: [
      {
        title: "Natural Navigator",
        slug: "NOMADS-NAVIGATOR",
        text: [
          {
            text: "You unconsciously keep track of your location and know how to retrace your steps without issue. As long as you aren't incapacitated or deprived of all senses and moved, you know your way back to the last place you slept.",
          },
        ],
      },
      {
        title: "Versatile Skills",
        slug: "NOMADS-SKILLS",
        text: [
          { text: "Gain training in one gaming set or musical instrument." },
        ],
      },
    ],
  },
  {
    title: "Empyrian",
    slug: "EMPYRIAN",
    description: [
      "Hailing from a vast multicultural empire, Empyrians seek to foster diplomacy and learning. Their open-mindedness enables them to connect with individuals from various backgrounds, making them skilled negotiators and diplomats.",
    ],
    stat: "+1 to Intelligence or Heart",
    languages: "Allspeak & Another language of your choice",
    traits: [
      {
        title: "Multi-culturalist",
        slug: "EMPYRIAN-MULTI-CULTURALIST",
        text: [
          {
            text: "You always have Fortune's Favor on tests to communicate with characters who you don't share a language with.",
          },
        ],
      },
      {
        title: "Gaming Expertise",
        slug: "EMPYRIAN-GAMING",
        text: [{ text: "Gain training in one gaming set." }],
      },
    ],
  },
  {
    title: "The Mariners",
    slug: "MARINERS",
    description: [
      "The Mariners are seasoned sailors, tradesmen, and shipwrights, navigating the vast oceans of the world. Known for their seafaring instincts, they excel in maritime activities and shipbuilding.",
    ],
    stat: "+1 to Agility or Heart",
    languages:
      "Allspeak and one language of your choice based on the regions most traveled in.",
    traits: [
      {
        title: "Born on the Water",
        slug: "MARINERS-WATER",
        text: [
          {
            text: "Double your normal swim speed and you can hold your breath for twice as long.",
          },
        ],
      },
      {
        title: "Knotty",
        slug: "MARINERS-KNOTTY",
        text: [{ text: "Gain +2 on tests to tie knots." }],
      },
    ],
  },
  {
    title: "Highland Clans",
    slug: "HIGHLAND-CLANS",
    description: [
      "Highland Clans reside in rugged mountainous regions. Known for their expertise in mountain survival and climbing, they forge strong communal bonds and defend their territories with unwavering resolve.",
    ],
    stat: "+1 to Mettle or Heart",
    languages: "Allspeak",
    traits: [
      {
        title: "Rugged Mountaineer",
        slug: "HIGHLAND-CLANS-MOUNTAINEER",
        text: [
          {
            text: "You always have Fortune's Favor on Mettle Tests to resist the effects of cold weather. You also gain +2 on tests to navigate cliffs and mountains.",
          },
        ],
      },
      {
        title: "Craig Jumper",
        slug: "HIGHLAND-CLAN-JUMPER",
        text: [{ text: "Your horizontal jump distance is increased by 5ft." }],
      },
    ],
  },
  {
    title: "Peoples of the Meadowlands",
    slug: "MEADOWLANDS",
    description: [
      "The Peoples of the Meadowlands are a community deeply rooted in the fertile plains and gentle meadows of the world. They are known for their idyllic farms, vibrant orchards, and close-knit communal spirit. The Meadowlands people balance hard work and relaxation, and their harvest festivals are some of the most spectacular in all the land.",
    ],
    stat: "+1 to Mettle or Heart",
    languages: "Allspeak",
    traits: [
      {
        title: "Helping Hand",
        slug: "MEADOWLANDS-HELPING",
        text: [
          {
            text: "When you have Fortune’s Favor and an ally within 5ft of you is Tested, you can spend your Fortune’s Favor to grant them a +3 on the Test.",
          },
        ],
      },
      {
        title: "Meadowland Hospitality",
        slug: "MEADOWLANDS-HOSPITALITY",
        text: [
          {
            text: "+2 bonus to Heart tests when talking with strangers for the first time.",
          },
        ],
      },
    ],
  },
  {
    title: "Fae Folk",
    slug: "FAE-FOLK",
    description: [
      "The Fae are a strange and enigmatic folk; they spend most of their time deep in the woods where the magic is strongest and the barrier between the world and the beyond is thin.",
    ],
    stat: "+1 to Intellect or Heart",
    languages: "Allspeak, Thissletongue",
    traits: [
      {
        title: "Never Trust a Tulip",
        slug: "FAE-FOLK-NEVER-TRUST-A-TULIP",
        text: [
          {
            text: "You grew up having to double and triple check your interactions for deceptions. Add a +2 to Heart Tests to determine if someone is lying.",
          },
        ],
      },
      {
        title: "Fae Touched",
        slug: "FAE-FOLK-TOUCHED",
        text: [
          {
            text: "Spend 10 minutes to make flowers blossom and plants grow as if they've been growing for a month.",
          },
        ],
      },
    ],
  },
];
export default culturesData;
