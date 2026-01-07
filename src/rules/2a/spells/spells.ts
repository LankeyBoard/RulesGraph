import { Spell } from "../../../schema/types.generated";

enum SpellType {
  ARCANE = "Arcane",
  DIVINE = "Divine",
  NATURE = "Nature",
}

const spells: Spell[] = [
  {
    name: "Quick Heal",
    level: 3,
    type: [SpellType.DIVINE, SpellType.NATURE],
    castingTime: "Instant",
    duration: "Instant",
    range: "30ft",
    description:
      "A word of divine power and a wave of your hand quickly undo wounds and stitch flesh back together. Just after an ally loses Health you can cast this spell. They regain up to 2d6+Casting Modifier health. They cannot regain more Health than the just lost.",
  },
  {
    name: "Bolster Vitality",
    level: 1,
    type: [SpellType.DIVINE, SpellType.NATURE],
    castingTime: "Action",
    duration: "1 minute",
    range: "30ft",
    description:
      "You offer words of blessing, bolstering your allies spirits and filling them with energy. As an action, choose up to 3 creatures. For the next minute, when they spend Stamina they may choose to reduce the Stamina cost by 1d6, ending this effect on themselves.",
  },
  {
    name: "Shield",
    level: 1,
    type: [SpellType.DIVINE],
    castingTime: "Action",
    duration: "2 rounds",
    range: "Touch",
    description:
      "You lay your hands on your ally. A shimmering shield appears around them offering them temporary divine protection. Touch a creature. Until the end of the next round of combat, the next time they would take damage, prevent it.",
  },
  {
    name: "Mote of Health",
    level: 3,
    type: [SpellType.DIVINE],
    castingTime: "Action",
    duration: "1 minute",
    range: "60ft",
    description:
      "A small glowing orb of healing energy attaches itself to your ally, ready to aid them as soon as they need it. Select a creature within range and place the mote on them. While a creature has the mote on them the next time that creature takes damage they are immediately healed for 1d6 Heath and the mote jumps to a new creature of your choice within 60ft of them.",
  },
  {
    name: "Leaching Tether",
    level: 1,
    type: [SpellType.NATURE],
    castingTime: "Action",
    duration: "1 minute",
    range: "60ft",
    description:
      "You create a vampiric bond between yourself and your target, stealing vitality from them whenever you harm them. When you cast this spell, select a creature. Whenever you deal damage to them they take an additional 1d4 necrotic damage and you heal an equal amount.",
  },
  {
    name: "Enhanced Aid",
    level: 1,
    type: [SpellType.ARCANE, SpellType.DIVINE, SpellType.NATURE],
    castingTime: "Instant",
    duration: "Instant",
    range: "Self",
    description:
      "When you take the help action, cast this spell to add your Spellcasting Stat to the roll total.",
  },
  {
    name: "Hindering Wall",
    level: 1,
    type: [SpellType.ARCANE, SpellType.DIVINE, SpellType.NATURE],
    castingTime: "Action",
    duration: "1 minute",
    range: "30ft",
    description:
      "You summon forth a magical wall to cover yourself and damage those that would try and cross it. You create a 15ft long, 5ft wide, & 10ft tall wall of magic. When you pick this spell, select the damage type. Creatures inside the wall are hindered and take 1d6 of the chosen damage type when they start their turn and for every 5ft they move within the wall. The wall provides Half Cover. You can spend extra stamina to increase the walls length. Spending 1 Stamina per 5ft of length.",
  },
  {
    name: "Light",
    level: 0,
    type: [SpellType.ARCANE, SpellType.DIVINE, SpellType.NATURE],
    castingTime: "Instant",
    duration: "10 minutes",
    range: "Self",
    description:
      "You speak a word of power to create light in the darkness. You create a light to illuminate the world around you. You provide light as though you are holding a torch.",
  },
  {
    name: "Blip",
    level: 3,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "Instant",
    range: "Self",
    description:
      "You and a friend slip through a portal and emerge on the other side of your enemies. You and up to one Ally no more than 1 size larger than you teleport up to 30ft to a space you can see. You can spend extra stamina to increase the size limit. The limit increases by 1 size for every 2 stamina you spend.",
  },
  {
    name: "Power Spike",
    level: 1,
    type: [SpellType.ARCANE, SpellType.DIVINE, SpellType.NATURE],
    castingTime: "Action",
    duration: "Instant",
    range: "Base Range",
    description:
      "A surge of energy courses through you. This spell can be cast when making a Basic Attack to increase your base damage by 1 Step for this attack. You can spend Stamina up to your level to increase the damage further, increasing the damage by an additional 1 Step for every 2 Stamina you spend.",
  },
  {
    name: "Simple Illusion",
    level: 1,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "Up to 10 minutes",
    range: "30ft",
    description:
      "Create an illusion no larger than a 5ft cube. The illusion cannot move. Spend 1 stamina when you cast this spell to have the illusion also make noise.",
  },
  {
    name: "Animated Illusion",
    level: 3,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "Up to 10 minutes",
    range: "30ft",
    description:
      "Create a moving illusion that occupies no larger than a 10ft cube. When you cast the spell you can also decide how the illusion moves. It can move no more than 30ft per round. When you cast the spell you can spend 1 stamina to add sound to the spell. As long as the spell is active you can spend 1 stamina to change the animation of the spell.",
  },
  {
    name: "Illusionary Wall",
    level: 5,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "1 minute",
    range: "30ft",
    description:
      "Create an up to 10ft wide 60ft long and 10ft tall illusion. The wall cannot move locations, but can animate in place. Spend 1 stamina to double the height of the illusion. Spend 2 stamina to increase the duration of the wall to 10 minutes.",
  },
  {
    name: "Return Home",
    level: 3,
    type: [SpellType.ARCANE, SpellType.DIVINE],
    castingTime: "1 minute",
    duration: "Instant",
    range: "10 ft.",
    description:
      "Return from whence you came. During your R&R you can create an anchor, an item tied to the location that later allows you to return to that location. When you cast this spell you and up to 6 other willing creatures are returned to the location you set up as your anchor. Spend 3 stamina to cast this as an action.",
  },
  {
    name: "Wall",
    level: 1,
    type: [SpellType.ARCANE, SpellType.DIVINE, SpellType.NATURE],
    castingTime: "Action",
    duration: "1 minute",
    range: "30 ft.",
    description:
      "You summon forth a solid wall starting at a point within 30 ft. of you and extending in a straight line. You create a 15 ft. long, 5 ft. wide, & 10 ft. tall wall. Creatures in the way when the wall appears, are pushed to the nearest unoccupied space. The wall requires at least 2 solid points of contact to form. You can spend extra stamina to increase the walls length. Spending 1 Stamina per 5ft of length. \n When the spell ends, the wall collapses and disappears.",
  },
  {
    name: "Force Pulse",
    level: 1,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "Instant",
    range: "Self",
    description:
      "A wave of kinetic force erupts from you. Creatures in range take a Mettle Test On a Fail they are pushed 10 ft. directly away from you. On a Mixed, they are pushed 5 ft.",
  },
  {
    name: "Quicken Step",
    level: 1,
    type: [SpellType.ARCANE, SpellType.NATURE],
    castingTime: "Instant",
    duration: "1 round",
    range: "Self",
    description:
      "Until the end of the round, your movement does not trigger Counter Actions.",
  },
  {
    name: "Tracker's Tag",
    level: 1,
    type: [SpellType.ARCANE, SpellType.NATURE],
    castingTime: "Action",
    duration: "1 hour",
    range: "Touch",
    description:
      "Touch an item or creature, until the spell ends, you always know the direction and distance of the target as long as it is within 1 mile of you.",
  },
  {
    name: "Seal",
    level: 1,
    type: [SpellType.ARCANE, SpellType.NATURE],
    castingTime: "Action",
    duration: "1 hour",
    range: "Touch",
    description:
      "Magically seal a door, chest or other container. Any attempt to open it must first make a Mettle Test. Success breaks the seal, Mixed reduces the difficulty of the next Test by 3.",
  },
  {
    name: "Phase",
    level: 1,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "5 minutes",
    range: "Touch",
    description:
      "The target become incorporeal, able to move through solid objects with ease. You can still see and hear the real world, but are unable to interact with anything. The target can end the spell at will. If they are intersecting with anything when the spell ends they take 4d10 damage.",
  },
  {
    name: "Counterspell",
    level: 3,
    type: [SpellType.ARCANE],
    castingTime: "Reaction",
    duration: "Instant",
    range: "60 ft.",
    description:
      "When a creature cast's a spell you make an attempt to disrupt it. Make an opposed Intellect Test. On a Success the spell has no effect. On a Mixed, the caster chooses if the spell fizzles or the Stamina cost is doubled.",
  },
  {
    name: "Slow",
    level: 3,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "4 rounds",
    range: "60 ft.",
    description:
      "Choose a point within range you can see. A 15 ft. radius sphere of slowing energy appears at that point. Creatures in the area have their Speed halved and projectiles that pass through the field deal half damage.",
  },
  {
    name: "Arcane Suppression",
    level: 3,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "4 rounds",
    range: "60 ft.",
    description:
      "Choose a point within range you can see. A 15 ft. radius sphere of magic dampening energy appears within range. Any spells cast within the sphere have their Stamina cost increased by your spellcasting modifier.",
  },
  {
    name: "Rewind",
    level: 5,
    type: [SpellType.ARCANE],
    castingTime: "Reaction",
    duration: "Instant",
    range: "15 ft.",
    description:
      "When a Test is taken, after the roll is made, reroll one dice, taking the new result.",
  },
  {
    name: "Astral Projection",
    level: 5,
    type: [SpellType.ARCANE],
    castingTime: "10 minutes",
    duration: "1 hour",
    range: "100 miles",
    description:
      "You project your mind far from your body. Choose a location within range. For the duration of the spell your senses inhabit an invisible and intangible mote that appears at the location. You can move with a flying speed of 30 ft. While in this form you have no sense of your own body. You can choose to end this spell early.",
  },
  {
    name: "Minor Telekinesis",
    level: 0,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "1 round",
    range: "30 ft.",
    description:
      "You can manipulate objects from a distance. Choose an unsecured object within range. If the object weighs less than 10x your spellcasting modifier pounds, you can push, pull or rotate the object up to 15 ft. If the object is heavier, you can spend 1 Stamina per 10 pounds heavier it is to move it.",
  },
  {
    name: "Spark",
    level: 0,
    type: [SpellType.ARCANE, SpellType.NATURE],
    castingTime: "Action",
    duration: "1 round",
    range: "30 ft.",
    description:
      "Briefly control the flow of heat, igniting a flammable material, extinguishing a small flame, emitting a shower of sparks, or similar effect.",
  },
  {
    name: "Repair",
    level: 0,
    type: [SpellType.ARCANE, SpellType.DIVINE],
    castingTime: "Action",
    duration: "1 round",
    range: "Touch",
    description:
      "You weave magic into a crack or break, repairing the item as though it had never been broken. All pieces of the item must be present and arranged exactly as they were prior to the break. This has no effect on magic items.",
  },
  {
    name: "Whisper",
    level: 0,
    type: [SpellType.ARCANE, SpellType.NATURE],
    castingTime: "Action",
    duration: "Instant",
    range: "60 ft.",
    description:
      "You send a short, whispered message of no more than 10 words to a creature within range that you can see. Only the target hears the message.",
  },
  {
    name: "Glimmer",
    level: 0,
    type: [SpellType.ARCANE, SpellType.NATURE],
    castingTime: "Action",
    duration: "1 minute",
    range: "5 ft.",
    description:
      "Create a palm sized visual illusion. The illusion is silent and harmless.",
  },
  {
    name: "Acceleration Gate",
    level: 7,
    type: [SpellType.ARCANE],
    castingTime: "Action",
    duration: "2 rounds",
    range: "30 ft.",
    description:
      "Create a 10 ft. tall 10 ft. wide gate within range. When an allies physical ranged attack passes through the gate it gets accelerated, dealing an extra 1d6 + your spellcasting modifier. You can spend 2 Stamina to increase the extra damage by one Step. You can do this a number of times equal to your spellcasting modifier.",
  },
];

export default spells;
