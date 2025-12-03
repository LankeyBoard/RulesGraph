import { GenericRule } from "../../schema/types.generated";
const generalRules: GenericRule[] = [
  {
    title: "Building a New Character",
    slug: "BUILDING-A-PC",
    ruleType: "RULE",
    text: [
      {
        text: "Your GM should tell you the level you are starting at. If you are starting higher than first level, follow the rules for leveling up after building your character at first level.",
        type: "RULE",
      },
      {
        text: "Pick a Lineage, Culture and Class.",
        type: "RULE",
      },
      {
        text: "Assign stats - You have a set of 3,2,0,-2. Use each number once, placing them in your 4 stats. Then add your stat bonuses from your Lineage and your Culture. These cannot both go to the same Stat.",
        type: "RULE",
      },
      {
        text: "Higher numbers are better. Your class will have at least 1 primary stat. It's a good idea to have that be your highest stat.",
        type: "RULE",
      },
      {
        text: "Pick a [Novice Feature](/rules/generic_features/novice_features).",
        type: "RULE",
      },
      {
        text: "(Optional) Write a backstory for your character.",
        type: "RULE",
      },
    ],
    subRules: [
      {
        title: "Leveling Up",
        slug: "LEVELING-UP",
        ruleType: "RULE",
        text: [
          {
            text: "Your GM will tell you when you level up. Parties should generally be kept at the same level and should level up at the same time when you complete a [Rest & Recuperation](/rules/player_rules#REST). When you level up, your Health & Stamina increase and you gain new features based on your Class.",
            type: "RULE",
          },
        ],
      },
    ],
  },
  {
    title: "What Makes Up a Character",
    slug: "WHAT-MAKES-UP-A-CHARACTER",
    ruleType: "RULE",
    text: [
      {
        text: "Level, Lineage, Culture, Class, and Stats",
        type: "RULE",
      },
    ],
    subRules: [
      {
        title: "Level",
        slug: "LEVEL-RULE-DESC",
        ruleType: "RULE",
        text: [
          {
            text: "As your character grows more powerful and experienced you gain levels, unlocking new abilities based on your [class](/rules/classes). The current rules go from level 1-8.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Lineage",
        slug: "LINEAGE-RULE-DESC",
        ruleType: "RULE",
        text: [
          {
            text: "Your character's physiology. Visit the [lineage section](/rules/lineages) for a list of options.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Culture",
        slug: "CULTURE-RULE-DESC",
        ruleType: "RULE",
        text: [
          {
            text: "Where your character grew up. Visit the [culture section](/rules/cultures) for a list of options.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Class",
        slug: "CLASS-RULES-DESC",
        ruleType: "RULE",
        text: [
          {
            text: "What your character does. This is their main skill set and how they contribute as adventurers. Visit the [classes section](/rules/classes) for a list of options.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Stats",
        slug: "STATS",
        ruleType: "LISTCOMPACT",
        subRules: [
          {
            title: "Mettle",
            slug: "METTLE",
            ruleType: "RULE",
            text: [
              {
                text: "Physical strength and toughness.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Agility",
            slug: "AGILITY",
            ruleType: "RULE",
            text: [
              {
                text: "Physical accuracy, body control and balance.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Intellect",
            slug: "INTELLECT",
            ruleType: "RULE",
            text: [
              {
                text: "The ability to gather and retain information.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Heart",
            slug: "HEART",
            ruleType: "RULE",
            text: [
              {
                text: "Emotional engagement, presence, and determination.",
                type: "RULE",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Character Resources",
    slug: "CHAR-RESOURCES",
    ruleType: "RULE",
    subRules: [
      {
        title: "Stamina",
        slug: "STAMINA",
        ruleType: "RULE",
        text: [
          {
            text: "Stamina is the characters wellspring of energy. It is relatively quick to go down, and easy to get back. The exact amount of Stamina a character has is determined by their Class and stats. Stamina can be used for Class abilities and to avoid taking damage.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Health",
        slug: "HEALTH",
        ruleType: "RULE",
        text: [
          {
            text: "Health represents the life force of your character. It is slow to get back and in limited supply. See [Exhausted, Dying, Last Stand & Healing](/rules/player_rules#EDL) for what happens at 0 Health.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Fortune's Favor",
        slug: "FORTUNES-FAVOR",
        ruleType: "RULE",
        text: [
          {
            text: "Fortune's Favor represent's the little bit of extra luck you have as a hero. You gain Fortune's Favor whenever you fail a [Test](/rules/player_rules#tests). You can spend Fortune's Favor when you make a [Test](/rules/player_rules#TESTS) to roll a second d20 and use the higher result. As you level up your [Class](/rules/player_rules##CLASS-RULES-DESC) will also have abilities that require Fortune's Favor.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Regaining Resources",
        slug: "REST",
        ruleType: "RULE",
        text: [
          {
            text: "To regain your different resources, you have three different types of rests available depending on how long you are able to rest for. Finishing a longer rest grants all benefits of the shorter rest as well. So if you have abilities that you get back when you Catch Your Breath, you also get them back when you finish a Night's Rest.",
            type: "RULE",
          },
          {
            text: "If you spend Stamina or engage in strenuous activities while resting, the rest ends immediately and you gain no benefits from it.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Catch Your Breath",
            slug: "CATCH-YOUR-BREATH",
            ruleType: "RULE",
            text: [
              {
                text: "When you have a moment, you can Catch Your Breath, tending to your wounds, wiping down your weapons, and centering yourself. To Catch Your Breath, spend 10 minutes resting and performing light activities.",
                type: "RULE",
              },
              {
                text: "At the end of the rest, you regain all missing Stamina.",
                type: "RULE",
              },
              {
                text: "If you are at 0 Health, you gain 1 Health. Some classes may also have features that refresh when you Catch Your Breath.",
                type: "RULE",
              },
            ],
          },
          {
            title: "A Night's Rest",
            slug: "NIGHTS-REST",
            ruleType: "RULE",
            text: [
              {
                text: "A good Night's Rest is still important to an adventurer. To complete a Night's Rest, spend a minimum of 6 hours sleeping. This gives surface level wounds a chance to heal and prepare yourself for the next day. When you finish a Night's Rest, return your Stamina to full, regain Health equal to your level + 1.",
                type: "RULE",
              },
              {
                text: "If you are awake for more than 24 hours in a row, Test your Mettle each hour. The difficulty of this test increases by 1 for each hour beyond 24 hours. Pass (15+): You suffer no ill effects. Mixed (10-14): Reduce your current and maximum Stamina by 3. Fail (9-): Reduce your current and maximum Stamina by 7. If you are reduced to 0 stamina in this way you become unconscious. You must complete a Night's Rest to remove these effects.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Rest and Relax",
            slug: "REST-RELAX",
            ruleType: "RULE",
            text: [
              {
                text: "In-between adventures you have a chance to rest, relax and prepare yourself for the next call to action. To gain the benefits of Resting and Relaxing (R&R) you must spend 5 nights in a safe and relatively comfortable shelter while only engaging in light activity.",
                type: "RULE",
              },
              {
                text: "Eg. At home or in an inn.",
                type: "RULE",
              },
              {
                text: "Or spend 14 days & nights in less than ideal conditions with no more than light activity.",
                type: "RULE",
              },
              {
                text: "Eg. Sleeping in a tent in the woods.",
                type: "RULE",
              },
              {
                text: "After successful Rest and Relaxation, regain all lost Health and Stamina and gain Fortune's Favor. You also lose any conditions that do not specifically last through a R&R.",
                type: "RULE",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Tests",
    slug: "TESTS",
    ruleType: "RULE",
    text: [
      {
        text: "Tests are how you determine the outcome of uncertain events, can you smash open a door (Mettle), talk a guard into looking the other way (Heart), dodging a tomato hurled at your head (Agility).",
        type: "RULE",
      },
      {
        text: "First the Success and Failure points of the test are set by the GM (Game Master) and the general outcome of success and failure are announced if it is reasonable for the player characters to know them. The player then rolls 1d20 and adds any relevant bonuses to the result. If the result is at least equal to the Success point, they pass the test and have a beneficial outcome. If the result is greater than or equal to the Failure point but worse than the Success, then the result is Mixed. The GM can offer Success with a Cost or Mixed Success on a Mixed result. If the results are less than the Failure point, the result is a failure. In general the Failure point is five less than the Success point.",
        type: "RULE",
      },
    ],
    subRules: [
      {
        title: "Success",
        slug: "SUCCESS",
        ruleType: "RULE",
        text: [
          {
            text: "Success on a test doesn't always mean getting exactly what you want, but it does mean a favorable outcome for you. To achieve Success, you have to roll at least the Success point for the Test.",
            type: "RULE",
          },
          {
            text: "You are talking to the innkeeper negotiating for a room. The GM calls for a Heart Test and tells you that you'll succeed on a 15. You roll a 13 and add +2 for your Heart to get a total of 15, which means you succeed. You manage to endear yourself to the innkeeper and reduce the cost from 3 Coin to 2!",
            type: "EG",
          },
        ],
      },
      {
        title: "Mixed Result",
        slug: "MIXED",
        text: [
          {
            text: "When you between the Success Target and five below the Target, you get a mixed result. Mixed results could be Success With a Cost or a Mixed Success.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Success With a Cost",
            slug: "SUCCESS-WITH-COST",
            ruleType: "RULE",
            text: [
              {
                text: "Success with a Cost is one possible Mixed Result where the GM offers a consequence and the player chooses if they want to accept the consequences or fail the test.",
                type: "RULE",
              },
              {
                text: "You try and scale a difficult cliff, you roll a mixed result. The GM may offer that you try and fall the first time, taking 1d6 damage but make it up on the second try or you fail and realize it would be too risky to climb and can't make it up.",
                type: "EG",
              },
            ],
          },
          {
            title: "Mixed Success",
            slug: "MIXED-SUCCESS",
            ruleType: "RULE",
            text: [
              {
                text: "A Mixed Success is another possible Mixed Result when you are partially successful in your endeavor. You achieve some of the outcome you want, but there are some complications or downsides.",
                type: "RULE",
              },
              {
                text: "You are trying to trick a guard into letting you go after being caught breaking curfew. You told him you forgot your pass at home and got a Mixed Success on the Heart Test your GM called for. The guard believes you but insists on escorting you home to show him the pass.",
                type: "EG",
              },
            ],
          },
        ],
      },
      {
        title: "Failure",
        slug: "FAILURE",
        ruleType: "RULE",
        text: [
          {
            text: "A Failure occurs when you roll more than five below the Target. Maybe the situation was more complicated than you though, or you were missing some key information, or maybe you were just unlucky. Regardless of the reason the consequences of failure can be direct, such as taking damage, or they can simply be a complication for the story, this is determined by the GM. Generally the scope of failure should clear to the player before making the Test.",
            type: "RULE",
          },
          {
            text: "When you roll a Failure, you gain [Fortune's Favor](/rules/player_rules#FORTUNES-FAVOR)",
            type: "RULE",
          },
          {
            text: "You are scaling a castle wall, trying to get in without alerting the goblins keeping watch from the nearby tower. Your GM calls for an Agility Test, where Success is a 15 and means you get up without being noticed and a Failure is a 10 and means you get spotted and the goblins move to raise the alarm. You roll your Agility Test, you get a 5 on the dice and add 2 from your Agility, giving you a total of 7. The goblins spot you half way up, they begin to shout something you can't understand and begin to run towards the wall you are climbing!",
            type: "EG",
          },
        ],
      },
      {
        title: "Contests",
        slug: "CONTESTS",
        ruleType: "RULE",
        text: [
          {
            text: "When two or more characters are directly challenging each other the GM might call for a contested roll. A Contest is like any other test except the difficulty is set by comparing the competing dice. If one side is more than 5 higher than the other, then that side Succeeds on the Test and the other side Fails. If both sides are within 5, then the result is Mixed.",
            type: "RULE",
          },
          {
            text: "You joined an arm wrestling competition. Your first competition you are against a stout dwarven woman. The GM calls for a Test of Mettle. You roll a 13 and add your Mettle of 3 or a total of 16. The GM rolls a 10 and adds the woman's Mettle of 2, giving them a result of 12. This makes it a Mixed Success so the GM narrates how you go back and forth, finally winning the best 2-3 rounds on the 3rd round.",
            type: "EG",
          },
        ],
      },
      {
        title: "Group Tests",
        slug: "GROUP-TESTS",
        ruleType: "RULE",
        text: [
          {
            text: "Sometimes a group of characters are performing an action where the success depends on the group's overall performance, not one individual. One common case is sneaking around a dungeon. When taking a Group Test, each character rolls against the Test, counting the number of Success, Mixed, and Failures. The average of the result is the group's result. An easy way to find the average is to subtract the larger of successes or failures from the other. If that new number is higher than the Mixed, that's the result, otherwise the result is Mixed.",
            type: "RULE",
          },
          {
            text: "The GM calls for a Group Test for a group of 5, Pass is 13 and Fail is 8. If the group rolls 2 Passes, 2 Mixed and 1 Fail, then we subtract the 1 Fail from 2 Passes, leaving us with 1 Pass and 2 Mixed, so the result is Mixed. If instead there were 3 Passes and 1 Mixed, the result would have been a Pass.",
            type: "EG",
          },
        ],
      },
      {
        title: "Helping on a Test",
        slug: "HELP",
        ruleType: "RULE",
        text: [
          {
            text: "If a character is taking a Test and others are providing aid, if the character is not already rolling with Fortune's Favor, they can roll with Fortune's Favor. Otherwise add a +3 to the result of the test. No matter how many people are helping, you can only gain each bonus once.",
            type: "RULE",
          },
          {
            text: "Bill the Brawler is trying to open a big heavy stone door. His party is helping him by giving him a crowbar and helping to pull on the door. If Bill is not already using Fortune's Favor on this roll, he gets Fortune's Favor and adds +3 to the roll because there are two different ways the party is helping him.",
            type: "EG",
          },
        ],
      },
      {
        title: "Luck Test",
        slug: "LUCK-TEST",
        text: [
          {
            text: "A Luck Test is a special kind of Test without any Stat attached and cannot be helped with. It's just a Test to see if the character is lucky. Fortune's Favor can still be used on Luck Tests.",
            type: "RULE",
          },
          {
            text: "Smee the Shapeshifter wants to know what the smartest animals are around to communicate with. They aren't willing to track or spend time looking around for a smart animal so this wouldn't be a Test of their Heart or Intellect, instead it will be a Test of Luck.",
            type: "EG",
          },
        ],
      },
      {
        title: "1s and 20s",
        slug: "1-20",
        ruleType: "RULE",
        subRules: [
          {
            title: "1 - Critical Failure",
            slug: "1s",
            ruleType: "RULE",
            text: [
              {
                text: "Rolling a 1 is the worst a character could do. Tests always fail.",
                type: "RULE",
              },
            ],
          },
          {
            title: "20 - Critical Success",
            slug: "20s",
            ruleType: "RULE",
            text: [
              {
                text: "Rolling a 20 is the best a character could do. Tests always pass and when you roll a Critical Success on an attack, you deal double damage on the attack, including any flat bonuses.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Misfortune",
        slug: "MISFORTUNE",
        ruleType: "RULE",
        text: [
          {
            text: "Circumstances may cause misfortune. When the GM calls for a roll with Misfortune, you roll a second d20 and take the lower of the two rolls. If you have [Fortune's Favor](/rules/player_rules#FORTUNES-FAVOR), before you roll you can choose to spend it to cancel out the Misfortune and roll the test normally.",
            type: "RULE",
          },
        ],
      },
    ],
  },
  {
    title: "Combat",
    slug: "COMBAT",
    ruleType: "RULE",
    text: [
      {
        text: "Each round of combat is split into 3 parts, 1st, Environmental effects, 2nd, Players take their turn, 3rd, Enemies take their turn. During the player's turn, each player makes one Action and can move up to their speed. Enemies do the same during their turn.\nEach round of combat represents 30 seconds of in game time.",
        type: "RULE",
      },
    ],
    subRules: [
      {
        title: "Exchanges",
        slug: "EXCHANGES",
        ruleType: "RULE",
        text: [
          {
            text: "When a character attacks or casts an offensive spell at another creature or creatures an Exchange begins. To start the Exchange, Test your Attack, adding your Base Attack Bonus. The defenders Armor and Counter become the Success and Failure points of the Test. If you Succeed on the Test then the hit is clean and there is no room for retaliation. If the result is Mixed then you Clash. When you Clash, you and your target both choose a Clash Action to use with the defender picking first. If you Fail the test, your attack is Countered and the target deals damage to you as though they landed a Basic Attack.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "AOE Exchanges",
            slug: "AOE-EXCHANGES",
            ruleType: "RULE",
            text: [
              {
                text: "When your Attack targets multiple enemies, roll a single Attack Test, and compare to each enemy's defenses. Only one enemy can make a Clash or Counter. (One enemy can Clash and a different one can Counter.)",
                type: "RULE",
              },
            ],
          },
          {
            title: "Engaging an Enemy",
            slug: "ENGAGING-ENEMIES",
            ruleType: "RULE",
            text: [
              {
                text: "When you attempt to attack an enemy, they are [Engaged](/rules/player_rules#ENGAGED). Engaged Minions cannot take an Action on their turn, Non-Boss monsters damage dice go down by 1 step, and Bosses lose access to their most potent abilities.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Key Combat Information",
        slug: "COMBAT-NUMBERS",
        ruleType: "LISTCOMPACT",
        text: [
          {
            text: "These are the key fields for most combat Exchanges",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Base Attack Stat",
            slug: "BASIC-ATTACK",
            text: [
              {
                text: "Your Base Attack is the stat you use for Attack rolls and comes from your Class.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Base Damage",
            slug: "BASE-DAMAGE",
            text: [
              {
                text: "Your Base Damage is how much damage you deal if you hit with an attack. It comes from your Class, and can change if you are wielding a weapon in 1 hand or 2.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Range",
            slug: "BASIC-RANGE",
            text: [
              {
                text: "How far away you can Attack. Your class range shows the minimum and maximum distances you can attack if you have the appropriate equipment. Melee class weapons cannot be used outside of melee range. Ranged class weapons cannot be used in melee range.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Speed",
            slug: "BASIC-SPEED",
            text: [
              {
                text: "Your Speed determines how far you can move and comes from your Lineage. If you have more than one Speed, you can use any combination of them when you move. If you use a combination of Speeds, any movement counts against the total distance you can travel with all of them.",
                type: "RULE",
              },
              {
                text: "You have a 30 ft. Base Speed and a 20 ft. Fly Speed. You could fly 10 ft. and then run 20 ft. or run 10 ft. and then Fly 10 ft. But you could not run 20 ft. and then fly 10 ft.",
                type: "EG",
              },
            ],
          },
          {
            title: "Armor",
            slug: "BASIC-ARMOR",
            text: [
              {
                text: "Your Armor determines how hard you are to hit. Your Class will determine what Armor you are trained to wear and you can the effects of different armor in the [Armor section](/rules/player_rules#ARMOR).",
                type: "RULE",
              },
            ],
          },
          {
            title: "Counter",
            slug: "BASIC-COUNTER",
            text: [
              {
                text: "Your Counter is equal to your Armor-5.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Basic Actions",
        slug: "BASIC-ACTIONS",
        ruleType: "LISTCOMPACT",
        text: [
          {
            text: "These Actions are available to all characters. Each round a character can take 1 Action.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Attack",
            slug: "BASIC-ATTACK",
            text: [
              {
                text: "Attack with one of your proficient weapons or magic. If you hit, deal your Base Damage.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Careful Attack",
            slug: "CAREFUL-ATTACK",
            text: [
              {
                text: "Attack with one of your proficient weapons or magic. If you hit, deal half your Base Damage. A Miss or Clash does not trigger Clash Actions for the target.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Defend",
            slug: "DEFEND",
            text: [
              {
                text: "Add +3 to your Armor and Counter.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Hide",
            slug: "HIDE-ACTION",
            text: [
              {
                text: "When you are obscured from enemies you can try and hide. The GM determines the difficulty of the Agility Test. If you pass the test you gain the [Hidden status](/rules/player_rules#STATUSES). On a Mixed, you are harder to spot. If you try and Hide again on your next round, the difficulty of the Test is reduced by 3.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Sprint",
            slug: "SPRINT",
            text: [
              {
                text: "Double your Speed this turn.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Basic Counters",
        slug: "BASIC-COUNTERS",
        ruleType: "LISTCOMPACT",
        text: [
          {
            text: "These Actions can be used whenever you Clash with an enemy or as an Action.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Expose",
            slug: "COUNTER-EXPOSE",
            text: [
              {
                text: "Choose an ally within 30 ft. of you, they get a +3 to their next Attack Test against the target.",
                type: "RULE",
              },
              {
                text: "An ally can only benefit from one Expose at a time.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Rattle",
            slug: "COUNTER-RATTLE",
            text: [
              {
                text: "[Rattle](/rules/player_rules#STATUSES) your target until the end of their next turn.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Reposition",
            slug: "COUNTER-REPOSITION",
            text: [
              {
                text: "Move yourself, your target or both 5 ft. into an unoccupied space.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Stagger",
            slug: "COUNTER-STAGGER",
            text: [
              {
                text: "[Slow](/rules/player_rules#STATUSES) your target until the end of their next turn.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Oomph",
        slug: "OOMPH",
        ruleType: "RULE",
        text: [
          {
            text: "When you Attack, you can spend 2 Stamina to increase your Base Damage by 1 step. You can do this a number of times equal to 1/2 your current level.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Moving in Combat",
        slug: "MOVING-COMBAT",
        ruleType: "RULE",
        text: [
          {
            text: "In addition to an Action, you can move during your turn in combat, moving up to your Speed in any direction. You can move at any point during your turn, and can split your move before and after your Action.",
            type: "RULE",
          },
          {
            text: "If you willingly move out of melee range with an enemy they get a free Clash Action",
            type: "RULE",
          },
          {
            text: "If you a speed of 30 ft. you can move 10 ft. Make an Attack and then move another 20 ft. But, if you moved into melee range to make the attack, you'd only be able to move 10 ft. after the attack.",
            type: "EG",
          },
        ],
        subRules: [
          {
            title: "Getting Down and Standing Up",
            slug: "MOVEMENT-DOWN-UP",
            ruleType: "RULE",
            text: [
              {
                text: "Dropping [prone](/rules/player_rules#PRONE) is a free action. Standing up from [prone](/rules/player_rules#PRONE) takes either 10 ft. of Movement or an Action. If you have magical flight, it only takes 5ft. of Movement.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Cover",
        slug: "OVER",
        ruleType: "RULE",
        text: [
          {
            text: "Attacks require a clear line from the attacker to the target. When the line is interrupted, it becomes harder to effectively hit and damage your target. A target has Cover if they are more than half hidden from the attacker. If the target has Cover, they gain +3 to their Armor and Counter for this attack.",
            type: "RULE",
          },
          {
            text: "If the target is fully hidden they cannot be attacked.",
            type: "RULE",
          },
        ],
      },
    ],
  },
  {
    title: "Taking Damage",
    slug: "TAKING-DMG",
    ruleType: "RULE",
    text: [
      {
        text: "When you take damage, your Health is reduced by the damage amount. You can spent Stamina to reduce your damage taken by using your Deflect Dice. See the [rules on dying](/rules/player_rules#EDL) for what happens when you go to 0 Health and/or 0 Stamina.",
        type: "RULE",
      },
    ],
    subRules: [
      {
        title: "Deflect Dice",
        slug: "DEFLECT-DICE",
        ruleType: "RULE",
        text: [
          {
            text: "When you would take damage and you are not Surprised, Unconscious or otherwise unaware of the damage, you can attempt to reduce the damage by spending 3 Stamina per die to roll Deflect Dice, reducing the damage taken by the amount rolled. Your Deflect Dice is determined by your Class. You start with two Deflect Dice and gain 1 more every third level starting at level 3. Level 1-2: 2 dice, Level 3-5: 3 dice, Level 6+: 4 dice. You must decide how many dice you are going to roll before rolling any of them.",
            type: "RULE",
          },
          {
            text: "Depending on the source of the damage this might represent a last second dodge to reduce the effect of the blow or gritting your teeth through the damage to reduce the effect.",
            type: "RULE",
          },
          {
            text: "A goblin swings at you with a rusted short sword. They hit, and would deal 3 damage to you. You decide to Deflect, spending 2 Stamina and rolling your 1d4 dice. You get a 2, reducing the Slashing damage to 1. Your GM narrates how you throw yourself back at the last second, avoiding the worst of the attack, but still getting caught by the tip of the blade.",
            type: "EG",
          },
        ],
      },
    ],
  },
  {
    title: "Weapons, Armor & Shields",
    slug: "EQUIPMENT",
    ruleType: "RULE",
    subRules: [
      {
        title: "Weapons",
        slug: "WEAPONS",
        ruleType: "RULE",
        text: [
          {
            text: "Characters can be proficient in different groups of weapons and magic. It is up to your GMs discretion what category a weapon falls into, or if it is a unique weapon that requires its own training.",
            type: "RULE",
          },
          {
            text: "Weapons can require one or two hands to wield. If you leave one hand free to wield a Shield or some other item, your Base Damage is reduced by [one step](/rules/player_rules#DAMAGE-DICE).",
            type: "RULE",
          },
          {
            text: "Using a ranged weapon in melee range causes Misfortune on the Attack Test.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Melee",
            slug: "MELEE-WEAPONS",
            ruleType: "LIST",
            lists: [
              {
                label: "",
                items: [
                  "Hammers & Clubs",
                  "Slashing Swords",
                  "Piercing Swords & Daggers",
                  "Axes",
                  "Flails, Ball & Chain, etc.",
                ],
              },
            ],
          },
          {
            title: "Ranged",
            slug: "RANGED-WEAPONS",
            ruleType: "LIST",
            lists: [
              {
                label: "",
                items: [
                  "Bows",
                  "Crossbows",
                  "Light Throwing Weapons (Dart, Throwing Dagger)",
                  "Medium Throwing Weapons (Throwing Axe, Spear)",
                  "Heavy Throwing Weapons (Shot Put, Heavy Spear)",
                ],
              },
            ],
          },
          {
            title: "Special Weapons",
            slug: "SPECIAL-WEAPONS",
            ruleType: "LIST",
            lists: [
              {
                label: "",
                items: [
                  "Whips: Range: Melee-20ft",
                  "Pole Weapons: Range: Melee-10ft",
                ],
              },
            ],
          },
          {
            title: "Magic",
            slug: "MAGIC-TRAINING",
            ruleType: "RULE",
            text: [
              {
                text: "How a characters magic training manifests is up to the player. The player determines what is required to cast. A wand, staff, talisman or other focus is typical, but chanting and hand movements or other ideas are also valid. Note that the one and two hand rules for weapons applies to magic attacks as well.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Damage Dice",
        slug: "DAMAGE-DICE",
        ruleType: "RULE",
        text: [
          {
            text: "Some effects cause your Base Damage to go up or down by one or more steps. Follow the pattern below to determine the new Base Damage dice.",
            type: "RULE",
          },
          {
            text: "1 - 1d4 - 1d6 - 1d8 - 1d10 - 1d12 - 2d6 - 2d8 - etc.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Armor",
        slug: "ARMOR",
        ruleType: "LISTCOMPACT",
        text: [
          {
            text: "You can wear armor from any class you are trained in that you are trained in. Armors have different requirements based on how hard they are to move in and how much protection they provide. Each armor indicates how to calculate your armor while wearing it.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "No Armor",
            slug: "NO-ARMOR",
            text: [
              {
                text: "10 + Agility",
                type: "RULE",
              },
            ],
          },
          {
            title: "Light Armor",
            slug: "LIGHT-ARMOR",
            text: [
              {
                text: "12 + Agility",
                type: "RULE",
              },
            ],
          },
          {
            title: "Medium Armor",
            slug: "MEDIUM-ARMOR",
            text: [
              {
                text: "14 + Agility(Max 2)",
                type: "RULE",
              },
            ],
          },
          {
            title: "Heavy Armor",
            slug: "HEAVY ARMOR",
            text: [
              {
                text: "17",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Shields",
        slug: "SHIELDS",
        ruleType: "LIST",
        text: [
          {
            text: "Shields come in three sizes, light (bucklers and dueling shields), medium (kite shields), and heavy (tower shields).",
            type: "RULE",
          },
          {
            text: "Shields can help increase your armor, deflect attacks and absorb damage.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Light Shields",
            slug: "LIGHT-SHIELDS",
            text: [
              {
                text: "Require at least 3 Agility: Increases your Deflect Dice by 1 step.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Medium Shields",
            slug: "MEDIUM-SHIELDS",
            text: [
              {
                text: "Require at least 1 Agility and 1 Mettle: +1 to Armor and you can reroll 1s on your Deflect Dice roll.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Heavy Shields",
            slug: "HEAVY-SHIELDS",
            text: [
              {
                text: "Require at least 3 Mettle: +2 to Armor and +3 to Deflect.",
                type: "RULE",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Dying, & Last Stand",
    slug: "EDL",
    ruleType: "RULE",
    text: [
      {
        text: "If you would be reduced to below 0 Stamina or 0 Health, you are reduced to 0 instead.",
        type: "RULE",
      },
    ],
    subRules: [
      {
        title: "Dying",
        slug: "DYING",
        ruleType: "RULE",
        text: [
          {
            text: "When your Health is reduced to 0, you have been mortally wounded and are Dying. Taking an Action or moving more than half your Speed costs 3 Stamina. An ally can use the Help Action to aid you, removing the Stamina cost as long as they stay within 5ft of you.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Last Stand",
        slug: "LAST-STAND",
        ruleType: "RULE",
        text: [
          {
            text: "At the start of your turn you can opt to make a Last Stand to push yourself yourself to the absolute limit. Immediately and the start of each round of combat you regain all of your Health & Stamina. If you are reduced to 0 Health or at the end of the 3 rounds, you die.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Death",
        slug: "DEATH",
        ruleType: "RULE",
        text: [
          {
            text: "When you have 0 Health & 0 Stamina you are dead and your soul begins to leave your body, making the long journey to The Tribunal and the lands beyond. Only magical resuscitation can bring you back.",
            type: "RULE",
          },
        ],
      },
    ],
  },
  {
    title: "Healing",
    slug: "NON-MAGICAL-HEALING",
    ruleType: "RULE",
    text: [
      {
        text: "Healing cannot affect dead creatures.",
        type: "RULE",
      },
    ],
    subRules: [
      {
        title: "Healing a Dying Ally",
        slug: "HEALING-DYING-ALLY",
        ruleType: "RULE",
        text: [
          {
            text: "If an ally within reach of you is at 0 Health but not Dead, you can use an Action to attempt to heal them. Make an Intellect Test, Pass: 15, Fail: 10. On a pass they regain 1 Health, on a fail they lose 1 Stamina.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Healing when Catching Your Breath",
        slug: "HEALING-WHEN-CATCHING-YOUR-BREATH",
        ruleType: "RULE",
        text: [
          {
            text: "When you Catch Your Breath, you patch up and tend to any non life threatening injuries.",
            type: "RULE",
          },
          {
            text: "If you Catch Your Breath and are at 0 Health, you regain 1 Health.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Healing during a Night's Rest",
        slug: "HEALING-NIGHTS-REST",
        ruleType: "RULE",
        text: [
          {
            text: "When you finish a [Night's Rest](/rules/player_rules#nights-rest), regain Health equal to your current level.",
            type: "RULE",
          },
        ],
      },
    ],
  },
  {
    title: "Movement",
    slug: "MOVEMENT",
    ruleType: "RULE",
    subRules: [
      {
        title: "Overland Travel",
        slug: "OVERLAND-TRAVEL",
        ruleType: "RULE",
        text: [
          {
            text: "A full day's march assumes 8 hours of marching.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Comfortable Marching Pace",
            slug: "COMFORTABLE-MARCH",
            ruleType: "RULE",
            text: [
              {
                text: "15 + Mettle miles per day along an established road. The speed is halved when traveling without a road.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Treacherous Terrain",
            slug: "TREACHEROUS-TERRAIN",
            ruleType: "RULE",
            text: [
              {
                text: "Difficult terrain takes extra energy to traverse. For each hour navigating treacherous terrain make a Mettle test. Pass - 13, Fail - 8. On a Fail, lose 2 stamina, on a mixed, lose 1.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Jumping",
        slug: "JUMP",
        ruleType: "LIST",
        text: [
          {
            text: "When jumping, use these formulas to calculate the minimum distances you can go. If you are trying to jump further, Test your Mettle. The difficulty is equal to 10+1 per foot beyond your standard jump range.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Running Leap",
            slug: "RUNNING-LEAP",
            ruleType: "RULE",
            text: [
              {
                text: "If you move up to 10 ft. before jumping: (6 + 2\\*Mettle) ft. horizontally (Min 2 ft.)",
                type: "RULE",
              },
            ],
          },
          {
            title: "Standing Leap",
            slug: "STANDING-LEAP",
            ruleType: "RULE",
            text: [
              {
                text: "(4 + Mettle) ft. horizontally (Min 1 ft.)",
                type: "RULE",
              },
            ],
          },
          {
            title: "High Jump",
            slug: "HIGH-JUMP",
            ruleType: "RULE",
            text: [
              {
                text: "(3 + Mettle) ft. vertically (Min 1 ft.)",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Falling",
        slug: "FALL",
        ruleType: "RULE",
        text: [
          {
            text: "When you fall from a height greater than 10 ft. Make an Agility Test. Pass: 12, Fail: 7. For every 5 ft. past 10 ft. the difficulty of the Test increases by 2. On a Pass you take no damage. On a fail you take 1d10 bludgeoning damage per 10 ft. On a Mixed you take half damage.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Other Forms of Movement",
        slug: "OTHER-MOVEMENT",
        ruleType: "LISTCOMPACT",
        text: [
          {
            text: "There are times when you may want to swim, climb. If they have a Speed for that movement, then use that. Otherwise use the base speeds below.",
            type: "RULE",
          },
          {
            text: "If you are wearing Heavy Armor while Climbing or Swimming, make a Mettle Test. Pass: 12, Fail: 7. On a Mixed, the movement costs 2 Stamina. On a Fail, it costs 4.",
            type: "RULE",
          },
        ],
        lists: [
          {
            label: "",
            items: ["Climbing: 5 ft.", "Swimming: 5 ft."],
          },
        ],
      },
      {
        title: "Lift & Drag",
        slug: "LIFT-DRAG",
        ruleType: "RULE",
        text: [
          {
            text: "How much you can lift and drag are affected by your size. For each size below Medium, amounts are halved, and for each size above Medium they are doubled.",
            type: "RULE",
          },
          {
            text: "Using both hands, you can lift up to 50+10x your Mettle pounds.",
            type: "RULE",
          },
          {
            text: "You can drag up to 4x your lifting capacity.",
            type: "RULE",
          },
        ],
      },
    ],
  },
  {
    title: "Gear",
    slug: "GEAR",
    subRules: [
      {
        title: "Basic Supplies",
        slug: "BASIC-SUPPLIES",
        ruleType: "RULE",
        text: [
          {
            text: "Your pack contains everyday essentials like rope, a bedroll, and flint & tinder—enough to handle routine travel needs.",
            type: "RULE",
          },
        ],
      },
      {
        title: "Gear Slots",
        slug: "GEAR-SLOTS",
        ruleType: "RULE",
        text: [
          {
            text: "You have 9 + half your Mettle (round towards zero) + half your level (rounded down) Gear Slots. These can be used for armor and gear beyond the default, notable items in your pack, and for Supplies.",
            type: "RULE",
          },
          {
            text: "If you have more than your maximum gear slots, you are Slowed and all Agility Tests are made with Misfortune.",
            type: "RULE",
          },
          {
            text: "If you have more than double your max gear slots, you are Pinned.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Notable Items",
            slug: "NOTABLE-ITEMS",
            ruleType: "RULE",
            text: [
              {
                text: "Notable or valuable items take up 1 Gear Slot each, unless particularly bulky, in which case they take more. Smaller items might not be notable on their own, but when combined might be notable. It's probably not notable that you have 1 ball bearing, but it's probably notable that you have a sack full.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Supplies",
            slug: "SUPPLIES",
            ruleType: "RULE",
            text: [
              {
                text: "Supplies can be purchased for 1 Coin each and take up 1 Gear Slot. Supplies represent an item or set of mundane items that a standard adventurer is likely to have with them. Things like 20' of rope, an extra water skin, or a flint fire starter are typical Supplies. If you are trying to pull something less likely out of your Supplies, use the following table to determine the [Luck Test](/rules/player_rules#LUCK-TEST) required to pull out the item.",
                type: "RULE",
              },
            ],
            lists: [
              {
                label: "Likelihood",
                items: [
                  "Pretty Likely 10/5",
                  "Unlikely 15/10",
                  "Very Unlikely 18/13",
                ],
              },
              {
                label: "Results",
                items: [
                  "Pass → You have the item.",
                  "Mixed → You have something similar.",
                  "Fail → You don’t have anything useful. Pick a typical Supply to take up the Gear Slot.",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Currency",
        slug: "CURRENCY",
        ruleType: "RULE",
        text: [
          {
            text: "Coin: The universal currency. Different places might have different versions, but everyone trades in Coin.",
            type: "RULE",
          },
          {
            text: "Bits: Something that costs Bits isn't expensive enough to be worth worrying about.",
            type: "RULE",
          },
          {
            text: "Whether something is worth Coin or Bits comes down to the GMs discretion. Generally something that is going to help the player or they should feel the cost should cost Coin. But something that's just flavor, or part of normal everyday life should be Bits. Grabbing a bite to eat and some drinks with the party at the local inn. That costs Bits. Buying a round and plying a patron for information. That's going to cost a Coin or Two. A dress to get you into the royal ball. That's going to be more Coin.",
            type: "RULE",
          },
        ],
      },
    ],
  },
  {
    title: "Starting Equipment",
    slug: "STARTING-GEAR",
    text: [
      {
        text: "Your character starts with a pack full of gear and the equipment they need for their adventures. The exact contents will vary from character to character and from campaign to campaign, but generally you have a light source, rope, a comfortable way to sleep, and some weather protection.",
        type: "RULE",
      },
      {
        text: "If you have training or experience with equipment, you have the equipment to use that training, if it's portable. You might have one or two melee weapons and one or two ranged weapons from your Class, a set of dice from your culture and some artisans tools from your Novice Feature. The exact items should be discussed with your GM during your intro session.",
        type: "RULE",
      },
    ],
    subRules: [
      {
        title: "Starting Coin",
        slug: "STARTING-COIN",
        text: [
          {
            text: "You start with 5 Coin.",
            type: "RULE",
          },
        ],
      },
    ],
  },
  {
    title: "Reference",
    slug: "REFERENCE",
    ruleType: "RULE",
    subRules: [
      {
        title: "Languages",
        slug: "LANGUAGES",
        ruleType: "LISTCOMPACT",
        subRules: [
          {
            title: "Allspeak",
            slug: "ALLSPEAK",
            text: [
              {
                text: "The universal language known by most civilized peoples, it is a harmonious blend of words and expressions drawn from various cultures, offering a common ground for communication.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Elvish",
            slug: "ELVISH",
            text: [
              {
                text: "The common language of elves, spoken with grace and intertwined lyrical tones.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Dwarvish",
            slug: "DWARVISH",
            text: [
              {
                text: "The language of dwarves and others who share their culture. Dwarvish is a robust and resonant tongue, usually spoken loud enough to be heard over the rhythmic clinks of hammers and chisels.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Thistletongue",
            slug: "THISTLETONGUE",
            text: [
              {
                text: "The language of faeries and other fae folk. Thistletongue is ethereal, filled with delicate trills and melodic nuances.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Starrend",
            slug: "STARREND",
            text: [
              {
                text: "The language of celestials as well as some air elementals and other sky dwellers. Starrend is a celestial tongue, each word carrying the weight of cosmic forces, and is characterized by crystalline tones and ethereal echoes.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Deeproot",
            slug: "DEEPROOT",
            text: [
              {
                text: "The language of Ents, Earth Elementals and Stone Colossi. It's a deep and slow language for deep and slow creatures. Deeproot rumbles like the earth, each word a deliberate and ancient utterance resonating with the solidity of stone.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Seawhisper",
            slug: "SEAWHISPER",
            text: [
              {
                text: "A fluid and melodic language spoken by merfolk and other denizens of the ocean. Seawhisper uses clicks and sharp bursts of noise and can only properly be spoken underwater.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Voidhowl",
            slug: "VOIDHOWL",
            text: [
              {
                text: "Spoken by demons and other infernal beings. Voidhowl is a cacophony of malevolent sounds, mixing guttural growling and ear-splitting shrieks.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Damage Types",
        slug: "DAMAGE-TYPES",
        ruleType: "RULE",
        text: [
          {
            text: "Bludgeoning, Cold, Fire, Lightning, Piercing, Psychic, Radiant, Rot, & Slashing",
            type: "RULE",
          },
        ],
      },
      {
        title: "Statuses",
        slug: "STATUSES",
        ruleType: "LISTCOMPACT",
        text: [
          {
            text: "Statuses are key words for conditions that can affect your character and others. The same Status cannot be applied more than once. If the same Status would be applied, the one with the longer duration is used.",
            type: "RULE",
          },
        ],
        subRules: [
          {
            title: "Blind",
            slug: "BLIND-STATUS",
            text: [
              {
                text: "You cannot see. Your Attacks have Misfortune and Attacks against you gain Fortune's Favor.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Dead",
            slug: "DEAD-STATUS",
            text: [
              {
                text: "0 Health and 0 Stamina. See the [Dead & Dying rules](/rules/player_rules#EDL) for more information.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Deaf",
            slug: "DEAF-STATUS",
            text: [
              {
                text: "You cannot hear. You have Misfortune on all Tests to stealth or notice something sneaking up on you.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Dying",
            slug: "DYING-STATUS",
            text: [
              {
                text: "0 Health. See the [Dead & Dying rules](/rules/player_rules#EDL) for more information.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Engaged",
            slug: "ENGAGED-STATUS",
            text: [
              {
                text: "Gained when you are attacked by an enemy.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Entangled",
            slug: "ENTANGLED-STATUS",
            text: [
              {
                text: "Your Speed is reduced to 0.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Exhausted",
            slug: "EXHAUSTED-STATUS",
            text: [
              {
                text: "You cannot spend Stamina, your Speed is reduced by half and your Attack Dice is reduced by 2 Steps.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Hidden",
            slug: "HIDDEN-STATUS",
            text: [
              {
                text: "You cannot be seen and gain a +5 to attack Tests while hidden. Attacking, casting magic, or performing another noticeable act while hidden immediately triggers a Heart Test to spot you from any nearby creatures.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Fatigued",
            slug: "FATIGUED-STATUS",
            text: [
              {
                text: "All Stamina costs are doubled.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Incapacitated",
            slug: "INCAPACITATED-STATUS",
            text: [
              {
                text: "You cannot take Actions or move and are unaware of your surroundings.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Pinned",
            slug: "PINNED-STATUS",
            text: [
              {
                text: "Your Speed is reduced to 0, you have Misfortune on all Actions.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Prone",
            slug: "PRONE-STATUS",
            text: [
              {
                text: "Your Speed is reduced by 20 ft. to a minimum of 5 ft. Ranged Attacks against you have Misfortune while Melee Attacks have Fortune's Favor.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Rattled",
            slug: "RATTLED-STATUS",
            text: [
              {
                text: "You have a -2 on Tests.",
                type: "RULE",
              },
            ],
          },
          {
            title: "Slowed",
            slug: "SLOWED-STATUS",
            text: [
              {
                text: "Your Speed is halved.",
                type: "RULE",
              },
            ],
          },
        ],
      },
      {
        title: "Creature Sizes",
        slug: "SIZES",
        ruleType: "LISTCOMPACT",
        lists: [
          {
            label: "",
            items: [
              "Miniscule (>6in)",
              "Tiny (~6in - 2ft)",
              "Small (~2ft - 4ft)",
              "Medium (~4ft - 7ft)",
              "Large (~7ft- 10ft)",
              "Gigantic (~10ft - 20ft)",
              "Titanic (~20ft-50ft)",
              "Colossal (<50ft)",
            ],
          },
        ],
      },
    ],
  },
];
export default generalRules;
