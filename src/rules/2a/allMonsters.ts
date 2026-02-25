import basicMonsters from "./monsters/basicMonsters";

const allMonsters = basicMonsters.sort((a, b) => a.name.localeCompare(b.name));
export default allMonsters;
