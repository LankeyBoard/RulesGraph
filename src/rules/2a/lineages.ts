import { Lineage } from "../../schema/types.generated";
import chimeric from "./lineages/chimeric";
import dwarf from "./lineages/dwarf";
import elf from "./lineages/elf";
import faery from "./lineages/faery";
import human from "./lineages/human";

const lineagesData: Lineage[] = [];
lineagesData.push(chimeric);
lineagesData.push(dwarf);
lineagesData.push(elf);
lineagesData.push(faery);
lineagesData.push(human);

lineagesData.sort((a, b) => a.title.localeCompare(b.title));
export default lineagesData;
