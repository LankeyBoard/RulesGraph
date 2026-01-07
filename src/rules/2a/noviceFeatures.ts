import { GenericFeature } from "../../schema/types.generated";

const NoviceFeatures: GenericFeature[] = [
  {
    title: "Academic",
    slug: "ACADEMIC",
    costsFortunesFavor: true,
    uses: {
      used: 0,
      rechargeOn: "REST_AND_RECUPERATE",
      max: 1,
    },
    text: [
      {
        text: "When researching information in a library or another collection of knowledge, add a +3 to Intellect tests to gather knowledge.",
      },
      {
        text: "Once per R&R, when taking a Test to recall a piece of information or history, you can spend your Fortune's Favor to automatically pass the Test.",
      },
    ],
  },
  {
    title: "Aid",
    slug: "AID",
    text: [
      {
        text: "When you use the Help action, your ally adds an additional +2 to the Test result.",
      },
    ],
  },
  {
    title: "Artisan",
    slug: "ARTISAN",
    text: [
      {
        text: "Gain training in one set of artisan's tools (Woodworking, masonry, weaving, etc.)",
      },
      {
        text: "Add +3 to Tests to use your chosen tool and to analyze works made with the tool.",
      },
    ],
    multiSelect: true,
  },
  {
    title: "Athletic",
    slug: "ATHLETIC",
    text: [
      { text: "Add +3 to Mettle Tests for feats of strength or endurance." },
    ],
  },
  {
    title: "Daring",
    slug: "DARING",
    uses: {
      used: 0,
      max: 3,
      rechargeOn: "REST_AND_RECUPERATE",
    },
    text: [
      {
        text: "On 3 Tests per R&R, instead of rolling dice, flip a coin. If you win the flip, you pass the Test. Otherwise, you fail.",
      },
    ],
  },
  {
    title: "Independent",
    slug: "INDEPENDENT",
    uses: {
      used: 0,
      max: 1,
      rechargeOn: "NIGHTS_REST",
    },
    text: [
      {
        text: "Once per Night's Rest, when you make a non-combat Test without help, add +3 to the results.",
      },
    ],
  },
  {
    title: "Infiltrator",
    slug: "INFILTRATOR",
    text: [{ text: "Add +3 to stealth Tests." }],
  },
  {
    title: "Insightful",
    slug: "INSIGHTFUL",
    text: [
      {
        text: "Add +3 to Heart Tests to determine if someone is lying to you or to determine their intentions.",
      },
    ],
  },
  {
    title: "Keen Eyed",
    slug: "KEEN-EYED",
    text: [
      { text: "Add +3 to Heart Tests to spot hidden objects and creatures." },
    ],
  },
  {
    title: "Knowledgeable",
    slug: "KNOWLEDGEABLE",
    text: [
      {
        text: "When you take this feature pick a subject from the list below that you are well versed in. When you take Tests that rely on this knowledge, add a +3 to the roll.",
      },
    ],
    choices: [
      { choiceRule: { text: "Botany" }, isChosen: false },
      { choiceRule: { text: "Carpentry" }, isChosen: false },
      { choiceRule: { text: "Geology" }, isChosen: false },
      { choiceRule: { text: "History" }, isChosen: false },
      { choiceRule: { text: "Oceanography" }, isChosen: false },
      { choiceRule: { text: "Religion" }, isChosen: false },
    ],
    multiSelect: true,
  },
  {
    title: "Linguist",
    slug: "LINGUIST",
    text: [
      {
        text: "Learn another language. Add a +3 to Intellect Tests to decipher languages and codes you don't already know.",
      },
    ],
  },
  {
    title: "Logician",
    slug: "LOGICIAN",
    text: [
      {
        text: "When you make an Intellect Test to convince others with a logical appeal, add a +3 to the Test.",
      },
    ],
  },
  {
    title: "Medical Training",
    slug: "MEDICAL-TRAINING",
    text: [
      {
        text: "When you take an Intellect Test to heal a dying ally, add a +3 to the test.",
      },
      {
        text: "When you finish a Night's Rest, you or an ally who rested within 30ft. of you regains an extra 1 Health.",
      },
    ],
  },
  {
    title: "Reliable Skill",
    slug: "RELIABLE-SKILL",
    uses: {
      used: 0,
      max: 3,
      rechargeOn: "REST_AND_RECUPERATE",
    },
    text: [
      {
        text: "When you make a non-combat Test, before you roll, you can choose to treat the Test as though you rolled a 12. You can do this 3 times per R&R.",
      },
    ],
  },
  {
    title: "Silver Tongued",
    slug: "SILVER-TONGUED",
    text: [
      {
        text: "When you make a Heart Test to convince others with emotional appeal, add a +3 to the Test.",
      },
    ],
  },
  {
    title: "Snoop",
    slug: "SNOOP",
    text: [
      {
        text: "Add +3 to Tests to disguise yourself and your voice as another humanoid.",
      },
      {
        text: "You've spent time perfecting the art of disguise and mimicry, allowing you to easily slip into a disguise and fool your target.",
        type: "Flavor",
      },
    ],
  },
  {
    title: "Swift",
    slug: "SWIFT",
    text: [{ text: "Increase your Base Speed by 10ft." }],
  },
  {
    title: "Trekker",
    slug: "TREKKER",
    text: [{ text: "Double your lift, drag, and pack capacity." }],
  },
];

export default NoviceFeatures;
