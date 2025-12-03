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
            text: "+3 on Tests to gather and recall information about stones, mining and masonry.",
          },
        ],
      },
      {
        title: "Dig Deep",
        slug: "DEEP-MINING-DIG-DEEP",
        costsFortunesFavor: true,
        text: [
          {
            text: "You can spend your Fortune's Favor to reroll 1 Deflect roll, keeping the new result.",
          },
        ],
      },
    ],
  },
  {
    title: "Forest Folk",
    slug: "FOREST-FOLK",
    description: [
      "The Forest Folk are a mystical elven culture deeply connected to the woods. Renowned for their arboreal wisdom, they protect ancient groves and practice the arts and music.",
    ],
    stat: "+1 to Agility or Intellect",
    languages: "Allspeak & Elvish",
    traits: [
      {
        title: "Nature's Steward",
        slug: "FOREST-FOLK-STEWARD",
        text: [
          {
            text: "Unless you are actively threatening to them, animals are instinctively non-hostile to you.",
          },
        ],
      },
      {
        title: "A Culture of Art",
        slug: "FOREST-FOLK-SKILLS",
        text: [
          {
            text: "Gain training in a stringed instrument or painters's tools.",
          },
        ],
      },
      {
        title: "Quiet Steps",
        slug: "FOREST-FOLK-QUIET-STEP",
        text: [
          {
            text: "Years of quietly walking in the woods have trained you to place your feet carefully and move with intention.",
            type: "Flavor",
          },
          {
            text: "When you take a Test to move quietly, you can spend your Fortune's Favor to automatically succeed on the Test.",
          },
        ],
      },
    ],
  },
  {
    title: "Nomads",
    slug: "NOMADS",
    description: [
      "Nomads roam the vast landscapes, embodying a harmonious existence with nature and leave no trace ethos. Unencumbered by permanent settlements, they excel in survival and navigation, possessing an innate connection to the lands they travel.",
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
        title: "A Traveler's Pass time",
        slug: "NOMADS-SKILLS",
        text: [
          {
            text: "Gain training in one of the following options dice games, card games, flute, or hand drum.",
          },
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
            text: "You gain +3 on Tests to communicate with characters who you don't share a language with.",
          },
        ],
      },
      {
        title: "Empyrian Education",
        slug: "EMPYRIAN-EDUCATION",
        text: [
          {
            text: "You gain +3 on Tests to recall historical facts.",
          },
          {
            text: "The Empyrian education system ensures all of its citizens are equipped with a comprehensive knowledge of history.",
            type: "Flavor",
          },
        ],
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
            text: "Double your normal swim Speed and you can hold your breath for twice as long.",
          },
        ],
      },
      {
        title: "Knotty",
        slug: "MARINERS-KNOTTY",
        text: [{ text: "Gain +3 on Tests to tie knots." }],
      },
      {
        title: "Sea Legs",
        slug: "MARINERS-SEA-LEGS",
        costsFortunesFavor: true,
        text: [
          {
            text: "You cannot be knocked Prone by environmental effects.",
          },
          {
            text: "If an enemy would knock you Prone, you can spend Fortune's Favor to immediately end the Prone condition.",
          },
        ],
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
            text: "+3 on Mettle Tests to resist the effects of cold weather.",
          },
        ],
      },
      {
        title: "Craig Jumper",
        slug: "HIGHLAND-CLAN-JUMPER",
        text: [
          {
            text: "Treat your Mettle as though it were +3 when calculating Jump distances.",
          },
        ],
      },
      {
        title: "Hunker Down",
        slug: "HIGHLAND-CLAN-HUNKER",
        costsFortunesFavor: true,
        text: [
          {
            text: "If an effect would move you, you can spend Fortune's Favor to cancel the forced movement.",
          },
        ],
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
        costsFortunesFavor: true,
        text: [
          {
            text: "When you have Fortune’s Favor and an ally within 5ft. of you is Tested, you can spend your Fortune’s Favor to grant them a +4 on the Test.",
          },
        ],
      },
      {
        title: "Meadowland Hospitality",
        slug: "MEADOWLANDS-HOSPITALITY",
        text: [
          {
            text: "+3 to Heart Tests when talking with strangers for the first time.",
          },
        ],
      },
    ],
  },
  {
    title: "Fae Folk",
    slug: "FAE-FOLK",
    description: [
      "The Fae are a strange and enigmatic folk. Fae communities tend to pop up where the magic is strongest and the barrier between the world and the beyond is thin and the connection between magic and nature is imbued in everything they do.",
    ],
    stat: "+1 to Intellect or Heart",
    languages: "Allspeak, Thissletongue",
    traits: [
      {
        title: "Charm Defense",
        slug: "FAE-CHARM-DEFENSE",
        costsFortunesFavor: true,
        text: [
          {
            text: "If you would roll a test to avoid a Charm effect, you can spend your Fortune's Favor to instead Succeed on the Test.",
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
      {
        title: "Never Trust a Tulip",
        slug: "FAE-FOLK-NEVER-TRUST-A-TULIP",
        text: [
          {
            text: "Add a +3 to Heart Tests to determine if someone is lying or otherwise deceiving you.",
          },
          {
            text: "You grew up having to double and triple check your interactions for deceptions.",
            type: "FLAVOR",
          },
        ],
      },
    ],
  },
];
export default culturesData;
