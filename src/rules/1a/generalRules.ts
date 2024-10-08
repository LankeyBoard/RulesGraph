import { GenericRule } from "../../schema/types.generated";

const generalRules: GenericRule[] = [
  {
    slug: "BUILDING-A-PC",
    title: "Building a New Character",
    ruleType: "RULE",
    text: [
      {
        text: "Your GM should tell you the level you are starting at. If you are starting higher than first level, follow the rules for leveling up after building your character at first level.",
      },
      { text: "Pick a Lineage, Culture and Class." },
      {
        text: "Assign stats - You have a set of 3,2,0,-2. Use each number once, placing them in your 4 stats.",
      },
      {
        text: "Higher numbers are better. Your class will have at least 1 primary stat. It's a good idea to have that be your highest number.",
      },
      {
        text: "Pick a [Novice Feature](/rules/generic_features/novice_features).",
      },
      { text: "(Optional) Write a backstory for your character." },
    ],
    subRules: [
      {
        slug: "STARTING-EQUIPMENT",
        title: "Starting Equipment",
        ruleType: "RULE",
        text: [
          {
            text: "Your GM will tell you when you level up. Parties should generally be kept at the same level and should level up at the same time when Recuperating. When you level up, your Health & Stamina increase and you gain new features based on your Class.",
          },
        ],
      },
      {
        slug: "LEVELING-UP",
        title: "Leveling Up",
        ruleType: "RULE",
        text: [
          {
            text: "Your GM will tell you when you level up. Parties should generally be kept at the same level and should level up at the same time when Recuperating. When you level up, your Health & Stamina increase and you gain new features based on your Class.",
          },
        ],
      },
    ],
  },
  {
    slug: "WHAT-MAKES-UP-A-CHARACTER",
    title: "What Makes Up a Character",
    shortTitle: "Parts of a Character",
    ruleType: "RULE",
    text: [
      { text: "Level, lineage, culture, class, stats, ties and backstory" },
    ],
    subRules: [
      {
        slug: "LEVEL-RULE-DESC",
        title: "Level",
        ruleType: "RULE",
        text: [
          {
            text: "As your character grows more powerful and experienced you gain levels, unlocking new abilities based on your class. The current rules go from level 1-8.",
          },
        ],
      },
      {
        slug: "LINEAGE-RULE-DESC",
        title: "Lineage",
        ruleType: "RULE",
        text: [
          {
            text: "Your character's physiology. Visit the lineage section for a list of options.",
          },
        ],
      },
      {
        slug: "CULTURE-RULE-DESC",
        title: "Culture",
        ruleType: "RULE",
        text: [
          {
            text: "Where your character grew up. Visit the culture section for a list of options",
          },
        ],
      },
      {
        slug: "STATS",
        title: "Stats",
        ruleType: "LISTCOMPACT",
        subRules: [
          {
            slug: "METTLE",
            title: "Mettle",
            ruleType: "RULE",
            text: [
              {
                text: "The physical force a character can generate as well as their heartiness.",
              },
            ],
          },
          {
            slug: "AGILITY",
            title: "Agility",
            ruleType: "RULE",
            text: [
              { text: "the physical accuracy and control of a character." },
            ],
          },
          {
            slug: "INTELLECT",
            title: "Intellect",
            ruleType: "RULE",
            text: [{ text: "The ability to gather and retain information." }],
          },
          {
            slug: "HEART",
            title: "Heart",
            ruleType: "RULE",
            text: [
              { text: "Emotional engagement, presence, and determination." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "CHAR-RESOURCES",
    title: "Character Resources",
    ruleType: "RULE",
    text: [],
    subRules: [
      {
        slug: "STAMINA",
        title: "Stamina",
        ruleType: "RULE",
        text: [
          {
            text: "Each character has a pool of stamina. The exact amount is determined by their class or stat block if they are an NPC. Your stamina can be used for class abilities as well as to enhance certain generic tests such as jumping and marching. You can also opt to have damage cost stamina instead of health.",
          },
        ],
      },
      {
        slug: "HEALTH",
        title: "Health",
        ruleType: "RULE",
        text: [
          {
            text: "Health represents the life force of your character. See Exhausted, Dying, Last Stand & Healing for what happens at 0 Health ",
          },
        ],
      },
      {
        slug: "REST",
        title: "Resting",
        ruleType: "RULE",
        text: [
          {
            text: "If you spend stamina while resting, it immediately ends the rest and you gain no benefits from the rest",
          },
        ],
        subRules: [
          {
            slug: "CATCH-YOUR-BREATH",
            title: "Catch Your Breath",
            ruleType: "RULE",
            text: [
              {
                text: "When you have a moment, you can catch your breath, tending to your wounds, wiping down your weapons, and centering yourself. To Catch Your Breath, spend 10 minutes resting and performing light activities without interruption.\nAt the end of the rest, you regain all missing stamina.\nIf you are at 0 Health, you gain 1 Health. Some classes may also have features that refresh when you Catch Your Breath.",
              },
            ],
          },
          {
            slug: "REST-RELAX",
            title: "Rest and Relax",
            ruleType: "RULE",
            text: [
              {
                text: "In-between adventures you have a chance to rest, relax and prepare yourself for the next call to action. To gain the benefits of Resting and Relaxing (R&R) you must spend 5 nights in a safe and relatively comfortable shelter while only engaging in light activity. Eg. At home or in an inn. Or spend 14 days & nights in less than ideal conditions with no more than light activity. Eg. Sleeping in a tent in the woods.",
              },
              {
                text: "After successful Rest and Relaxation, regain all lost Health and Stamina. You also lose any conditions that do not specifically last through a R&R",
              },
            ],
          },
          {
            slug: "NIGHTS-SLEEP",
            title: "A Night's Sleep",
            ruleType: "RULE",
            text: [
              {
                text: "A good night's rest is still important to an adventurer. If you are awake for more than 24 hours in a row, Test your Mettle each hour. The difficulty of this test increases by 1 for each hour beyond 24 hours. Pass (15+): You suffer no ill effects. Mixed (10-14): Reduce your current and maximum stamina by 3. Fail (9-): Reduce your current and maximum stamina by 10. If you are reduced to 0 stamina in this way you become unconscious. Once you sleep for at least 6 hours you lose any negative effects from a lack of rest  and reset the difficulty of the test.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "TESTS",
    title: "Tests",
    ruleType: "RULE",
    text: [
      {
        text: "Tests are how you determine the outcome of uncertain events, can you smash open a door (Mettle), talk a guard into looking the other way (Heart), dodging a tomato hurled at your head (Agility).\nFirst the success and failure points of the test is set by the GM (Game Master) and the general outcome of success and failure are announced if it is reasonable for the player characters to know. Then players can decide if they want to attempt the test. The player then rolls 1d20 and adds their stat bonus to the result. If the result is at least equal to the success point, they pass the test and have a beneficial outcome. If the result is greater than or equal to the failure point but worse than the success, then the result is mixed. The GM can offer success with a cost or mixed success. If the results are less than the failure pint, the result is a failure. In general the failure point is five less than the success point.",
      },
    ],
    subRules: [
      {
        slug: "SUCCESS",
        title: "Success",
        ruleType: "RULE",
        text: [
          {
            text: "Success on a test doesn't always mean getting exactly what you want, but it does mean a favorable outcome for you. You roll at least the  difficulty for the test.",
          },
          {
            type: "EG",
            text: "You are talking to the innkeeper negotiating for a room. The GM calls for a heart test and tells you success needs a 15, and you'll get a good discount. Failure is a 5 and you get no discount and an undesirable room. You roll a 13 and add +2 for your heart to get a total of 15, which means you succeed. You manage to negotiate a 20% discount!",
          },
        ],
      },
      {
        slug: "SUSSESS-WITH-COST",
        title: "Success With a Cost",
        ruleType: "RULE",
        text: [
          {
            text: "Success with a cost is when the GM offers a consequence and the player chooses if they want to accept the consequences or fail the test.",
          },
          {
            type: "EG",
            text: "You try and scale a difficult cliff, you roll a mixed result. The GM may offer that you try and fall the first time, taking 1d6 damage but make it up on the second try or you fail and realize it would be too risky to climb and can't make it up.",
          },
        ],
      },
      {
        slug: "MIXED-SUCCESS",
        title: "Mixed Success",
        ruleType: "RULE",
        text: [
          {
            text: "A mixed success is when you are partially successful in your endeavor. You achieve some of the outcome you want, but there are some complications or downsides.",
          },
          {
            type: "EG",
            text: "You are trying to trick a guard into letting you go after being caught breaking curfew. You told him you forgot your pass at home and get a mixed success on the Heart test your GM called for. The guard believes you but insists on escorting you home to show him the pass.",
          },
        ],
      },
      {
        slug: "FAILURE",
        title: "Failure",
        ruleType: "RULE",
        text: [
          {
            text: "A failure occurs when you cannot achieve your desired outcome. This may mean the situation was harder than you initially believed or because you couldn't do it as well as you hoped or any other reason you and the GM think is reasonable. Sometimes the consequences of failure are direct, such as taking damage, other times they can simply be a complication for the story, this is determined by the GM.",
          },
          {
            type: "EG",
            text: "You are scaling a castle wall, trying to get in without alerting the goblins keeping watch from the nearby tower. Your GM calls for an agility test, where success is a 15 and means you get up without being noticed and a failure is a 10 and means you get spotted. You roll your agility test, you get a 5 on the dice and add 2 from your agility, giving you a total of 7. The goblins spot you half way up, they begin to shout something you can't understand and begin to run towards the wall you are climbing!",
          },
        ],
      },
      {
        slug: "CONTESTS",
        title: "Contests",
        ruleType: "RULE",
        text: [
          {
            text: "When two or more characters are directly challenging each other the GM might call for a contested roll. A Contest is like any other test except the difficulty is set by comparing the competing dice. If one side is more than 5 higher than the other, then that side passes the test and the other side fails. If both sides are within 5, then the result is a Mixed Success.",
          },
          {
            type: "EG",
            text: "You joined an arm wrestling competition. Your first competition you are against a stout dwarven woman. The GM calls for a Test of Mettle. You roll a 13 and add your Mettle of 3 or a total of 16. The GM rolls a 10 and adds the woman's Mettle of 2, giving them a result of 12. This makes it a Mixed Success so the GM narrates how you go back and forth, finally winning the best 2-3 rounds on the 3rd round.",
          },
        ],
      },
      {
        slug: "GROUPT-TESTS",
        title: "Group Tests",
        ruleType: "RULE",
        text: [
          {
            text: "Sometimes a group of characters are performing an action where the success depends on the groups overall performance, not one individuals. One common case is sneaking around a dungeon. When taking a group Test, each character rolls against the test, count the number of Success, Mixed, and Failures. The average of the result is the groups result. An easy way to find the average is to subtract the larger of successes or failures from the other. If that new number is higher than the Mixed, that's the result, otherwise the result is Mixed.",
          },
          {
            type: "EG",
            text: "The GM calls for a Group Test for a group of 5, Pass is 13 and Fail is 8. If the group rolls 2 Passes, 2 Mixed and 1 Fail, then we subtract the 1 Fail from 2 Passes, leaving us with 1 Pass and 2 Mixed, so the result is Mixed. If instead there were 3 Passes and 1 Mixed, the result would have been a Pass.",
          },
        ],
      },
      {
        slug: "1-20",
        title: "1s and 20s",
        ruleType: "RULE",
        text: [],
        subRules: [
          {
            slug: "1s",
            title: "1 - Critical Failure",
            ruleType: "RULE",
            text: [
              {
                text: "Rolling a 1 is the worst a character could do. Tests always fail.",
              },
            ],
          },
          {
            slug: "20s",
            title: "20 - Critical Success",
            ruleType: "RULE",
            text: [
              {
                text: "Rolling a 20 is the best a character could do. Tests always pass and when you roll a critical success on an attack, you  deal double damage on the attack.",
              },
            ],
          },
        ],
      },
      {
        slug: "FORTUNES-FAVOR",
        title: "Fortune's Favor",
        ruleType: "RULE",
        text: [
          { text: "When you fail a test, you gain Fortune's Favor." },
          {
            text: "With Fortune's Favor, if you take a Test, you can spend your Fortune's Favor to roll a second d20. You can use the results of either dice.",
          },
        ],
      },
      {
        slug: "MISFORTUNE",
        title: "Misfortune",
        ruleType: "RULE",
        text: [
          {
            text: "Circumstances may cause misfortune as well. When the GM calls for a roll with Misfortune, you roll a second d20 and take the lower of the two rolls. If you have Fortunes Favor, before you roll you can chose to give it up to cancel out the Misfortune and roll the test normally.",
          },
        ],
      },
    ],
  },
  {
    slug: "COMBAT",
    title: "Combat",
    ruleType: "RULE",
    text: [
      {
        text: "Each round of combat is split into 3 parts, 1st, Environmental effects, 2nd Players turn, 3rd Enemies turn. During the players turn, each player makes one action and can move up to their movement speed. During the enemies turn enemies with actions can take one action and move. Enemies with only counters can only move unless they have not been attacked, in which case they can use a counter as an action.",
      },
    ],
    subRules: [
      {
        slug: "EXCHANGES",
        title: "Exchanges",
        ruleType: "RULE",
        text: [
          {
            text: "When a character attacks or casts an offensive spell at another creature or creatures an exchange begins. To start the exchange, make an attack roll and add the relevant stats depending on your class. Compare the total attack to the creatures Defense and Counter. If you roll above their Defense then the hit is clean and there is no room for retaliation. If the roll is between their Defense and Counter then you clash. You can either choose to deal no damage or strike but leave yourself open to counter attack. Your attack is resolved first, and then the target can use one of their counter moves. If you roll below their Counter, your attack is countered and the target can use one of their counter moves.",
          },
        ],
        subRules: [
          {
            title: "AOE Exchanges",
            slug: "AOE-EXCHANGES",
            ruleType: "RULE",
            text: [
              {
                text: "When your action targets multiple enemies, roll a single attack test, and compare to each enemies defenses. If any target clashes or counters, the GM chooses which creature will take advantage of the opening. If two or more enemies clash or counter, the creature makes the attack with Fortune's Favor. Only a single enemy can clash or counter a single exchange.",
              },
            ],
          },
        ],
      },
      {
        slug: "COMBAT-NUMBERS",
        title: "Key Comat Information",
        ruleType: "LISTCOMPACT",
        text: [{ text: "These are the key fields for most combat Exchanges" }],
        subRules: [
          {
            title: "Base Attack Stat",
            slug: "BASIC-ATTACK",
            text: [
              {
                text: "Your Base Attack is the stat you use for Attack rolls and comes from your class.",
              },
            ],
          },
          {
            title: "Range",
            slug: "BASIC-RANGE",
            text: [
              {
                text: "How far away you can attack. Melee class weapons cannot be used outside of melee range. Ranged class weapons cannot be used in melee range. ",
              },
            ],
          },
          {
            title: "Speed",
            slug: "BASIC-SPEED",
            text: [
              {
                text: "Your Speed deterimines how far you can move and comes from your lineage.",
              },
            ],
          },
          {
            title: "Armor",
            slug: "BASIC-ARMOR",
            text: [
              {
                text: "If you are not wearing any armor, your Armor is 10+Agility. Your Armor determines how hard you are to hit.",
              },
            ],
          },
          {
            title: "Counter",
            slug: "BASIC-COUNTER",
            text: [{ text: "Your Counter is equal to your Armor-5." }],
          },
        ],
      },
      {
        slug: "BASIC-ACTIONS",
        title: "Basic Actions",
        ruleType: "LISTCOMPACT",
        text: [
          { text: "These Actions are available to all players all the time." },
        ],
        subRules: [
          {
            title: "Attack",
            slug: "BASIC-ATTACK",
            text: [
              {
                text: "Attack with one of your proficient weapons or magic. You deal your base damage.",
              },
            ],
          },
          {
            title: "Sprint",
            slug: "SPRINT",
            text: [{ text: "Double your Speed this turn." }],
          },
          {
            title: "Defend",
            slug: "DEFEND",
            text: [{ text: "Add +2 to your Armor and Counter." }],
          },
          {
            title: "Hide",
            slug: "HIDE-ACTION",
            text: [
              {
                text: "When you are obscured from enemies you can try and hide. See the rules on stealth for how to handle this.",
              },
            ],
          },
          {
            title: "Slip Away",
            slug: "SLIP-AWAY",
            text: [
              {
                text: "Your movement does not trigger counter moves this round.",
              },
            ],
          },
        ],
      },
      {
        slug: "BASIC-COUNTERS",
        title: "Basic Counters",
        ruleType: "LISTCOMPACT",
        text: [
          { text: "These Counters are available to all players all the time." },
        ],
        subRules: [
          {
            title: "Counter Attack",
            slug: "COUNTER-ATTACK",
            text: [
              {
                text: "Attack the target with your currently equipped weapon or magic. The attack deals half your base damage rounded down.",
              },
            ],
          },
          {
            title: "Dive Roll",
            slug: "DIVE-ROLL",
            text: [
              {
                text: "Move up to half your Speed without triggering Counters.",
              },
            ],
          },
        ],
      },
      {
        slug: "MOVING-COMBAT",
        title: "Moving in Combat",
        ruleType: "RULE",
        text: [
          {
            text: "In addition to an action, you can move during your turn in combat, moving up to your Speed in any direction. You can move at any point during your turn, and can split your move before and after your action.",
          },
          {
            type: "EG",
            text: "You move 10 ft. Make an Attack and then move another 20 ft. If you move away from an enemy, they get a chance to make a counter attack against you as you try to slip by.",
          },
        ],
      },
      {
        slug: "TAKING-DMG",
        title: "Taking Damage",
        ruleType: "RULE",
        text: [
          {
            text: "When you take damage, you can lose your Health or your Stamina. At least 1 damage must be directed to Health, the rest can be directed to Health or Stamina. You cannot go below 0 Health or Stamina.",
          },
        ],
      },
    ],
  },
  {
    slug: "EQUIPMENT",
    title: "Weapons, Shields, Armor & Equipment",
    shortTitle: "Equipment",
    ruleType: "RULE",
    text: [],
    subRules: [
      {
        slug: "WEAPONS",
        title: "Weapons",
        ruleType: "RULE",
        text: [
          {
            text: "Characters can be proficient in different groups of weapons. It is up to your GMs discretion what category a weapon falls into, or if it is a unique weapon that requires its own training.",
          },
          {
            text: "If a weapon requires two hands to wield or you are wielding a weapon in each hand, increase your base damage while wielding the weapon by one dice step.",
          },
          { text: "1d4 - 1d6 - 1d8 - 1d10 - 1d12 - 2d6 - 2d8 - etc." },
        ],
        subRules: [
          {
            title: "Melee",
            slug: "MELEE-WEAPONS",
            ruleType: "LIST",
            list: [
              "Hammers & Clubs",
              "Slashing Swords",
              "Piercing Swords & Daggers",
              "Axes",
              "Flails, Ball & Chain, etc.",
            ],
          },
          {
            title: "Ranged",
            slug: "RANGED-WEAPONS",
            ruleType: "LIST",
            list: [
              "Bows",
              "Crossbows",
              "Light Throwing weapons (Dart, Throwing Dagger)",
              "Heavy Throwing weapons (Shotput, Heavy Spear)",
            ],
          },
          {
            title: "Special Weapons",
            slug: "SPECIAL-WEAPONS",
            ruleType: "LIST",
            list: ["Whips: Range: 10-20ft", "Pole Weapons: Range: Melee-10ft"],
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
          },
          {
            text: "Shields not only increase your armor, can also reduce your damage taken when you clash. They cannot reduce the damage taken below 1.",
          },
        ],
        subRules: [
          {
            title: "Light Shields",
            slug: "LIGHT-SHIELDS",
            text: [
              {
                text: "Require at least 3 Agility: +1 to Armor and reduce clash damage taken by your Agility.",
              },
            ],
          },
          {
            title: "Medium Shields",
            slug: "MEDIUM-SHIELDS",
            text: [
              {
                text: "Require at least 1 Agility and 1 Mettle: +2 to Armor and reduce clash damage taken by 2.",
              },
            ],
          },
          {
            title: "Heavy Shields",
            slug: "HEAVY-SHIELDS",
            text: [
              {
                text: "Require at least 3 mettle: +2 to Armor reduce clash damage taken by Mettle.",
              },
            ],
          },
        ],
      },
      {
        title: "Armor",
        slug: "ARMOR",
        ruleType: "LISTCOMPACT",
        text: [
          {
            text: "You can wear armor from any class you are trained in that you are trained in. Armors have different requirements based on how hard they are to move in and how much protection they provide. Each armor indicates how to calculate your armor while waring it.",
          },
        ],
        subRules: [
          {
            title: "No Armor",
            slug: "NO-ARMOR",
            text: [{ text: "10 + Agility" }],
          },
          {
            title: "Light Armor",
            slug: "LIGHT-ARMOR",
            text: [{ text: "12 + Agility" }],
          },
          {
            title: "Medium Armor",
            slug: "MEDIUM-ARMOR",
            text: [{ text: "14 + Agility(Max 2)" }],
          },
          {
            title: "Heavy Armor",
            slug: "HEAVY ARMOR",
            text: [{ text: "17" }],
          },
        ],
      },
      {
        title: "Equipment",
        slug: "EQUIPMENT",
        text: [
          {
            text: "While traveling, it's assumed your pack has all the items you need to get through a normal day. This might include a bed roll, some rope, etc. For specific adventuring gear, if you haven't already established that you have the item, you can make a luck test. The pass/fail are determined by the GMs judgment of the likelihood of you having the item. A mixed result might mean an item that is similar enough to be used in this instance, like a bed sheet instead of rope, or inferior to what you want, a small hatchet instead of a wood splitting axe.",
          },
        ],
        ruleType: "RULE",
        subRules: [
          {
            title: "General Difficulty Guidelines",
            slug: "DIFFICULTY-GUIDELINES",
            text: [
              { text: "Likely - Pass: 10 Fail: 5" },
              { text: "Unlikely - Pass: 15 Fail: 10" },
              { text: "Very Unlikely - Pass: 18 Fail: 13" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "EDL",
    title: "Exhausted, Dying, & Last Stand",
    shortTitle: "Dying & Last Stand",
    ruleType: "RULE",
    text: [
      {
        text: "If damage would reduce you to below 0 stamina or 0 health, it reduces you to 0 instead.",
      },
    ],
    subRules: [
      {
        slug: "EXHAUSTED",
        title: "Exhausted",
        ruleType: "RULE",
        text: [
          {
            text: "When your Stamina is reduced to 0 you are Exhausted. See statuses for more info.",
          },
        ],
      },
      {
        slug: "DYING",
        title: "Dying",
        ruleType: "RULE",
        text: [
          {
            text: "When your Health is reduced to 0, you have been mortally wounded and are Dying. Taking an Action or moving more than half your speed costs 1 stamina. An ally can use the Help Action to aid you, removing the stamina cost as long as they stay within 5ft of you.",
          },
        ],
      },
      {
        slug: "LAST-STAND",
        title: "Last Stand",
        ruleType: "RULE",
        text: [
          {
            text: "When your Health is reduced to 0 you can opt to make a Last Stand, pushing yourself to the absolute limit, knowing these will be your final moments. For the next minute, you cannot regain Health in any way. You immediately and the start of each round of combat regain all of your stamina. If you are reduced to 0 Stamina or at the end of the 1 minute, you die.",
          },
        ],
      },
      {
        slug: "DEATH",
        title: "Death",
        ruleType: "RULE",
        text: [
          {
            text: "When you have 0 Health & 0 Stamina you are dead and your soul begins to leave your body, making the long journey to The Tribunal and the lands beyond. Only magical resuscitation can bring you back.",
          },
        ],
      },
    ],
  },
  {
    slug: "NON-MAGICAL-HEALING",
    title: "Healing",
    ruleType: "RULE",
    text: [{ text: "Healing cannot affect dead creatures." }],
    subRules: [
      {
        slug: "HEALING-DYING-ALLY",
        title: "Healing a Dying Ally",
        ruleType: "RULE",
        text: [
          {
            text: "If an ally is at 0 health, you can use an action to attempt to heal them. Make an Intellect test, Pass: 15, Fail: 10. On a pass they regain 1 Health, on a fail they lose 1 Stamina.",
          },
        ],
      },
      {
        slug: "HEALING-WHEN-CATCHING-YOUR-BREATH",
        title: "Healing when Catching Your Breath",
        ruleType: "RULE",
        text: [
          {
            text: "When you Catch Your Breath, you patch up and tend to any non life threatening injuries.\nIf you Catch Your Breath and are at 0 Health, you regain 1 Health.",
          },
        ],
      },
    ],
  },
  {
    slug: "MOVEMENT",
    title: "Movement",
    ruleType: "RULE",
    text: [],
    subRules: [
      {
        slug: "OVERLAND-TRAVEL",
        title: "Overland Travel",
        ruleType: "RULE",
        text: [{ text: "A full days march assumes 8 hours of marching." }],
        subRules: [
          {
            title: "Comfortable Marching Pace",
            slug: "COMFORTABLE-MARCH",
            ruleType: "RULE",
            text: [
              {
                text: "15 + Mettle miles per day along an established road. The speed is halved when traveling without a road.",
              },
            ],
          },
          {
            title: "Pushing the Pace",
            slug: "PUSHING-PACE",
            ruleType: "RULE",
            text: [
              {
                text: "You can push the pace of march. Spend 1 stamina to travel 1 additional mile that day.",
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
              },
            ],
          },
        ],
      },
      {
        slug: "JUMP",
        title: "Jumping",
        ruleType: "LIST",
        text: [
          {
            text: "When jumping use these formulas to calculate the minimum distances you can go. If you are trying to jump further, test your mettle. The difficulty is equal to 10+1 per foot beyond your standard jump range. If you roll below a success, you can spend stamina to increase your roll up to the point of a success if you have the stamina to spend.",
          },
        ],
        subRules: [
          {
            title: "Running Leap",
            slug: "RUNNING-LEAP",
            ruleType: "RULE",
            text: [
              {
                text: "If you move up to 10ft before jumping: (4 + 2*Mettle) ft horizontally (Min 2ft)",
              },
            ],
          },
          {
            title: "Standing Leap",
            slug: "STANDING-LEAP",
            ruleType: "RULE",
            text: [{ text: "(3 + Mettle) ft horizontally (Min 1ft)" }],
          },
          {
            title: "High Jump",
            slug: "HIGH-JUMP",
            ruleType: "RULE",
            text: [{ text: "(1 + Mettle) ft vertically (Min 1ft)" }],
          },
        ],
      },
      {
        slug: "FALL",
        title: "Falling",
        ruleType: "RULE",
        text: [
          {
            text: "When you fall from a height greater than 10 ft. Make an Agility test. Pass - 12, Fail - 7. For every 5 ft. past 10 ft. the difficulty increases by 2. On a pass you take no damage. On a fail you take 1d10 per 5 ft. On a Mixed you take half damage.",
          },
        ],
      },
    ],
  },
  {
    slug: "LIFT-DRAG-PACK",
    title: "Lift, Drag, & Pack",
    ruleType: "RULE",
    text: [
      {
        text: "Your Lift, Drag & Pack (how much you can carry in your backpack and on your person) are all effected by your size. For each size below Medium, amounts are halved, and for each size above Medium they are doubled.",
      },
      {
        text: "Using both hands, you can lift up to 50+10x your Mettle pounds.",
      },
      { text: "You can drag up to 4x your lifting capacity." },
      { text: "You can pack up to 30+5x your Mettle pounds." },
    ],
  },
  {
    slug: "GEAR",
    title: "Gear",
    ruleType: "RULE",
    subRules: [
      {
        title: "Supplies",
        slug: "SUPPLIES",
        text: [
          {
            text: "While traveling, it's assumed your pack has all the items you need to get through a normal day. This might include a bed roll, some rope, flint and tinder, etc. For more uncommon gear, if you haven't already established that you have the item, you can Test your Luck. The pass/fail are determined by the GMs judgment of the likelihood of you having the item. A mixed result might mean an item that is similar enough to be used in this instance, like a bed sheet instead of rope, or inferior to what you want, a small hatchet instead of a wood splitting ax.",
          },
        ],
        list: [
          "Likely - Pass (10), Fail (5)",
          "Unlikely - Pass (15), Fail (10)",
          "Very Unlikely - Pass (18), Fail (13)",
        ],
      },
      {
        title: "Notable Items",
        slug: "NOTABLE-ITEMS",
        ruleType: "RULE",
        text: [
          {
            text: "A notable item is an item that is valuable and worth keeping track of. Some items will be obviously notable, like The Great Sword of the Duck Lord, but some items will depend on your GM. If you are playing a very resource limited, survival focused game, maybe your arrows are notable items, but if you're playing a heroic fantasy story, then maybe they aren't. This should be coved by your GM as part of the Intro session.",
          },
        ],
      },
    ],
  },
  {
    slug: "STARTING_GEAR",
    title: "Starting Equipment",
    text: [
      {
        text: "Your character starts with a pack full of gear and the equipment they need for their adventures. The exact contents will vary from character to character and from campaign to campaign, but generally you have a light source, rope, a comfortable way to sleep, and some weather protection.",
      },
      {
        text: "If you have training or experience with equipment, you have the equipment to use that training, if it's portable. You might have one or two melee weapons and one or two ranged weapons from your class, a set of dice from your culture and some artisans tools from your novice feature. The exact items should be discussed with your GM during your intro session.",
      },
    ],
    subRules: [
      {
        title: "Starting Coin",
        slug: "STARTING-COIN",
        text: [{ text: "You start with 5 Coin." }],
      },
    ],
  },
  {
    slug: "REFERENCE",
    title: "Reference",
    ruleType: "RULE",
    text: [],
    subRules: [
      {
        title: "Languages",
        slug: "LANGUAGES",
        text: [],
        ruleType: "LISTCOMPACT",
        subRules: [
          {
            title: "Allspeak",
            slug: "ALLSPEAK",
            text: [
              {
                text: "The universal language known by most civilized peoples, it is a harmonious blend of words and expressions drawn from various cultures, offering a common ground for communication.",
              },
            ],
          },
          {
            title: "Elvish",
            slug: "ELVISH",
            text: [
              {
                text: "The common language of elves, spoken with a grace and intertwined lyrical tones.",
              },
            ],
          },
          {
            title: "Dwarvish",
            slug: "DWARVISH",
            text: [
              {
                text: "The language of dwarves and others who share their culture. Dwarvish is a robust and resonant tongue, usually spoken loud enough to be heard over the rhythmic clinks of hammers and chisels.",
              },
            ],
          },
          {
            title: "Thistletongue",
            slug: "THISTLETONGUE",
            text: [
              {
                text: "The language of faeries and other fae folk. Thistletongue is ethereal, filled with delicate trills and melodic nuances.",
              },
            ],
          },
          {
            title: "Starrend",
            slug: "STARREND",
            text: [
              {
                text: "The language of celestials as well as some air elementals and other sky dwellers. Starrend is a celestial tongue, each word carrying the weight of cosmic forces, and is characterized by crystalline tones and etherial echoes.",
              },
            ],
          },
          {
            title: "Deeproot",
            slug: "DEEPROOT",
            text: [
              {
                text: "The language of Ents and Stone Colossi. It's a deep and slow language for deep and slow creatures. Deeproot rumbles like the earth, each word a deliberate and ancient utterance resonating with the solidity of stone.",
              },
            ],
          },
          {
            title: "Seawhisper",
            slug: "SEAWHISPER",
            text: [
              {
                text: "A fluid and melodic language spoken by merfolk and other denizens of the ocean. Seawhisper uses clicks and sharp bursts of noise and can only properly be spoken under water.",
              },
            ],
          },
          {
            title: "Voidhowl",
            slug: "VOIDHOWL",
            text: [
              {
                text: "Spoken by demons and other infernal beings.  Voidhowl is a cacophony of malevolent sounds, mixing guttural growling and ear-splitting shrieks.",
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
            text: "Bludgeoning, piercing, slashing, fire, cold, lightning, rot, radiant, & psychic",
          },
        ],
      },
      {
        title: "Statuses",
        slug: "STATUSES",
        text: [],
        ruleType: "LISTCOMPACT",
        subRules: [
          {
            title: "Incapacitated",
            slug: "INCAPACITATED-STATUS",
            text: [
              {
                text: "You cannot take actions or move and are unaware of your surroundings.",
              },
            ],
          },
          {
            title: "Dying",
            slug: "DYING-STATUS",
            text: [
              {
                text: "0 Health. See the [Dead & Dying rules](/rules/player_rules#EDL) for more information.",
              },
            ],
          },
          {
            title: "Dead",
            slug: "DEAD-STATUS",
            text: [
              {
                text: "0 Health and 0 Stamina. See the [Dead & Dying rules](/rules/player_rules#EDL) for more information.",
              },
            ],
          },
          {
            title: "Blind",
            slug: "BLIND-STATUS",
            text: [
              {
                text: "You cannot see. All attacks have misfortune and attacks against you gain fortune's favor.",
              },
            ],
          },
          {
            title: "Deaf",
            slug: "DEAF-STATUS",
            text: [
              {
                text: "You cannot hear. You have Misfortune on all tests to stealth or notice something sneaking up on you.",
              },
            ],
          },
          {
            title: "Entangled",
            slug: "ENTANGLED-STATUS",
            text: [{ text: "Your speed is reduced to 0." }],
          },
          {
            title: "Pinned",
            slug: "PINNED-STATUS",
            text: [
              {
                text: "Your speed is reduced to 0, you have Misfortune on all attacks and spellcasting Tests.",
              },
            ],
          },
          {
            title: "Exhausted",
            slug: "EXHAUSTED-STATUS",
            text: [
              {
                text: "You cannot spend Stamina, your Speed is reduced by half and your attacks deal half damage.",
              },
            ],
          },
          {
            title: "Hidden",
            slug: "HIDDEN-STATUS",
            text: [
              {
                text: "You cannot be seen and gain a +5 to attack Tests while hidden. Attacking, casting magic, or performing another noticeable act while hidden immediately triggers a Heart test  to spot you from any nearby creatures.",
              },
            ],
          },
          {
            title: "Prone",
            slug: "PRONE-STATUS",
            text: [
              {
                text: "Your speed is reduced by 20ft to a minimum of 5ft. Ranged attacks against you have Misfortune while melee attacks have Fortune's Favor.",
              },
            ],
          },
          {
            title: "Slowed",
            slug: "SLOWED-STATUS",
            text: [{ text: "Your speed is halved." }],
          },
        ],
      },
      {
        title: "Creature Sizes",
        slug: "SIZES",
        text: [],
        ruleType: "LISTCOMPACT",
        list: [
          "Miniscule(>6in)",
          "Tiny (~6in - 2ft)",
          "Small (~2ft - 4ft)",
          "Medium (~4ft - 7ft)",
          "Large (~7ft- 10ft)",
          "Gigantic (~10ft - 20ft)",
          "Titanic (~20ft-50ft)",
          "Colossal (<50ft)",
        ],
      },
      {
        title: "Currency",
        slug: "CURRENCY",
        ruleType: "RULE",
        text: [
          {
            text: "Coin: The universal currency. Different places might have different versions, but everyone trades in Coin.",
          },
          {
            text: "Bits: Something that costs Bits isn't expensive enough to be worth worrying about.",
          },
          {
            text: "Whether something is worth Coin or Bits comes down to the GMs discretion. Generally something that is going to help the player or they should feel the cost should cost Coin. But something that's just flavor, or part of normal everyday life should be Bits. Grabbing a bite to eat and some drinks with the party at the local inn. That costs Bits. Buying a round and plying a patron for information. That's going to cost a Coin or Two. A dress to get you into the royal ball. That's going to be more Coin.",
          },
        ],
      },
    ],
  },
];
export default generalRules;
