import { GenericRule } from "../../schema/types.generated";
const gmSections: GenericRule[] = [
    {
    title: "The Basics",
    slug: "GM-BASICS",text: [
    {
    text: "Fortune's Favor is a game for playing fantasy stories of a band of adventurers going out and changing the world. As the Game Master (GM), your role is to set up the events, respond to players actions and adjudicate the rules for your table.",
    type: "RULE"
    },],subRules: [
    {
    title: "GM Philosophy",
    slug: "GM-PHILOSOPHY",text: [
    {
    text: "When running Fortune's Favor, I have found the following tenets helpful to keep in mind.",
    type: "RULE"
    },],lists: [{
    label: "",
    items: ['Provide information whenever possible', 'If the character would know the general difficulty of the task they are undertaking, the player should know the difficulty of the Test and the general consequences of failure.', 'The characters are competent and familiar with the world even if the players are not.', ]
  }],},]},
    {
    title: "During Play",
    slug: "GM-DURING-PLAY",subRules: [
    {
    title: "Test Difficulty",
    slug: "GM-TEST-DIFFICULTY",text: [
    {
    text: "As a GM, you will often have to set Test difficulty on the fly. The difficulty of the Test should reflect how hard the task is as well as how long they have to do it.",
    type: "RULE"
    },
    {
    text: "If either success or failure would not result in an interesting outcome, that's usually a sign that a test isn't needed.",
    type: "RULE"
    },
    {
    text: "| Target | Example                                                                                                |\n| ------ | ------------------------------------------------------------------------------------------------------ |\n| 10     | (Mettle) Climbing a wall with a rope on the first try                                                  |\n| 15     | (Heart) Figuring out if the barkeep is hiding information about a local thieves guild                  |\n| 20     | (Intellect) Recalling an obscure piece of lore about a monster's weakness                              |\n| 25     | (Agility) Jumping from falling piece of rubble to falling piece or rubble to cross a collapsing bridge |",
    type: "RULE"
    },],subRules: [
    {
    title: "Mixed Results",
    slug: "GM-MIXED",text: [
    {
    text: "Often a good mixed result can be a choice of spending Stamina to succeed on the test or letting the test fail. If there's time pressure, then a mixed is also a good time to ratchet up the pressure. Maybe they slip on the jump across the ravine and manage to scramble up the other side, but the beast chasing them is significantly closer, or they manage to swap the cards in a poker game, but weren't slick enough to completely avoid the pit bosses attention.",
    type: "RULE"
    },],},
    {
    title: "Failures",
    slug: "GM-TEST-FAILURE",text: [
    {
    text: "Failing doesn't always have to be narrated as the character not being good enough at the thing to succeed. It's often more satisfying to describe the opponent's skill or the situational challenges that made the character fail rather than their own lacking or incompetence. Failure can also just mean running out of time before something else happens. Like a guard coming around the corner, discovering the party trying to pick a lock, or a troll guarding a bride brushes off an attempt to distract them while the rest of the party sneaks past.",
    type: "RULE"
    },],},]},]},
    {
    title: "Planning",
    slug: "GM-PLANNING",subRules: [
    {
    title: "Running a Session 0",
    slug: "GM-SESSION-0",text: [
    {
    text: "Session 0 is your chance to set expectations for the game, give players the pitch for your game if you haven't already and talk about tone. It's also a chance to make characters together and find ways to create bonds between those characters.\nFor more information [The Ultimate Session 0 Checklist](https://www.level1geek.com/blog/dnd-session-0) by Level 1 Geek is a good place to start.",
    type: "RULE"
    },],},
    {
    title: "Making Enemies",
    slug: "GM-MAKING-ENEMIES",text: [
    {
    text: "Three types of enemies, minions: easy to kill canon fodder, monsters: a reasonable challenge. bosses: a tough challenge. Every boss should provide a unique challenge.",
    type: "RULE"
    },],subRules: [
    {
    title: "Building Encounters",
    slug: "GM-BUILDING-ENCOUNTERS",text: [
    {
    text: "An encounter encompasses everything that happens between opportunities for PCs to Catch Your Breath.",
    type: "RULE"
    },
    {
    text: "For each character on the Player's side, there should be 1 Monster of the same level. 2 Minions can be used in place of 1 Monster, or 1 Boss can be used in place of 2 Monsters.\nThese stat's assume 5 encounters per Rest & Recuperation. If you have less encounters, you will need to add either more enemies or increase the damage of the enemies.",
    type: "RULE"
    },],},]},]},
    {
    title: "Treasure & Other Rewards",
    slug: "TREASURE",text: [
    {
    text: "As characters go on adventures they will inevitably end up with Coin and be looking for things to spend it on. Some players will seek out only mechanically beneficial items, while others will take an interest in cosmetic or socially beneficial items. If your players tend to only look for mechanical benefit. I would recommend increasing some of these costs, and providing more consumable items to give them things to spend coin on without becoming overpowered.",
    type: "RULE"
    },
    {
    text: "These prices are just baselines and should be adjusted up or down depending on your world and game.",
    type: "RULE"
    },],subRules: [
    {
    title: "Consumables",
    slug: "CONSUMABLES",text: [
    {
    text: "| Name            | Cost | Slots | Description                                                                                                                                                                                                                                                                |\n| --------------- | ---- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| Bandages        | 2    | 1     | When you take a Night's Rest apply bandages and salves, regain an additional 2 Health.                                                                                                                                                                                     |\n| Caltrops        | 1    | 1     | Scatter in a 10ft area circle. Th area either causes the creature to be Slowed, or they take 1d6 Piercing Damage for every 5 ft. they move. Creatures choice.                                                                                                              |\n| Damage Grease   | 3    | 0     | Can be available in any non-physical damage. It takes 1 minute to apply grease to a weapon. When applied the weapon deals an extra 1d4 Damage of the greases type for the next combat the weapon is used in or after 24 hours.                                             |\n| Flash Powder x3 | 2    | 1     | As an Action, toss the powder up to 15 ft. away. Creatures within a 5 ft. radius take an Agility Test (12/7) On a Fail they are Blind until the end of their next turn. On a Mixed, they are Rattled.                                                                      |\n| Healing Potion  | 10   | 1     | When drunk, heals 2d4 Health                                                                                                                                                                                                                                               |\n| Smoke Bomb x3   | 2    | 1     | As an Action, toss the bombs up to 30 ft. away, causing a fast acting smoke to expand from the point of impact.. A 15ft. radius area is instantly obscured, creatures inside are Hidden and Blind. After 4 Rounds (2 Minutes) or a strong wind the area returns to normal. |\n| Supplies        | 1    | 1     | Supplies represent an item or set of mundane items that a standard adventurer is likely to have with them.                                                                                                                                                                 |",
    type: "RULE"
    },],},
    {
    title: "Items",
    slug: "ITEMS",text: [
    {
    text: "| Name                    | Cost | Slots | Description                                                                                                                                                          |\n| ----------------------- | ---- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| All Weather Tent        | 2    | 0     | Fits 2 Medium creatures and their gear. Keeps them warm and dry in the harshest environments.                                                                        |\n| Bullseye Lantern        | 2    | 0     | Emits Bright light in a 60 ft. by 5 ft. line. and dim light for an additional 20 ft. forward and 5 ft. to the side.                                                  |\n| Climbing Gear           | 1    | 1     | A set of ropes, spikes and other tools to aid in climbing. Grants +3 on Tests to climb.                                                                              |\n| Horse                   | 3    | 0     | Upkeep 1 Coin per Month.                                                                                                                                             |\n| Tangle Net              | 1    | 1     | Make a Ranged 30ft. (Agility) Attack. On hit target is Pinned until they use an Action to Escape. On a Mixed, they are Entangled until the start of their next turn. |\n| Torch                   | 1    | 0     | Emits Bright light in a 20 ft. sphere. A strong breeze or water puts the flame out.                                                                                  |\n| Waterproof Fire Starter | 1    | 0     | A small box of waterproof matches or alchemical fire starter.                                                                                                        |",
    type: "RULE"
    },],},
    {
    title: "Lodging & Lifestyle",
    slug: "LODGING",text: [
    {
    text: "| Name                     | Cost     | Slots | Description                                                                      |\n| ------------------------ | -------- | ----- | :------------------------------------------------------------------------------- |\n| Inn (per night)          | 1        | -     | A warm bed, a basic meal, and safety for a Night's Rest.                         |\n| Fine Inn (per night)     | 3        | -     | Comfortable accommodations in a private room and good meals.                     |\n| Fine Dining (per person) | 1        | -     | An excellent meal at an upscale establishment.                                   |\n| Fine Clothing            | 10       | 1     | A well made outfit fitted and tailored, suitable for formal occasions.           |\n| Common Clothing          | 1        | 1     | A practical outfit suited for adventure as well as walking around town.          |\n| Jewelry                  | 5 - 100+ | 0     | Decorative and valuable. Can be sold or used as collateral.                      |\n| Book (Common)            | 0        | 0     | Contains general knowledge, poetry, stories, etc.                                |\n| Book (Uncommon)          | 3        | 0     | Contains specialized knowledge, rare histories or some other uncommon knowledge. |\n| Book (Rare)              | 20 +     | 1     | Only available in the largest of cities. One of a kind tomes and manuscripts.    |",
    type: "RULE"
    },],},
    {
    title: "Services",
    slug: "SERVICES",text: [
    {
    text: "| Name                | Cost | Description                                                                                                  |\n| ------------------- | ---- | ------------------------------------------------------------------------------------------------------------ |\n| Armor Improvement   | 7    | Increase the benefits of your armor by 1.                                                                    |\n| Weapon Improvement  | 4    | Increase the Damage or Attack of your weapon by 1. Each weapon can only be improved this way 1 time.         |\n| Spa Treatment       | 5    | Spend a day rejuvenating at the spa, reduce the time needed to complete a Rest and Recuperation by two days. |\n| Commission Portrait | 8    | An artist paints your portrait. Takes several days.                                                          |",
    type: "RULE"
    },],},]},
    {
    title: "Resources",
    slug: "RESOURCES",text: [
    {
    text: "Useful resources for running a game.",
    type: "RULE"
    },],lists: [{
    label: "",
    items: ['[2 Minute Tabletop](https://tools.2minutetabletop.com/) - An expansive and well organized collection of tokens I use for printed paper miniatures.', '[donjon](https://donjon.bin.sh/) - An incredible collection of random generators, from names to quests to dungeons to demographics. Lots of stuff to make tables to help with improv.', ]
  }],},]
export default gmSections;