import basicMonsters from "../rules/2a/monsters/basicMonsters";
import type {
  EncounterMonster as GraphQLEncounterMonster,
  Monster,
} from "../schema/types.generated";

/**
 * Maps encounter monsters to full monster definitions from basicMonsters
 * by matching the monster name and enriching with additional monster data
 */
export function enrichEncounterMonstersWithRuleData(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  encounterMonsters: any[],
): GraphQLEncounterMonster[] {
  return encounterMonsters.map((encounterMonster) => {
    // Find matching monster in basicMonsters by name
    let ruleMonster: Monster | undefined;

    for (const monsterList of basicMonsters) {
      if ("name" in monsterList && monsterList.name === encounterMonster.name) {
        // Direct match for single Monster
        ruleMonster = monsterList as Monster;
        break;
      } else if ("monsters" in monsterList) {
        // Search in MonsterGroup
        const monsterGroup = monsterList;
        ruleMonster = monsterGroup.monsters.find(
          (m: Monster) => m.name === encounterMonster.name,
        );
        if (ruleMonster) break;
      }
    }

    // Merge encounter-specific data with rule monster data
    return {
      ...ruleMonster,
      name: encounterMonster.name,
      maxHealth: encounterMonster.maxHP,
      currentHealth: encounterMonster.currentHP,
    } as GraphQLEncounterMonster;
  });
}
