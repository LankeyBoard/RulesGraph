/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { CharacterClass } from './base/resolvers/CharacterClass';
import    { CharacterClassFeature } from './base/resolvers/CharacterClassFeature';
import    { Culture } from './base/resolvers/Culture';
import    { Damage } from './base/resolvers/Damage';
import    { FeatureWithoutChoices } from './base/resolvers/FeatureWithoutChoices';
import    { GenericFeature } from './base/resolvers/GenericFeature';
import    { GenericRule } from './base/resolvers/GenericRule';
import    { Lineage } from './base/resolvers/Lineage';
import    { characterClasses as Query_characterClasses } from './base/resolvers/Query/characterClasses';
import    { cultures as Query_cultures } from './base/resolvers/Query/cultures';
import    { genericRules as Query_genericRules } from './base/resolvers/Query/genericRules';
import    { lineages as Query_lineages } from './base/resolvers/Query/lineages';
import    { searchAll as Query_searchAll } from './base/resolvers/Query/searchAll';
import    { slugMap as Query_slugMap } from './base/resolvers/Query/slugMap';
import    { universalFeatures as Query_universalFeatures } from './base/resolvers/Query/universalFeatures';
import    { Range } from './base/resolvers/Range';
import    { RuleText } from './base/resolvers/RuleText';
import    { SearchResult } from './base/resolvers/SearchResult';
import    { ShifterForm } from './base/resolvers/ShifterForm';
import    { ShifterForms } from './base/resolvers/ShifterForms';
import    { SlugDict } from './base/resolvers/SlugDict';
import    { Speed } from './base/resolvers/Speed';
import    { Training } from './base/resolvers/Training';
import    { TrainingOptions } from './base/resolvers/TrainingOptions';
import    { Weapons } from './base/resolvers/Weapons';
import    { shifterArmor } from './base/resolvers/shifterArmor';
import    { shifterFeature } from './base/resolvers/shifterFeature';
    export const resolvers: Resolvers = {
      Query: { characterClasses: Query_characterClasses,cultures: Query_cultures,genericRules: Query_genericRules,lineages: Query_lineages,searchAll: Query_searchAll,slugMap: Query_slugMap,universalFeatures: Query_universalFeatures },
      
      
      CharacterClass: CharacterClass,
CharacterClassFeature: CharacterClassFeature,
Culture: Culture,
Damage: Damage,
FeatureWithoutChoices: FeatureWithoutChoices,
GenericFeature: GenericFeature,
GenericRule: GenericRule,
Lineage: Lineage,
Range: Range,
RuleText: RuleText,
SearchResult: SearchResult,
ShifterForm: ShifterForm,
ShifterForms: ShifterForms,
SlugDict: SlugDict,
Speed: Speed,
Training: Training,
TrainingOptions: TrainingOptions,
Weapons: Weapons,
shifterArmor: shifterArmor,
shifterFeature: shifterFeature
    }