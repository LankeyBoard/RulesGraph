// simulate rounds of combat to figure out how long it would take for an player to die based on the enemies damage.
type Enemy = {
  dmgDice: number;
  diceCount: number;
  flat: number;
  hitBonus: number;
};
const enemy1: Enemy = {
  dmgDice: 10,
  diceCount: 1,
  flat: 4,
  hitBonus: 4,
};

const enemy2: Enemy = {
  dmgDice: 8,
  diceCount: 1,
  flat: 4,
  hitBonus: 4,
};

const enemy3: Enemy = {
  dmgDice: 6,
  diceCount: 2,
  flat: 4,
  hitBonus: 4,
};

const enemies = [enemy1, enemy2, enemy3];

class Player {
  level!: number;
  health: number;
  stamina: number;
  armor: number;
  deflect: { dice: number; flat: number; count: number };

  constructor(level: number) {
    this.level = level;
    this.health = 16 + 2 * (this.level - 1);
    this.stamina = (10 + (2 + 4) * (this.level - 1)) / 2;
    this.armor = 16;
    this.deflect = {
      dice: 4,
      flat: 0,
      count: 1 + Math.floor(this.level / 2),
    };
  }
}

const getRandomInteger = (X: number) => {
  return Math.floor(Math.random() * X) + 1;
};

const rollDice = (diceSize: number, diceCount: number): number => {
  let total = 0;
  for (let i = 0; i < diceCount; i++) {
    total += getRandomInteger(diceSize);
  }
  return total;
};

const CombatRound = (player: Player, enemy: Enemy) => {
  const enemyD20Roll = getRandomInteger(20);
  if (enemyD20Roll + enemy.hitBonus >= player.armor) {
    let enemyDamage = enemy.flat + rollDice(enemy.dmgDice, enemy.diceCount);
    // try and deflect
    if (player.stamina > player.deflect.count * 2) {
      player.stamina -= 2 * player.deflect.count;
      enemyDamage -=
        rollDice(player.deflect.dice, player.deflect.count) +
        player.deflect.flat;
    }
    if (enemyDamage > 0) player.health -= enemyDamage;
  }
};

const ROUNDS_TO_SIM = 10000;
const levels = [5];
levels.forEach((level) => {
  console.log(`========== ${level} ==========`);
  enemies.forEach((enemy) => {
    const roundResults: number[] = [];
    const player = new Player(level);
    let combatRoundsCompleted = 0;
    for (let i = 0; i < ROUNDS_TO_SIM; i++) {
      const tempPlayer = { ...player };
      while (tempPlayer.health > 0) {
        CombatRound(tempPlayer, enemy);
        combatRoundsCompleted += 1;
      }

      roundResults.push(combatRoundsCompleted);
      combatRoundsCompleted = 0;
    }
    // roundResults.sort((a: number, b: number) => a - b);
    console.log(
      `${enemy.diceCount}d${enemy.dmgDice} + ${enemy.flat} ====`,
      "avg rounds to die: ",
      roundResults.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      ) / ROUNDS_TO_SIM,
    );
  });
});
