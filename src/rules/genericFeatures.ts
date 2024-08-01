import { GenericFeature } from "../schema/types.generated";

export const NoviceFeatures: GenericFeature[] = [
    {
        title: "Academic",
        slug: "ACADEMIC",
        text: [{text: "When researching information in a library or another collection of knowledge, add a +3 to related Tests."}]
    },
    {
        title: "Aid",
        slug: "AID",
        text: [{text:  "Add an additional +2 to Tests when helping an ally."}]
    },
    {
        title: "Artisan",
        slug: "ARTISAN",
        text: [{text:  "Gain training in one set of artisan's tools (Woodworking, masonry, weaving, etc.)"}],
        multiSelect: true
    },
    {
        title: "Athletic",
        slug: "ATHLETIC",
        text: [{text:  "Add +3 to Mettle Tests for feats of strength or endurance."}]
    },        
    {
        title: "Daring",
        slug: "DARING",
        text: [{text:  "On 3 Tests per Rest and Recuperation, instead of rolling dice, flip a coin. If you win the flip, you succeed on the Test. Otherwise, you fail."}]
    },
    {
        title: "Disguise Master",
        slug: "DISGUISE-MASTER",
        text: [{text:  "Add +3 to Tests to disguise yourself as another humanoid."}]
    },
    {
        title: "Imitator",
        slug: "IMITATOR",
        text: [{text:  "Add +3 to Tests when trying to imitate another humanoid's speech."}]
    },
    {
        title: "Independent",
        slug: "INDEPENDENT",
        text: [{text:  "Once per day, when you make a non-combat Test without help, add +3 to the results."}]
    },
    {
        title: "Infiltrator",
        slug: "INFILTRATOR",
        text: [{text:  "Add +3 to stealth Tests."}]
    },
    {
        title: "Insightful",
        slug: "INSIGHTFUL",
        text: [{text:  "Add +3 to Heart Tests to determine if someone is lying to you or to determine their intentions."}]
    },
    {
        title: "Keen Eyed",
        slug: "KEEN-EYED",
        text: [{text:  "Add +3 to Heart Tests to spot hidden objects and creatures."}]
    },
    {
        title: "Knowledgeable",
        slug: "KNOWLEDGEABLE",
        text: [{text:  "When you take this feature pick a subject from the list below that you are well versed in. When you take Tests that rely on this knowledge, add +3 to the roll."}],
        options: ["Botany", "Carpentry", "Geology", "History", "Oceanography", "Religion"],
        multiSelect: true
    },
    {
        title: "Linguist",
        slug: "LINGUIST",
        text: [{text:  "Learn another language. Add +3 to Intellect Tests to decipher languages and codes you don't already know."}]
    },
    {
        title: "Long Jumper",
        slug: "LONG-JUMPER",
        text: [{text:  "Increase your jump distance by 5ft."}]
    },
    {
        title: "Medical Training",
        slug: "MEDICAL-TRAINING",
        text: [{text:  "When you make an Intellect Test to heal a dying ally, add +3 to the roll."}]
    },
    {
        title: "Performer",
        slug: "PERFORMER",
        text: [{text:  "Add +3 to Tests to determine the quality of your performance art. Gain training in one performance art of your choice (1 musical instrument, dance, acrobatics, etc.)"}]
    },
    {
        title: "Reliable Skill",
        slug: "RELIABLE-SKILL",
        text: [{text:  "When you make a non-combat Test, before you roll, you can choose to treat the Test as though you rolled a 12. You can do this 3 times per Rest and Recuperation."}]
    },
    {
        title: "Silver Tongued",
        slug: "SILVER-TONGUED",
        text: [{text:  "When you make a Heart Test to convince others with emotional appeal, add a +3 to the Test."}]
    },
    {
        title: "Swift",
        slug: "SWIFT",
        text: [{text:  "Increase your Ground Speed by 10 ft."}]
    },
    {
        title: "Swift Climber",
        slug: "SWIFT-CLIMBER",
        text: [{text:  "Increase your Climb Speed by 5 ft."}]
    },
    {
        title: "Swift Swimmer",
        slug: "SWIFT-SWIMMER",
        text: [{text:  "Increase your Swim Speed by 5ft."}]
    },
    {
        title: "Trekker",
        slug: "TREKKER",
        text: [{text:  "Double your Lift, Drag, and Pack capacity."}]
    }
]

export const VeteranFeatures: GenericFeature[] = [
    {
        title: "Charger",
        slug: "CHARGER",
        text: [{text: "If you move at least 15 ft. in a straight line before you make a non-magical Attack, increase your Damage Dice by 1 step and push the creature back 5 ft."}]
    }, 
    {
        title: "Folk Hero",
        slug: "FOLK-HERO",
        text: [{text: "Your face and story are known far and wide as are your heroics.", type: "FLAVOR"},{text: "When you meet a new character, you can roll a Luck Test. On a Pass (15), they know who you are and have heard of you. On a Mixed (10-14), they have a vague recollection of hearing about you. On a fail (9), they haven't heard of you."}]
    },
    {
        title: "Imbued Attacks",
        slug: "IMBUED-ATTACKS",
        text: [{text:  "You have become imbued with magic. Pick a damage type. Your attacks can deal damage of the chosen type instead of their regular damage type."}]
    },
    {
        title: "Legendary",
        slug: "LEGENDARY",
        text: [{text:  "Select a Novice Feature you've taken that grants a bonus on Tests. Double your bonus on those Tests."}]
    },
    {
        title: "Perpetual Amateur",
        slug: "PERPETUAL-AMATEUR",
        text: [{text:  "Pick 2 Novice Features."}]
    },
    {
        title: "Skirmisher's Agility",
        slug: "SKIRMISHERS-AGILITY",
        text: [{text:  "If you move no more than half your Speed on a turn, your movement does not provoke Counter Attacks."}]
    },
    {
        title: "Unfailing",
        slug: "UNFAILING",
        text: [{text:  "Spend Fortune's Favor. If you roll below a Mixed Result, treat the roll as though it was a Mixed Result."}]
    },
    {
        title: "Weapon Master",
        slug: "WEAPON-MASTER",
        text: [{text:  "Select a weapon class you are trained in. When attacking with that weapon, increase your Base Damage by 1 dice step."}]
    }  
]