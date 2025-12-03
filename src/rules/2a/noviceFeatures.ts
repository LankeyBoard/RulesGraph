import { GenericFeature } from "../../schema/types.generated";

const NoviceFeatures: GenericFeature[] = [
  {
    title: "Academic",
    slug: "ACADEMIC",
    text: [
      {
        text: "When researching information in a library or another collection of knowledge you can roll with Fortune's Favor.",
      },
    ],
  },
  {
    title: "Aid",
    slug: "AID",
    text: [{ text: "Add an additional +2 to Tests when helping an ally." }],
  },
  {
    title: "Artisan",
    slug: "ARTISAN",
    text: [
      {
        text: "Gain training in one set of artisan's tools (Woodworking, masonry, weaving, etc.)",
      },
    ],
    multiSelect: true,
  },
  {
    title: "Athletic",
    slug: "ATHLETIC",
    text: [
      { text: "Add +3 to mettle Tests for feats of strength or endurance." },
    ],
  },
  {
    title: "Daring",
    slug: "DARING",
    text: [
      {
        text: "On 3 Tests per R&R, instead of rolling dice, flip a coin. If you win the flip, you pass the Test. Otherwise, you fail.",
      },
    ],
  },
  {
    title: "Disguise Master",
    slug: "DISGUISE-MASTER",
    text: [
      { text: "Add +3 to Tests to disguise yourself as another humanoid." },
    ],
  },
  {
    title: "Imitator",
    slug: "IMITATOR",
    text: [
      {
        text: "Add +3 to Tests when trying to imitate another humanoid's speech.",
      },
    ],
  },
  {
    title: "Independent",
    slug: "INDEPENDENT",
    text: [
      {
        text: "Once per day, when you make a non-combat Test without help, add +3 to the results.",
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
        text: "Add +3 to heart Tests to determine if someone is lying to you or to determine their intentions.",
      },
    ],
  },
  {
    title: "Keen Eyed",
    slug: "KEEN-EYED",
    text: [
      { text: "Add +3 to heart Tests to spot hidden objects and creatures." },
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
      { text: "Botany" },
      { text: "Carpentry" },
      { text: "Geology" },
      { text: "History" },
      { text: "Oceanography" },
      { text: "Religion" },
    ],
    multiSelect: true,
  },
  {
    title: "Linguist",
    slug: "LINGUIST",
    text: [
      {
        text: "Learn another language. Add a +3 to intellect Tests to decipher languages and codes you don't already know.",
      },
    ],
  },
  {
    title: "Long Jumper",
    slug: "LONG-JUMPER",
    text: [{ text: "Increase your jump distance by 5ft." }],
  },
  {
    title: "Medical Training",
    slug: "MEDICAL-TRAINING",
    text: [
      {
        text: "When you take an Intellect Test to heal a dying ally, make the roll with Fortune's Favor.",
      },
    ],
  },
  {
    title: "Performer",
    slug: "PERFORMER",
    text: [
      {
        text: "Add +3 to Tests to determine the quality of your performance art. Gain training in one performance art of your choice (1 musical instrument, dance, acrobatics, etc.)",
      },
    ],
  },
  {
    title: "Reliable Skill",
    slug: "RELIABLE-SKILL",
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
        text: "When you make a heart Test to convince others with emotional appeal, add a +3 to the Test.",
      },
    ],
  },
  {
    title: "Swift",
    slug: "SWIFT",
    text: [{ text: "Increase your ground speed by 10ft." }],
  },
  {
    title: "Swift Climber",
    slug: "SWIFT-CLIMBER",
    text: [{ text: "Increase your climb speed by 5ft." }],
  },
  {
    title: "Swift Swimmer",
    slug: "SWIFT-SWIMMER",
    text: [{ text: "Increase your swim speed by 5ft." }],
  },
  {
    title: "Trekker",
    slug: "TREKKER",
    text: [{ text: "Double your lift, drag, and pack capacity." }],
  },
];

export default NoviceFeatures;
