/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { CharacterClass } from "./base/resolvers/CharacterClass";
import { CharacterClassFeature } from "./base/resolvers/CharacterClassFeature";
import { Culture } from "./base/resolvers/Culture";
import { Damage } from "./base/resolvers/Damage";
import { GenericFeature } from "./base/resolvers/GenericFeature";
import { GenericRule } from "./base/resolvers/GenericRule";
import { Lineage } from "./base/resolvers/Lineage";
import { Options } from "./base/resolvers/Options";
import { characterClasses as Query_characterClasses } from "./base/resolvers/Query/characterClasses";
import { cultures as Query_cultures } from "./base/resolvers/Query/cultures";
import { genericFeatures as Query_genericFeatures } from "./base/resolvers/Query/genericFeatures";
import { genericRules as Query_genericRules } from "./base/resolvers/Query/genericRules";
import { lineages as Query_lineages } from "./base/resolvers/Query/lineages";
import { searchAll as Query_searchAll } from "./base/resolvers/Query/searchAll";
import { slugMap as Query_slugMap } from "./base/resolvers/Query/slugMap";
import { Range } from "./base/resolvers/Range";
import { RuleText } from "./base/resolvers/RuleText";
import { SearchResult } from "./base/resolvers/SearchResult";
import { ShifterForm } from "./base/resolvers/ShifterForm";
import { ShifterForms } from "./base/resolvers/ShifterForms";
import { SlugDict } from "./base/resolvers/SlugDict";
import { Training } from "./base/resolvers/Training";
import { Weapons } from "./base/resolvers/Weapons";
import { shifterArmor } from "./base/resolvers/shifterArmor";
import { shifterFeature } from "./base/resolvers/shifterFeature";
export const resolvers: Resolvers = {
  Query: {
    characterClasses: Query_characterClasses,
    cultures: Query_cultures,
    genericFeatures: Query_genericFeatures,
    genericRules: Query_genericRules,
    lineages: Query_lineages,
    searchAll: Query_searchAll,
    slugMap: Query_slugMap,
  },

  CharacterClass: CharacterClass,
  CharacterClassFeature: CharacterClassFeature,
  Culture: Culture,
  Damage: Damage,
  GenericFeature: GenericFeature,
  GenericRule: GenericRule,
  Lineage: Lineage,
  Options: Options,
  Range: Range,
  RuleText: RuleText,
  SearchResult: SearchResult,
  ShifterForm: ShifterForm,
  ShifterForms: ShifterForms,
  SlugDict: SlugDict,
  Training: Training,
  Weapons: Weapons,
  shifterArmor: shifterArmor,
  shifterFeature: shifterFeature,
};
