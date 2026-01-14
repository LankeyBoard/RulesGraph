import basicMonsters from "./monsters/basicMonsters";

const allMonstersData = basicMonsters.sort((a, b) =>
  a.name.localeCompare(b.name),
);
export default allMonstersData;
