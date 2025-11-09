import { LineageVariant } from "../../../../schema/types.generated";

const mechanic: Partial<LineageVariant> = {
  title: "Mechanic",
  slug: "CHIMERIC_MECHANIC",
  description: [
    "A manufactured life made of metal and brought to life with magical energy.",
  ],
  traits: [
    {
      title: "Modificatons",
      slug: "CHIMERIC-ANIMAL-FEATURES",
      text: [{ text: "Pick 2 options from the list below." }],
      ruleType: "CHOICE",
      chooseNum: 2,
      staminaCost: 0,
      costsFortunesFavor: false,
      choices: [
        {
          title: "Intimidating",
          slug: "CHIMERIC-INTIMIDATING",
          text: [{ text: "Gain +2 on tests to intimidate someone." }],
          staminaCost: 0,
          costsFortunesFavor: false,
        },
        {
          title: "Cute",
          slug: "CHIMERIC-CUTE",
          text: [{ text: "Gain +2 on tests to persuade someone." }],
          staminaCost: 0,
          costsFortunesFavor: false,
        },
        {
          title: "Prehensile Tail",
          slug: "CHIMERIC-PREHENSILE-TAIL",
          text: [
            {
              text: "You can use your prehensile tail to help you balance as well as to grip things and move through the environment. Gain +3 on tests to climb and balance. Your tail cannot be used to hold weapons or shields in combat.",
            },
          ],
          staminaCost: 0,
          costsFortunesFavor: false,
        },
        {
          title: "Fast",
          slug: "CHIMERIC-FAST",
          text: [{ text: "Increase your speed by 5ft." }],
          staminaCost: 0,
          costsFortunesFavor: false,
        },
        {
          title: "Tough Skin/Shell",
          slug: "CHIMERIC-TOUGH",
          text: [
            { text: "Add +3 to your Armor when you are not wearing armor." },
          ],
          staminaCost: 0,
          costsFortunesFavor: false,
        },
        {
          title: "Flight",
          slug: "CHIMERIC-FLIGHT",
          text: [
            {
              text: "You have a pair of wings or magical propulsion, you have a fly speed equal to your speed. You can fly for up to 10 minutes.",
            },
          ],
          staminaCost: 0,
          costsFortunesFavor: false,
        },
        {
          title: "Claws/Fangs",
          slug: "CHIMERIC-CLAWS",
          text: [
            {
              text: "You can attack with your claws/fangs. If you are trained in any melee weapon, you deal your base damage. If you are not, this attack deals 1d6+mettle damage. Choose if the damage is piercing, slashing or bludgeoning when you pick this trait.",
            },
          ],
          staminaCost: 0,
          costsFortunesFavor: false,
        },
        {
          title: "Stealthy",
          slug: "CHIMERIC-STEALTHY",
          text: [{ text: "Add a +2 to tests when stealthing." }],
          staminaCost: 0,
          costsFortunesFavor: false,
        },
      ],
    },
  ],
};
export default mechanic;
