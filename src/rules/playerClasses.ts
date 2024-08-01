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
            rules: [{
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
            rules:[{
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
            rules:[{
                type: "RULE",
                text: "When you succeed on a melee attack Test, you can move the enemy you attacked up to 5 ft. into melee range of an ally or swap places with it if you can move. If that ally attacks the enemy before the start of the next round of combat, they have Fortune's Favor for that attack."
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
            rules:[{
                type: "RULE",
                text: "When trying to intimidate an enemy, add your Mettle in addition to any other bonuses to the Test."
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
            actionType: "COUNTER",
            rules:[{
                type: "RULE",
                text: "When you make a Counter Attack, you can spend 1 Stamina to deal your Base Damage on this Counter Attack."
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
            rules:[{
                type: "RULE",
                text: "If you are attacking an enemy you did not attack last turn you can spend Fortune's Favor before the attack to double your Base Damage if you hit."
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
            rules:[
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
            rules: [
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
                    text: "Spend 1 Stamina plus 1 Stamina per enemy within melee range of you. Attack all enemies within melee range of you. This attack deals your Base Damage on hit."
                }]
              },
              {
                title: "Crippling Strke",
                slug: "BRAWLER-CS",
                staminaCost: 2,
                costsFortunesFavor: false,
                actionType: "ACTION",
                text:[{
                    type: "RULE",
                    text: "When you hit an enemy with a melee attack, spend 2 Stamina plus 1 for each size larger than you the enemy is.  Reduce the damage done by their attacks by half and reduce their Speed to 0 until the end of this round."
                }]
              },
              {
                title: "Top Rope Takedown",
                slug: "BRAWLER-TRT",
                staminaCost: 1,
                costsFortunesFavor: false,
                actionType: "ACTION",
                text:[
              {
                type: "RULE",
                text: "Spend 1 Stamina to attempt to knock the target Prone with your next melee attack. On a hit, make an opposed Mettle or Agility test with the target, on a success they are knocked Prone."
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
                    text: "When you Counter an enemy, spend 1 Stamina + 1 per size category the target is larger than you. If you do, you move the enemy up to 15 ft. in a straight line."
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
            rules:[{
                type: "RULE",
                text: "Spend Fortune's Favor to halve all damage taken until the start your next turn."
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
            rules:[{
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
            rules:[
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
          armor: [null],
          shields: [null],
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
            rules: [
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
            rules: [
              {
                type: "RULE",
                text: "You need a holy symbol to cast your divine spells. You require one hand either holding your holy symbol or free to cast."
              },
              {
                type: "EG",
                text: "E.g. If you are using a staff, you have to be holding it in one hand or if you have a tattoo on the back of your hand, then you can't have anything in that hand to cast."
              }
            ]
          },
          {
            level: 1,
            title: "I've Studied the Word",
            slug: "DEVOTED-SW",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "Gain a +3 on Intellect Tests to recall specific bits of history or religious information."
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
            rules: [
              {
                type: "RULE",
                text: "Starts with 3 charges, when you Catch Your Breath, you can expend a charge, you and up to 5 allies regain Health equal to your Heart. You regain all charges when you Rest & Recuperate"
              }
            ]
          },
          {
            level: 3,
            title: "Reading the Signs",
            slug: "DEVOTED-RS",
            staminaCost: 1,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "Spend 1 Stamina and 10 minutes in deep meditation or praying on a solution to an issue to gain Fortune's Favor on the next Test to resolve the issue."
              }
            ]
          },
          {
            level: 3,
            title: "Minor Intervention",
            slug: "DEVOTED-MI",
            staminaCost: 0,
            costsFortunesFavor: true,
            rules: [
              {
                type: "RULE",
                text: "Once a day you can spend Fortune's Favor to improve yours or your allies Test results. Turning a Failure to a Mixed or a Mixed to a Success. You can do this after the dice are rolled but before consequences are known."
              }
            ]
          },
          {
            level: 4,
            title: "Stat Up",
            slug: "DEVOTED-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
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
            rules: [
              {
                type: "RULE",
                text: "Add a +3 to tests to persuade others to follow your god's tenets."
              },
              {
                type: "FLAVOR",
                text: "You act as a conduit for the word of your god and you know how to gather others to your cause."
              }
            ]
          },
          {
            level: 6,
            title: "Martyr",
            slug: "DEVOTED-M",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "When you use your Last Stand, you can cast 2 spells per Action, and increase your Base Damage by 1 dice step."
              },
              {
                type: "FLAVOR",
                text: "Before you die, you make yourself a holy martyr seeking the final praise of your god."
              }
            ]
          },
          {
            level: 7,
            title: "Divine Inspiration",
            slug: "DEVOTED-DI",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "3 times per Rest and Recuperation, cast a spell without spending Stamina. Any additional costs or stamina outside of initial requirements must still be paid."
              }
            ]
          },
          {
            level: 8,
            title: "Stat Up 2",
            slug: "DEVOTED-SU2",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
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
            armor: [null],
            shields: [null],
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
            rules:[{
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
            rules:[
            {
                type: "RULE",
                text: "Attack all creatures within 10 ft. of you. Dealing your Base Damage to those you hit."
            },
            {
              type: "FLAVOR",
              text: "A burst of elemental energy surrounds you, warding off nearby foes."       
          },]
        },
        {
            level: 2,
            title: "Enhance",
            slug: "ELEM-ENHANCE",
            staminaCost: 1,
            costsFortunesFavor: false,
            rules:[
            {
                type: "RULE",
                text: "Select yourself or an ally you can see within 30 ft. of you. Add your Intellect to the next Mettle or Agility test the target makes. Spend Fortune's Favor to double the bonus Enhance provides."
            },
            {
              type: "FLAVOR",
              text: "Surround yourself or an ally with your element, bolstering their natural abilities."       
          }]
        },
        {
            level: 3,
            title: "Focused Training",
            slug: "ELEM-FT",
            staminaCost: 1,
            costsFortunesFavor: false,
            ruleType: "CHOICE",
            rules:[{
                type: "RULE",
                text: "Pick one of the following options to enhance yourself"       
            }],
            choices: [
                {title: "Elemental Armor", slug:"ELEM-ARMOR", text: [{text: "Add your Intellect to your Armor and take half damage from your chosen element."}]},
                {title: "Bolt Thrower", slug: "ELEM-BOLT-THROWER", text: [{text:"Increase your Base Attack range by 30 ft."}]},
                {title: "Bigger Burst", slug: "ELEM-BIGGER-BURST", text: [{text: "Increase the size of your burst by 20 ft."}]}
            ]
        },
        {
            level: 4,
            title: "Stat Up",
            slug: "ELEM-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules:[
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
            rules:[
            {
                type: "RULE",
                text: "Spend 2 Stamina to make 2 Attacks when you use the Attack Action."
            }]
        },
        {
            level: 5,
            title: "Overcharge",
            slug: "ELEM-OVERCHARGE",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules:[
            {
                type: "RULE",
                text: "When you take damage of your elemental type, gain Elemental Overcharge for the next minute. You can use Elemental Overcharge to increase your base damage by 2 dice steps when you hit with your Basic Attack."
            }]
        },
        {
            level: 6,
            title: "Power Overwhelming",
            slug: "ELEM-PO",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules:[
            {
                type: "RULE",
                text: "During your Last Stand you can use your Action to make a final Attack. The Attack is an AOE Attack with a radius of 90 ft. and deals 3x your Base Damage. After the Attack, your body is completely destroyed and you die."
            },
          {
            type: "FLAVOR",
            text: "As a last ditch effor you turn yourself into a living conduit for your chosen element, holding as much power as you can before it overwhelms you."
          }]
        },
        {
            level: 7,
            title: "Bursting Shot",
            slug: "ElemBS",
            staminaCost: 0,
            costsFortunesFavor: true,
            rules:[
            {
                type: "RULE",
                text: "You can spend your Fortune's Favor when you make a Basic Attack. If the attack hits, all enemies within 5 ft. of the target take half as much damage."
            }]
        },
        {
            level: 8,
            title: "Stat Up 2",
            slug: "ELEM-SU2",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules:[
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
            armor: ["Light, Medium, Heavy"],
            shields: ["Light, Medium, Heavy"],
            weapons: {melee: {pick: 2, options: [
              "Hammers & Clubs",
              "Slashing Swords",
              "Piercing Swords & Daggers",
              "Axes",
              "Flails, Ball & Chain, etc."
          ]}, ranged: {pick: 2, options:["Bows", "Crossbows", "Light Throwing Weapons", "Heavy Throwing Weapons"]},
           special: null},
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
            rules:[
            {
                type: "RULE",
                text: "When you make an attack action you may spend 1 stamina to attempt to also drive your enemy back 5ft. On a mix, you chose whether to damage or move the creature back. On a pass, you can do both.\nIf you chose to move a creature, they can opt to instead take an extra base attacks worth of damage to avoid being moved."
            },
            {
              type: "FLAVOR",
              text: "Your flurry of attacks drive the enemy back."       
          }]
        },
        {
            level: 1,
            title: "Sweeping Attack",
            slug: "KNIGHT-SA",
            staminaCost: 1,
            costsFortunesFavor: false,
            rules:[
            {
                type: "RULE",
                text: "When you take a Basic Attack with a melee weapon, you may spend 1 Stamina to attempt to also attack enemies adjacent to your target and within your weapons reach."
            },
            {
              type: "FLAVOR",
              text: "You sweep your attacks, aiming to harm all who stand in your way."       
          }]
        },
        {
            level: 2,
            title: "Vow",
            slug: "KNIGHT-VOW",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules:[
            {
                type: "RULE",
                text: "When you take a Test to convince someone of true information, you gain a +5 on the Test."
            },
            {
              type: "FLAVOR",
              text: "Your word is your bond, those who recognize your station believe you when you speak truth."       
          }]
        },
        {
            level: 3,
            title: "Intercept",
            slug: "KNIGHT-INTERCEPT",
            staminaCost: 1,
            costsFortunesFavor: false,
            rules:[
            {
                type: "RULE",
                text: "When an ally within 5 ft. of you would be hit by an Attack or Counter, you can spend 1 Stamina to switch places with them, taking the hit for them."
            },
            {
              type: "FLAVOR",
              text: "You swiftly step between your ally and danger."       
          }]
        },
        {
            level: 4,
            title: "Stat Up",
            slug: "KNIGHT-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules:[
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
            rules:[{
                type: "RULE",
                text: "Spend Fortune's Favor. Until the end of your next turn, your Speed cannot be reduced below half your Base Speed."
            }]
        },
        {
            level: 6,
            title: "No Retreat, No Surrender",
            slug: "KNIGHT-NR-NS",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules:[
            {
                type: "RULE",
                text: "If you attack the same creature you attacked last turn and did not willingly move further away from them, increase your Base Damage by 1 step."
            },
            {
              type: "FLAVOR",
              text: "You never run from a fight and don't stop until your enemies are dead."       
          }]
        },
        {
            level: 6,
            title: "Mounted Combatant",
            slug: "KNIGHT-MC",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules:[{
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
            rules:[
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
            rules:[
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
                  options: [
                    "Hammers & Clubs",
                    "Slashing Swords",
                    "Piercing Swords & Daggers",
                    "Axes",
                    "Flails, Ball & Chain, etc."
                ]
              },
              ranged: {
                  pick: 1,
                  options: [
                    "Bows",
                    "Crossbows",
                    "Light Throwing Weapons"
                ]
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
              rules: [{
                      type: "RULE",
                      text: "When you make a Test to identify a lie or avoid a trap, add +3 to the roll."
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
              rules: [{
                      type: "RULE",
                      text: "You can use your whip to wrap around objects and either pull them to you or pull yourself to them depending on their weight and size. If you are trying to pull an unwilling creature make an Attack against them. On a success you can pull them, on a Mix you move half the distance."
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
              rules: [{
                  type: "RULE",
                  text: "As an action, spend 2 Stamina and make an attack with your whip. On a hit deal damage and if you are at most 1 size smaller than the target, knock them Prone. On a Clash, deal half damage and the next attack against them this turn gains Fortune's Favor."
              }]
          },
          {
              level: 2,
              title: "Lucky Shot",
              slug: "MAVERICK-LS",
              staminaCost: 0,
              costsFortunesFavor: true,
              rules: [{
                  type: "RULE",
                  text: "Before you roll an Attack, you can choose to spend Fortune's Favor. If you hit, the attack deals an extra 2d6 damage."
              }]
          },
          {
              level: 3,
              title: "Sleight of Hand",
              slug: "MAVERICK-SOH",
              staminaCost: 0,
              costsFortunesFavor: false,
              rules: [{
                  type: "RULE",
                  text: "Add +3 to Tests to snatch and conceal small items."
              }]
          },
          {
              level: 3,
              title: "A Keen Eye for Coin",
              slug: "MAVERICK-KEC",
              staminaCost: 0,
              costsFortunesFavor: false,
              rules: [{
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
              rules: [{
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
              rules: [{
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
              rules: [{
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
              rules: [{
                  type: "RULE",
                  text: "Spend 3 Stamina to double your Speed until the end of your next turn, or 1 minute if not in combat."
              }]
          },
          {
              level: 8,
              title: "Stat Up 2",
              slug: "MAVERICK-SU2",
              staminaCost: 0,
              costsFortunesFavor: false,
              rules: [{
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
        health: 16,
        healthOnLevel: 2,
        staminaStat: "AGILITY",
        stamina: 6,
        staminaOnLevel: 2,
        training: {
          armor: ["Light", "Medium"],
          shields: null,
          weapons: {melee: {pick: 1, options: ["Axes", "Piercing Swords & Daggers", "Slashing Swords" ]}, ranged: {pick: 2, options:["Bows", "Crossbows", "Light Throwing Weapons"]}, special: null},
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
            rules: [
              {
                type: "RULE",
                text: "Gain +3 to tests when tracking as well as on tests to find hidden creatures."
              },
              {
                type: "FLAVOR",
                text: "Nothing escapes your clutches once you are on the scent."
              },
            ]
          },
          {
            level: 1,
            title: "Precision of the Hawk",
            slug: "RANGER-PRECISION",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "When you roll Weapon Attack damage, you can reroll any 1s, taking the new result."
              },
              {
                type: "FLAVOR",
                text: "Your attacks are incredibly accurate, always targeting the weakest points in the target."
              }
            ]
          },
          {
            level: 2,
            title: "Cunning Stalker",
            slug: "RANGER-STALKER",
            staminaCost: 1,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "Spend 1 Stamina. For the next 10 minutes you leave no tracks, enemies have Misfortune when trying to track you, and you get a +3 on stealth tests."
              },
              {
                type: "FLAVOR",
                text: "You have spent countless hours tracking prey through the woods or back alleys and instinctively step lightly and quietly."
              }
            ]
          },
          {
            level: 2,
            title: "Wild Guide",
            slug: "RANGER-GUIDE",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "Your party can add your Heart to their daily pace when traveling across terrain without roads."
              },
              {
                type: "FLAVOR",
                text: "You move through rough and wild terrain with skill and can guide others along the safest routes with ease."
              }
            ]
          },
          {
            level: 3,
            title: "Quickdraw Counter",
            slug: "RANGER-QUICK-COUNTER",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "When you Counter Attack, you can use any weapon on your person to make the counter."
              },
              {
                type: "FLAVOR",
                text: "Your weapons are just a hand twitch away."
              }
            ]
          },
          {
            level: 4,
            title: "Stat Up",
            slug: "RANGER-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
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
            rules: [
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
            rules: [
              {
                type: "RULE",
                text: "When you make a Last Stand, your Ground Speed increases by 10ft. All of your weapons gain the effect of Poisoned Blade and double your bonus from Predator's Sense."
              }
            ]
          },
          {
            level: 7,
            title: "Long Shot",
            slug: "RANGER-LS",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "Reduce your Speed to 0 to double your range until the start of your next turn."
              }
            ]
          },
          {
            level: 8,
            title: "Stat Up 2",
            slug: "RANGER-SU2",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
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
          weapons: {melee: {pick: 1, options: [
            "Hammers & Clubs",
            "Slashing Swords",
            "Piercing Swords & Daggers",
            "Axes",
            "Flails, Ball & Chain, etc."
        ]}, ranged: {pick: 2, options:[
          "Bows",
          "Crossbows",
          "Light Throwing weapons (Dart, Throwing Dagger)",
          "Heavy Throwing weapons (Shotput, Heavy Spear)"
      ]}, special: null},
          magic: null
        },
        attackStat: ["HEART"],
        range: {min: 0, max: 80},
        damage: {dice: 8, count: 1, stat: "HEART"},
        features: [
          {
            level: 1,
            title: "Shape Changer",
            slug: "SHIFTER-SHAPE-CHANGER",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "When you take your first level, pick your form from the list at the end. The exact form is up to you and your GM, the forms provide templates for general classes of animal. While transformed, your range is reduced to Melee only. You can replace your forms Attack Stat with your Heart. The form lasts until you Catch Your Breath or you are reduced to 0 Health. You can also end the form early at any time."
              }
            ]
          },
          {
            level: 1,
            title: "Shift",
            slug: "SHIFTER-SHIFT",
            staminaCost: 1,
            costsFortunesFavor: false,
            rules: [
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
            rules: [
              {
                type: "RULE",
                text: "You can understand and communicate with animals, you gain a +5 on tests when interacting with animals that closely resemble your chosen form."
              },
              {
                type: "EG",
                text: "You get a +5 when interacing with any bear if your form is a grizzly bear, or all snakes if your form is a cobra."
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
            rules: [
              {
                type: "RULE",
                text: "As an Action, you regain 1d8+Heart Health and add your Heart to your Armor until the end of your next turn. You can do this 3 times per day."
              },
              {
                type: "FLAVOR",
                text: "The spirit of nature fills your body, stitching your body back together."
              }
            ]
          },
          {
            level: 4,
            title: "Stat Up",
            slug: "SHIFTER-SU1",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
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
            rules: [
              {
                type: "CHOICE",
                text: "When you shapeshift you can spend 2 Stamina to gain an extra form of movement from the list below while shifted.",
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
            rules: [
              {
                type: "RULE",
                text: "When you make your Last Stand, add 2d6 Rot damage to all attacks and you can immediately transform into your animal form."
              }
            ]
          },
          {
            level: 7,
            title: "Blood Tracker",
            slug: "SHIFTER-TRACKER",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "Whenever you damaage an enemy, Gain +5 on tests to track that enemy for the next hour."
              }
            ]
          },
          {
            level: 7,
            title: "Impeccable Survivalist",
            slug: "SHIFTER-SURVIVALIST",
            staminaCost: 0,
            costsFortunesFavor: false,
            rules: [
              {
                type: "RULE",
                text: "While traveling, you don't have to reduce your pace to forage for food or water. In addition, if there is enough to be found, you find supplies for your entire party."
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
            rules: [
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
                  text: "While shifted, gain 4 Health per Shapeshifter level."
                },
                {
                  text: "Gain a +3 to Mettle tests to lift, carry or drag."
                },
                {
                  title: "Heavy Blows",
                  text: "When you deal damage to a Medium or smaller creature you can spend 2 Stamina to try and also knock them down. Make a contested Mettle test, on a Success, you knock them Prone, or shove them 5 ft. On a Mixed Result you reduce their Speed by half."
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
                  text: "Increase your ground speed by 10 ft."
                },
                {
                  text: "Add your Agility to your jump distance, and to tests to navigate difficult terrain."
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
                  text: "Decrease your ground speed by 10 ft."
                },
                {
                  text: "Gain a +5 on Agility tests to move stealthily and hide."
                }
              ]
            }
          ]
        }
      }
]