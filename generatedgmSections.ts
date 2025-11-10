import { GenericRule } from "../../schema/types.generated";
const gmSections: GenericRule[] = [
    {
    title: "The Basics",
    slug: ":GM-BASICS",text: [
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