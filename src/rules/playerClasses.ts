import { CharacterClass } from "../schema/types.generated";

export const playerClasses: CharacterClass[] = [
    {
        title: "Brawler",
        slug: "BRAWLER",
        description: [ "The brawler is a master of close-quarters combat, relying on unmatched agility, mettle, and strategic counterattacks to prevail in the heat of battle."],
        complexity: "STANDARD",
        health: 20,
        healthOnLevel: 2,
        staminaStat: "METTLE",
        stamina: 6,
        staminaOnLevel: 2,
        training: {
            armor: null,
            shields: null,
            weapons: {melee: {options:["unarmed", "improvised"]}, ranged: {options: ["improvised"]}, special: null},
            magic: null
        },
        attackStat: ["METTLE", "AGILITY"],
        range: {min: 0, max: 40},
        damage: {dice: 10, count: 1, stat: "METTLE"},
        features: [
          {
            
              level: 1,
            title: "Fighting Style",
            slug: "BRAWLER-STYLE",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [{
              type: "RULE",
              text: "Select either Mettle or Agility for your Attack Stat. Selecting Agility doubles your Base Attack Range."
            }]

          },
          {
            
              level: 1,
            title: "Muscle Bound Body",
            slug: "BRAWLER-MBB",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [{
                type: "RULE",
                text: "When you are not wearing armor, you can calculate your Armor as 10+Mettle+Agility (max of 2)"       
            },
            {
                type: "FLAVOR",
                text: "Your years of training and fighting have honed your body to take blows that would have felled a lesser being."
            }]
        },
        {
            
              level: 1,
            title: "Tag Team",
            slug: "BRAWLER-TT",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [{
                type: "RULE",
                text: "When you succeed in a melee attack test, you can move the enemy up to 5ft into melee range of an ally or swap places with it if you can move. If that ally attacks the enemy before the start of the next round of combat, they have Fortune's Favor for that attack."
            },
            {
                type: "FLAVOR",
                text: "Teamwork is the greatest weapon. You know just how to set the stage for your allies to attack."
            }]
        },
        {
            
              level: 2,
            title: "Bravado",
            slug: "BRAWLER-BRAVADO",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [{
                type: "RULE",
                text: "When trying to intimidate an enemy, add your mettle in addition to any other bonuses to the test."
            },
            {
                type: "FLAVOR",
                text: "Intimidation is as easy as breathing for you."
            }]
        },
        {
            
              level: 2,
            title: "Counter Puncher",
            slug: "BRAWLER-COUNTER",
            staminaCost: 1,
            costsFortunesFavor: false,
            text: [{
                type: "RULE",
                text: "When you make a counter attack, you can spend 1 stamina to remove the counter attack damage penalty, allowing you to deal your base damage on this counter attack."
            },
            {
                type: "FLAVOR",
                text: "If an enemy is foolish enough to open themselves up to your counter attacks, you make sure they pay the price."
            }]
        },
        {
            
              level: 3,
            title: "Mix It Up",
            slug: "BRAWLER-MIU",
            staminaCost: 0,
            costsFortunesFavor: true,
            text: [{
                type: "RULE",
                text: "If you are attacking an enemy you did not attack last turn you can spend Fortune's Favor before the attack to double your base damage if you hit."
            },
            {
                type: "FLAVOR",
                text: "Always striking a single enemy is boring and predictable. Mix it up by attacking different enemies."
            }]
        },
        {
            
              level: 4,
            title: "Stat Up",
            slug: "BRAWLER-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
            {
                type: "RULE",
                text: "Increase one of your stats by 1 (max 5)"
            },
            {
                type: "RULE",
                text: "Select a new Novice Feature."
            }]
        },
        {
            
              level: 5,
            title: "Signature Move",
            slug: "BRAWLER-SIGNATURE-MOVE",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                text: "Select a Signature Move from the list below.",
                type: "RULE"
              }
            ],
            choices: [
              {
                title: "Spinning Lariat",
                slug: "BRAWLER-SL",
                staminaCost: 1,
                costsFortunesFavor: false,
                actionType: "ACTION",
                text:[{
                    type: "RULE",
                    text: "Spend 1 Stamina plus 1 Stamina per enemy within melee range of you. Make an AOE Attack that deals your base damage against all enemies within melee range of you."
                }],
              },
              {
                title: "Crippling Strke",
                slug: "BRAWLER-CS",
                staminaCost: 2,
                costsFortunesFavor: false,
                actionType: "ACTION",
                text:[{
                    type: "RULE",
                    text: "Spend 2 Stamina plus 1 for each size larger than you the enemy is. When you hit an enemy with a melee attack, reduce the damage done by their attacks by half and reduce their speed to 0 until the end of this round."
                }]
              },
              {
                title: "Top Rope Takedown",
                slug: "BRAWLER-TRT",
                staminaCost: 1,
                costsFortunesFavor: false,
                actionType: "ACTION",
                text:[{
                    type: "RULE",
                    text: "Requires an ally or sturdy object within 5' of the target to jump off of."
                },
                {
                  type: "RULE",
                  text: "Spend 1 Stamina to attempt to knock the target prone with your next attack. You and your target make opposed tests based on your Attack Stat. If you succeed, you knock them prone."
                }]
              },
              {
                title: "Counter Throw",
                slug: "BRAWLER-CT",
                staminaCost: 1,
                costsFortunesFavor: false,
                actionType: "COUNTER",
                text:[{
                    type: "RULE",
                    text: "When you counter an enemy, spend 1 stamina + 1 per size category the target is larger than you. If you do, you move the enemy up to 15 ft."
                }]
              },
            ]
            
        },
        {
            
              level: 6,
            title: "Slab of Beef",
            slug: "BRAWLER-SB",
            staminaCost: 0,
            costsFortunesFavor: true,
            text: [{
                type: "RULE",
                text: "Spend Fortune's Favor, halve all damage taken until the start your next turn."
            },
            {
                type: "FLAVOR",
                text: "Your incredibly beefy body can deflect blows just by flexing your muscles."
            }]
        },
        {
            
              level: 7,
            title: "Running on Pure Adrenaline",
            slug: "BRAWLER-RPA",
            staminaCost: 0,
            costsFortunesFavor: false,
            text:[{
                type: "RULE",
                text: "While making a Last Stand, double your lift, carry and drag amounts, gain Fortune's Favor on all Mettle Tests and double your jump distance."
            }]
        },
        {
            
              level: 8,
            title: "Stat Up 2",
            slug: "BRAWLER-SU2",
            staminaCost: 0,
            costsFortunesFavor: false,
            text:[
            {
                type: "RULE",
                text: "Increase one of your stats by 1 (max 5)"
            },
            {
                type: "RULE",
                text: "Select a Veteran Feature"
            }]
        }]
    },
    {
        title: "Devoted",
        slug: "DEVOTED",
        description: [ "Your reverence and constant spread of your gods holy words has earned you their favor which you use to perform greater deeds in their name."],
        complexity: "COMPLEX",
        health: 14,
        healthOnLevel: 2,
        staminaStat: "HEART",
        stamina: 6,
        staminaOnLevel: 2,
        training: {
          armor: null,
          shields: null,
          weapons: {melee: null, ranged: null, special: null},
          magic: {options:["Divine"]}
        },
        attackStat: ["HEART"],
        range: {min: 0, max: 60},
        damage: {dice: 6, count: 1, stat: "HEART"},
        features: [
          {
            
              level: 1,
            title: "Spellcasting",
            slug: "DEVOTED-SPELLCASTING",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Learning Spells: Start with Heart spells known from the Divine list. You can only learn spells that are less than or equal to your current level. When you level up, learn 1 additional spell."
              },
              {
                type: "RULE",
                text: "Casting Spells: To cast a spell you spend stamina equal to the spell's level while using your Holy Symbol."
              }
            ]
          },
          {
            
              level: 1,
            title: "Holy Symbol",
            slug: "DEVOTED-HS",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "You need a holy symbol to cast your divine spells. You require one hand either holding your holy symbol or free to cast."
              },
              {
                type: "FLAVOR",
                text: "E.g., if you are using a staff, you have to be holding it in one hand or if you have a tattoo on the back of your hand, then you can't have anything in that hand to cast."
              }
            ]
          },
          {
            
              level: 1,
            title: "I've Studied the Word",
            slug: "DEVOTED-SW",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Gain a +3 on Intellect tests to recall specific bits of history or religious information."
              },
              {
                type: "FLAVOR",
                text: "Your years of study and devotion have granted you deep knowledge of historical and religious facts."
              }
            ]
          },
          {
            
              level: 2,
            title: "Rapid Recuperation",
            slug: "DEVOTED-RR",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "3 charges, when you Catch Your Breath, you can expend a charge, you and up to 5 allies regain Health equal to your Heart. You regain all charges when you Rest & Recuperate"
              }
            ]
          },
          {
            
              level: 3,
            title: "Reading the Signs",
            slug: "DEVOTED-RS",
            staminaCost: 1,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Spend 1 stamina and 10 minutes in deep meditation or praying on a solution to an issue to gain Fortune's Favor on the next Test to resolve the issue."
              }
            ]
          },
          {
            
              level: 3,
            title: "Minor Intervention",
            slug: "DEVOTED-MI",
            staminaCost: 0,
            costsFortunesFavor: true,
            text: [
              {
                type: "RULE",
                text: "Once a day you can spend Fortune's Favor to improve yours or your allies Test results. Turning a Failure to a Mixed or a Mixed to a Success. You can do this after the dice are rolled but before consequences are applied."
              }
            ]
          },
          {
            
              level: 4,
            title: "Stat Up",
            slug: "DEVOTED-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Increase one of your stats by 1 (max 5)"
              },
              {
                type: "RULE",
                text: "Select a new Novice Feature."
              }
            ]
          },
          {
            
              level: 5,
            title: "Shepherd of the Word",
            slug: "DEVOTED-SW",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "FLAVOR",
                text: "You act as a conduit for the word of your god and you know how to gather others to your cause."
              },
              {
                type: "RULE",
                text: "Add a +3 to tests to persuade others to follow your god's tenets."
              }
            ]
          },
          {
            
              level: 6,
            title: "Martyr",
            slug: "DEVOTED-M",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "FLAVOR",
                text: "Before you die, you make yourself a holy martyr seeking the final praise of your god."
              },
              {
                type: "RULE",
                text: "When you use your Last Stand, you can cast 2 spells per action, and increase your base damage by 1 dice step."
              }
            ]
          },
          {
            
              level: 7,
            title: "Divine Inspiration",
            slug: "DEVOTED-DI",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "3 times per adventure, cast a spell without spending stamina. Any additional effects of the spell that require stamina still require you to spend stamina."
              }
            ]
          },
          {
            
              level: 8,
            title: "Stat Up 2",
            slug: "DEVOTED-SU2",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Increase a stat by 1 (max 5)"
              },
              {
                type: "RULE",
                text: "Select a Veteran Feature."
              }
            ]
          }
        ]
      },
      {
        title: "Elementalist",
        slug: "ELEMENTALIST",
        description: [ "An elemental magic user who uses their mastery over their chosen elements to defeat their enemies."],
        complexity: "SIMPLE",
        health: 10,
        healthOnLevel: 2,
        staminaStat: "INTELLECT",
        stamina: 6,
        staminaOnLevel: 2,
        training: {
            armor: null,
            shields: null,
            weapons: {melee: null, ranged: null, special: null},
            magic: {pick: 1, options:["fire","cold","lightning", "rot", "psychic"]}
        },
        attackStat: ["INTELLECT"],
        range: {min: 0, max: 80},
        damage: {dice: 6, count: 1, stat: "INTELLECT"},
        features: [{
            
              level: 1,
            title: "Elemental Adept",
            slug: "ELEM-EA",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [{
                type: "RULE",
                text: "You can summon forth your chosen magic to perform minor tasks and tricks as are reasonable for your element."   
            },
            {
                type: "EG",
                text: "You can summon flames to start a fire or shed light, or use psychic powers to pull a book from the shelves. Your base damage is also based on your element."
            }]
        },
        {
            
              level: 1,
            title: "Elemental Burst",
            slug: "ELEM-EB",
            staminaCost: 1,
            costsFortunesFavor: false,
            actionType: "ACTION",
            text: [{
                type: "FLAVOR",
                text: "A burst of elemental energy surrounds you, warding off nearby foes."       
            },
            {
                type: "RULE",
                text: "Attack all creatures within 5ft of you. Dealing base damage to those you hit."
            }]
        },
        {
            
              level: 2,
            title: "Enhance",
            slug: "ELEM-ENHANCE",
            staminaCost: 1,
            costsFortunesFavor: false,
            text: [{
                type: "FLAVOR",
                text: "Surround yourself or an ally with your element, bolstering their natural abilities."       
            },
            {
                type: "RULE",
                text: "Select yourself or an ally you can see within 30ft of you, add your intellect to the next Mettle or Agility test they make. If you have fortunes favor, you can spend it to double the bonus Enhance provides."
            }]
        },
        {
            level: 3,
            title: "Focused Training",
            slug: "ELEM-FT",
            staminaCost: 0,
            costsFortunesFavor: false,
            ruleType: "CHOICE",
            text: [{
                type: "RULE",
                text: "Pick one of the following options to enhance yourself"       
            }],
            choices: [
                {title: "Elemental Armor", slug:"ELEM-ARMOR", text: [{text: "Add your Intellect to your armor and take half damage from your chosen element."}]},
                {title: "Bolt Thrower", slug: "ELEM-BOLT-THROWER", text: [{text:"Increase your base attack range by 30ft"}]},
                {title: "Bigger Burst", slug: "ELEM-BIGGER-BURST", text: [{text: "Increase the size of your burst to all creatures within 10ft of you."}]}
            ]
        },
        {
            
              level: 4,
            title: "Stat Up",
            slug: "ELEM-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
            {
                type: "RULE",
                text: "Increase one of your stats by 1 (max 5)"
            },
            {
                type: "RULE",
                text: "Select a new Novice Feature."
            }]
        },
        {
            
              level: 5,
            title: "Twin Attack",
            slug: "ELEM-TA",
            staminaCost: 2,
            costsFortunesFavor: false,
            text: [
            {
                type: "RULE",
                text: "Spend 2 Stamina, you can target two different creatures or the same creature twice with your attack."
            }]
        },
        {
            
              level: 5,
            title: "Overcharge",
            slug: "ELEM-OVERCHARGE",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
            {
                type: "RULE",
                text: "When you take damage of your elemental type, increase your base damage by 2 dice steps the next time you deal elemental damage."
            }]
        },
        {
            
              level: 6,
            title: "Power Overwhelming",
            slug: "ELEM-PO",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
            {
                type: "RULE",
                text: "During your last stand you can choose to end it early and die. If you choose to do so, make a final 30ft radius attack. The attack deals 3 times your base damage dice to those who it hits, and half damage to all who you either clash or miss. Using this ability kills you."
            }]
        },
        {
            
              level: 7,
            title: "Bursting Shot",
            slug: "ElemBS",
            staminaCost: 0,
            costsFortunesFavor: true,
            text: [
            {
                type: "RULE",
                text: "You can spend your Fortune's Favor when you make a magic attack. If the attack hits, all enemies within 5ft of the target take half as much damage."
            }]
        },
        {
            
              level: 8,
            title: "Stat Up 2",
            slug: "ELEM-SU2",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
            {
                type: "RULE",
                text: "Increase one of your stats by 1 (max 5)"
            },
            {
                type: "RULE",
                text: "Select a Veteran Feature"
            }]
        }]
    },
    {
        title: "Knight",
        slug: "KNIGHT",
        complexity: "SIMPLE",
        description: ["An honorable fighter heavily armed and armored against the evils of the world."],
        health: 18,
        healthOnLevel: 2,
        staminaStat: "METTLE",
        stamina: 6,
        staminaOnLevel: 2,
        training: {
            armor: ["Light", "Medium", "Heavy"],
            shields: ["Light", "Medium", "Heavy"],
            weapons: {melee: {pick: 2, options: ["Hammers & Clubs", "Slashing Swords", "Piercing Swords & Daggers", "Axes", "Flails"]}, ranged: {pick: 2, options:["Heavy Throwing", "Light Throwing", "Bows", "Crossbows"]}, special: null},
            magic: null
        },
        attackStat: ["METTLE"],
        range: {min: 0, max: 120},
        damage: {dice: 10, count: 1, stat: "METTLE"},
        features: [
        {
            
              level: 1,
            title: "Driving Attack",
            slug: "KNIGHT-DA",
            staminaCost: 1,
            costsFortunesFavor: false,
            text: [{
                type: "FLAVOR",
                text: "Your flurry of attacks drive the enemy back."       
            },
            {
                type: "RULE",
                text: "When you make an attack action you may spend 1 stamina to attempt to also drive your enemy back 5ft. On a Mix, you chose whether to damage or move the creature back. On a Success, you can do both.\nIf you chose to move a creature, they can opt to instead take an extra base attacks worth of damage to avoid being moved."
            }]
        },
        {
            
              level: 1,
            title: "Sweeping Attack",
            slug: "KNIGHT-SA",
            staminaCost: 1,
            costsFortunesFavor: false,
            text: [{
                type: "FLAVOR",
                text: "You sweep your attacks, aiming to harm all who stand in your way."       
            },
            {
                type: "RULE",
                text: "When you take an attack action with a melee weapon, you may spend 1 stamina to attempt to also attack enemies adjacent to your target and within your weapons reach."
            }]
        },
        {
            
              level: 2,
            title: "Vow",
            slug: "KNIGHT-VOW",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [{
                type: "FLAVOR",
                text: "Your word is your bond, those who recognize your station believe you when you speak truth."       
            },
            {
                type: "RULE",
                text: "When you take a Heart test to convince someone of true information, you gain a +3 on the test."
            }]
        },
        {
            
              level: 3,
            title: "Intercept",
            slug: "KNIGHT-INTERCEPT",
            staminaCost: 1,
            costsFortunesFavor: false,
            text: [{
                type: "FLAVOR",
                text: "You swiftly step between your ally and danger."       
            },
            {
                type: "RULE",
                text: "When an ally within 5ft of you would be hit by an attack or counter, you can spend 1 stamina to switch places with your ally, taking the hit for them."
            }]
        },
        {
            
              level: 4,
            title: "Stat Up",
            slug: "KNIGHT-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
            {
                type: "RULE",
                text: "Increase one of your stats by 1 (max 5)"
            },
            {
                type: "RULE",
                text: "Select a new Novice Feature."
            }]
        },
        {
            
              level: 5,
            title: "Unstoppable",
            slug: "KnightU",
            staminaCost: 0,
            costsFortunesFavor: true,
            text: [{
                type: "RULE",
                text: "Spend Fortune's Favor, until the end of your next turn, your speed cannot be reduced below half your base speed."
            }]
        },
        {
            
              level: 6,
            title: "No Retreat, No Surrender",
            slug: "KNIGHT-NR-NS",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [{
                type: "FLAVOR",
                text: "You never run from a fight and don’t stop until your enemies are dead."       
            },
            {
                type: "RULE",
                text: "If you attack the same creature you attacked last turn and did not willingly get further away from them, increase your Base Damage by 1 step."
            }]
        },
        {
            
              level: 6,
            title: "Mounted Combatant",
            slug: "KNIGHT-MC",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [{
                type: "RULE",
                text: "Gain a +3 to tests to control a trained mount."
            }]
        },
        {
            
              level: 7,
            title: "You Won't Be The One To Kill Me",
            slug: "KNIGHT-WONT-KILL-ME",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
            {
                type: "RULE",
                text: "When you make your Last Stand, pick a creature, you are immune to damage from that creature."
            }]
        },
        {
            
              level: 8,
            title: "Stat Up 2",
            slug: "KNIGHT-SU2",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
            {
                type: "RULE",
                text: "Increase one of your stats by 1 (max 5)"
            },
            {
                type: "RULE",
                text: "Select a Veteran Feature"
            }]
        }]
    },
    {
      title: "Maverick",
      slug: "MAVERICK",
      description: [
          "The Maverick is a treasure seeker and risk taker, using an array of skills and a helping of luck to get them into the darkest of dungeons and out of the stickiest of situations."
      ],
      complexity: "STANDARD",
      health: 14,
      healthOnLevel: 2,
      staminaStat: "HEART",
      stamina: 6,
      staminaOnLevel: 2,
      training: {
          armor: ["Light"],
          shields: null,
          weapons: {
              melee: {
                  pick: 2,
                  options: ["melee weapon classes"]
              },
              ranged: {
                  pick: 1,
                  options: ["ranged weapon class"]
              },
              special: {
                options: ["whips"]
              }
          },
          magic: null
      },
      attackStat: ["AGILITY"],
      range: {
          min: 0,
          max: 80
      },
      damage: {
          dice: 8,
          count: 1,
          stat: "AGILITY"
      },
      features: [{
        
        level: 1,
        title: "Keen Intuition",
        slug: "MAVERICK-KI",
        staminaCost: 0,
        costsFortunesFavor: false,
        text: [{
                type: "RULE",
                text: "When you make a test to identify a lie or avoid a trap, add +3 to the roll."
            },
            {
                type: "FLAVOR",
                text: "Years of practice have sharpened your intuition allowing you to sniff out danger and lies with ease."
            }
          ]  
        },
          {
            
              level: 1,
              title: "Whip Expert",
              slug: "MAVERICK-WE",
              staminaCost: 0,
              costsFortunesFavor: false,
              text: [{
                      type: "RULE",
                      text: "You can use your whip to wrap around objects and either pull them to you or pull yourself to them depending on their weight and size."
                  },
                  {
                      type: "FLAVOR",
                      text: "Your mastery of the whip allows you to use it in unexpected and helpful ways including wrapping it around objects and enemies."
                  }
              ]
          },
          {
            
              level: 1,
              title: "Yoink",
              slug: "MAVERICK-YOINK",
              staminaCost: 2,
              costsFortunesFavor: false,
              actionType: "ACTION",
              text: [{
                  type: "RULE",
                  text: "As an action, spend 2 Stamina and make an attack with your whip. On a hit deal damage and if you are at most 1 size smaller than the target, knock them Prone. On a clash, deal half damage and the next attack against them this turn gains Fortune's Favor."
              }]
          },
          {
            
              level: 2,
              title: "Lucky Shot",
              slug: "MAVERICK-LS",
              staminaCost: 0,
              costsFortunesFavor: true,
              text: [{
                  type: "RULE",
                  text: "Before you roll an attack test, you can choose to spend your Fortune's Favor. If you hit with the attack, deal an extra 2d6 damage."
              }]
          },
          {
            
              level: 3,
              title: "Sleight of Hand",
              slug: "MAVERICK-SOH",
              staminaCost: 0,
              costsFortunesFavor: false,
              text: [{
                  type: "RULE",
                  text: "Add +3 to tests to snatch and conceal small items."
              }]
          },
          {
            
              level: 3,
              title: "A Keen Eye for Coin",
              slug: "MAVERICK-KEC",
              staminaCost: 0,
              costsFortunesFavor: false,
              text: [{
                  type: "RULE",
                  text: "You have a good idea how much a relic or art piece is worth, or at least know someone willing to buy it."
              }]
          },
          {
            
              level: 4,
              title: "Stat Up",
              slug: "MAVERICK-SU1",
              staminaCost: 0,
              costsFortunesFavor: false,
              text: [{
                      type: "RULE",
                      text: "Increase one of your stats by 1 (max 5)"
                  },
                  {
                      type: "RULE",
                      text: "Select a new Novice Feature."
                  }
              ]
          },
          {
            
              level: 5,
              title: "Balanced Fighter",
              slug: "MAVERICK-BF",
              staminaCost: 1,
              costsFortunesFavor: false,
              text: [{
                  type: "RULE",
                  text: "When you are wielding a whip and another weapon, when you make a Basic Attack, you may spend 1 Stamina to attack once with each weapon, targeting a different creature with each attack."
              }]
          },
          {
            
              level: 6,
              title: "Luck Runs Out",
              slug: "MAVERICK-LRO",
              staminaCost: 0,
              costsFortunesFavor: false,
              text: [{
                      type: "RULE",
                      text: "When you make your Last Stand, and at the start of each turn while in Last Stand, gain Fortune's Favor."
                  },
                  {
                      type: "FLAVOR",
                      text: "Even the best of us push our luck past its limit."
                  }
              ]
          },
          {
            
              level: 7,
              title: "Flee the Scene",
              slug: "MAVERICK-FTS",
              staminaCost: 3,
              costsFortunesFavor: false,
              text: [{
                  type: "RULE",
                  text: "Spend 3 Stamina to double your speed until the end of your next turn, or 1 minute if not in combat."
              }]
          },
          {
            
              level: 8,
              title: "Stat Up 2",
              slug: "MAVERICK-SU2",
              staminaCost: 0,
              costsFortunesFavor: false,
              text: [{
                      type: "RULE",
                      text: "Increase a stat by 1 (max 5)"
                  },
                  {
                      type: "RULE",
                      text: "Select a Veteran Feature."
                  }
              ]
          }
      ]
  },
    {
        title: "Ranger",
        slug: "RANGER",
        description: [ "A skilled survivalist as well as ranged and melee fighter relying more on quickness and skill than outright strength."],
        complexity: "SIMPLE",
        health: 16,        healthOnLevel: 2,
        staminaStat: "AGILITY",
        stamina: 6,
        staminaOnLevel: 2,
        training: {
          armor: ["Light"],
          shields: null,
          weapons: {melee: {pick: 1, options: ["Axes", "Piercing Swords & Dagers", "Slashing Swords" ]}, ranged: {pick: 2, options:["Bows", "Crossbows", "Light Throwing"]}, special: null},
          magic: null
        },
        attackStat: ["AGILITY"],
        range: {min: 0, max: 120},
        damage: {dice: 8, count: 1, stat: "AGILITY"},
        features: [
          {
            
              level: 1,
            title: "Predator's Sense",
            slug: "RANGER-SENSE",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "FLAVOR",
                text: "You have almost supernaturally heightened senses."
              },
              {
                type: "RULE",
                text: "Gain +3 to tests when tracking as well as on tests to find hidden creatures."
              }
            ]
          },
          {
            
              level: 1,
            title: "Precision of the Hawk",
            slug: "RANGER-PRECISION",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "FLAVOR",
                text: "Your attacks are incredibly accurate, always targeting the weakest points in the target."
              },
              {
                type: "RULE",
                text: "When you roll weapon attack damage, you can reroll any 1s, taking the new result."
              }
            ]
          },
          {
            
              level: 2,
            title: "Cunning Stalker",
            slug: "RANGER-STALKER",
            staminaCost: 1,
            costsFortunesFavor: false,
            text: [
              {
                type: "FLAVOR",
                text: "You have spent countless hours tracking prey through the woods or back alleys and instinctively step lightly and quietly."
              },
              {
                type: "RULE",
                text: "Spend 1 stamina, you leave no tracks, enemies have Misfortune when trying to track you and you get a +2 on stealth tests."
              }
            ]
          },
          {
            
              level: 2,
            title: "Wild Guide",
            slug: "RANGER-GUIDE",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "FLAVOR",
                text: "You move through rough and wild terrain with skill and can guide others along the safest routes with ease."
              },
              {
                type: "RULE",
                text: "Your party can add your Heart to their daily pace when traveling across terrain without roads."
              }
            ]
          },
          {
            
              level: 3,
            title: "Quickdraw Counter",
            slug: "RANGER-QUICK-COUNTER",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "FLAVOR",
                text: "Your weapons are just a hand twitch away."
              },
              {
                type: "RULE",
                text: "When you counterattack, you can use any weapon on your person to make the counter."
              }
            ]
          },
          {
            
              level: 4,
            title: "Stat Up",
            slug: "RANGER-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Increase one of your stats by 1 (max 5)"
              },
              {
                type: "RULE",
                text: "Select a new Novice Feature."
              }
            ]
          },
          {
            
              level: 5,
            title: "Poisoned Blade",
            slug: "RANGER-POISON",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Whenever you Catch Your Breath you can coat one of your weapons in poison. When you deal damage with that weapon, deal an extra 1d4 rot damage."
              }
            ]
          },
          {
            
              level: 6,
            title: "Final Hunt",
            slug: "RANGER-FINAL-HUNT",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "When you make a Last Stand, your speed increases by 10ft. All of your weapons gain the effect of Poisoned Blade and double your bonus from Predator's Sense."
              }
            ]
          },
          {
            
              level: 7,
            title: "Long Shot",
            slug: "RANGER-LS",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Reduce your speed to 0 to double your range until the start of your next turn."
              }
            ]
          },
          {
            
              level: 8,
            title: "Stat Up 2",
            slug: "RANGER-SU2",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Increase a stat by 1 (max 5)"
              },
              {
                type: "RULE",
                text: "Select a Veteran Feature."
              }
            ]
          }
        ]
      },
      {
        title: "Shapeshifter",
        slug: "SHIFTER",
        description: [ "A naturalistic shape shifter able to take on the form of a beast and commune with the nature spirits."],
        complexity: "STANDARD",
        health: 16,
        healthOnLevel: 2,
        staminaStat: "HEART",
        stamina: 6,
        staminaOnLevel: 2,
        training: {
          armor: ["Light"],
          shields: null,
          weapons: {melee: {pick: 1, options: ["melee weapon class" ]}, ranged: {pick: 2, options:["ranged weapon class"]}, special: null},
          magic: null
        },
        attackStat: ["HEART"],
        range: {min: 0, max: 0},
        damage: {dice: 8, count: 1, stat: "HEART"},
        features: [
          {
            
              level: 1,
            title: "Shape Changer",
            slug: "SHIFTER-SHAPE-CHANGER",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "When you take your first level, pick your form from the list at the end. The exact form is up to you and your GM, the forms provide templates for general classes of animal. While transformed, you can replace your forms attack stat with your Heart.. The form lasts until you Catch Your Breath or you are reduced to 0 Health. You can also end the form early at any time."
              }
            ]
          },
          {
            
              level: 1,
            title: "Shift",
            slug: "SHIFTER-SHIFT",
            staminaCost: 1,
            costsFortunesFavor: false,
            actionType: "ACTION",
            text: [
              {
                type: "RULE",
                text: "Spend 1 Stamina to transform. You can transform as an Action or as part of your Basic Attack Action."
              }
            ]
          },
          {
            
              level: 2,
            title: "Commune with Nature",
            slug: "SHIFTER-COMM-NATURE",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "You can understand and communicate with animals, you gain a +3 on tests when interacting with animals that closely resemble your chosen form."
              },
              {
                type: "EG",
                text: " All bears if your form is a grizzly bear, or all snakes if your form is a cobra."
              }
            ]
          },
          {
            
              level: 3,
            title: "Reinvigorate",
            slug: "SHIFTER-REINVIGORATE",
            staminaCost: 3,
            costsFortunesFavor: false,
            actionType: "ACTION",
            text: [
              {
                type: "FLAVOR",
                text: "The spirit of nature fills your body, stitching your body back together."
              },
              {
                type: "RULE",
                text: "As an action, you regain 1d8+heart health and add your Heart to your Armor until the end of your next turn. You can do this 3 times per day."
              }
            ]
          },
          {
            
              level: 4,
            title: "Stat Up",
            slug: "SHIFTER-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Increase one of your stats by 1 (max 5)"
              },
              {
                type: "RULE",
                text: "Select a new Novice Feature."
              }
            ]
          },
          {
            
              level: 5,
            title: "Unusual Form",
            slug: "SHIFTER-UNUSUAL-FORM",
            staminaCost: 2,
            costsFortunesFavor: false,
            text: [
              {
                type: "CHOICE",
                text: "When you shapeshift you can spend 2 stamina to gain an extra form of movement from the list below.",
                options: ["30 ft. fly", "20 ft. swim", "20 ft. burrow"]
              }
            ],
            
          },
          {
            
              level: 6,
            title: "Nature's Wrath",
            slug: "SHIFTER-WRATH",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "When you make your Last Stand, add 2d6 rot damage to all attacks and you can immediately transform into your animal form."
              }
            ]
          },
          {
            
              level: 7,
            title: "Blood Tracker",
            slug: "SHIFTER-TRACKER",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Gain +5 on tests to track an enemy you've dealt damage to in the last hour."
              }
            ]
          },
          {
            
              level: 7,
            title: "Impeccable Survivalist",
            slug: "SHIFTER-SURVIVALIST",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "While traveling, you don't have to reduce your pace to forage for food or water. In addition, if there is enough to be found, you find enough supplies for your entire party."
              },
              {
                type: "FLAVOR",
                text: "In all but the harshest environments you can find food and water for your party."
              }
            ]
          },
          {
            
              level: 8,
            title: "Stat Up 2",
            slug: "SHIFTER-SU2",
            staminaCost: 0,
            costsFortunesFavor: false,
            text: [
              {
                type: "RULE",
                text: "Increase a stat by 1 (max 5)"
              },
              {
                type: "RULE",
                text: "Select a Veteran Feature."
              }
            ]
          }
        ],
        extra: {
          forms: [
            {
              title: "Big (Bear or Bull)",
              slug: "SHIFTER-BIG-FORM",
              size: "LARGE",
              attackStat: "METTLE",
              damage: [{
                dice: 10,
                count: 1,
                type: ["slashing", "bludgeoning", "piercing"],
                stat: "METTLE"
              }],
              armor: {
                baseArmor: 10,
                stat: "METTLE"
              },
              features: [
                {
                  text: "Gain 4 Health per Shapeshifter level, this Health lasts until you leave this form."
                },
                {
                  text: "Gain a +3 to Mettle tests to lift, carry or drag."
                },
                {
                  title: "Heavy Blows",
                  text: "When you deal damage to a medium or smaller creature you can spend 2 stamina to try and also knock them down. Make a contested Mettle test, on a Success, you knock them prone, or shove them 5ft. On a Mixed Result you reduce their speed by half."
                }
              ]
            },
            {
              title: "Medium (Wolf or Big Cat)",
              slug: "SHIFTER-MID-FORM",
              size: "MEDIUM",
              attackStat: "AGILITY",
              damage: [{
                dice: 10,
                count: 1,
                type: ["slashing", "bludgeoning", "piercing"],
                stat: "AGILITY"
              }],
              armor: {
                baseArmor: 10,
                stat: "AGILITY"
              },
              features: [
                {
                  text: "	+10 to Speed"
                },
                {
                  text: "Add your Agility to your jump distance, and to Tests to navigate difficult terrain."
                },
                {
                  title: "Distracting Strike",
                  text: "When an ally is going to attack an enemy within your melee range, you can spend Fortune's Favor to grant an ally a bonus to their attack equal to your Heart."
                }
              ]
            },
            {
              title: "Small (Snake or Lizard)",
              slug: "SHIFTER-SMALL-FORM",
              size: "SMALL",
              attackStat: "AGILITY",
              damage: [{
                dice: 4,
                count: 1,
                type: ["Piercing"]
              },
            {
              dice: 6,
              count: 1,
              stat: "HEART",
              type: ["Rot"]

            }],
              armor: {
                baseArmor: 10,
                stat: "AGILITY"
              },
              features: [
                {
                  text: "	+10 to Speed"
                },
                {
                  text: "Add your Agility to your jump distance, and to Tests to navigate difficult terrain."
                },
                {
                  title: "Distracting Strike",
                  text: "When an ally is going to attack an enemy within your melee range, you can spend Fortune's Favor to grant an ally a bonus to their attack equal to your Heart."
                }
              ]
            }
          ]
        }
      }
]