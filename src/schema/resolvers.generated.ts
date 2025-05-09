/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AuthPayload } from './base/resolvers/AuthPayload';
import    { BeastAbility } from './base/resolvers/BeastAbility';
import    { BeastForm } from './base/resolvers/BeastForm';
import    { BeastHealth } from './base/resolvers/BeastHealth';
import    { BeastStats } from './base/resolvers/BeastStats';
import    { BeastmasterPet } from './base/resolvers/BeastmasterPet';
import    { Character } from './base/resolvers/Character';
import    { CharacterClass } from './base/resolvers/CharacterClass';
import    { CharacterClassFeature } from './base/resolvers/CharacterClassFeature';
import    { CharacterExtras } from './base/resolvers/CharacterExtras';
import    { Culture } from './base/resolvers/Culture';
import    { Damage } from './base/resolvers/Damage';
import    { Deflect } from './base/resolvers/Deflect';
import    { Effect } from './base/resolvers/Effect';
import    { FeatureWithoutChoices } from './base/resolvers/FeatureWithoutChoices';
import    { GenericFeature } from './base/resolvers/GenericFeature';
import    { GenericRule } from './base/resolvers/GenericRule';
import    { Item } from './base/resolvers/Item';
import    { ItemShop } from './base/resolvers/ItemShop';
import    { Lineage } from './base/resolvers/Lineage';
import    { List } from './base/resolvers/List';
import    { createCharacter as Mutation_createCharacter } from './base/resolvers/Mutation/createCharacter';
import    { createShop as Mutation_createShop } from './base/resolvers/Mutation/createShop';
import    { createUser as Mutation_createUser } from './base/resolvers/Mutation/createUser';
import    { deleteCharacter as Mutation_deleteCharacter } from './base/resolvers/Mutation/deleteCharacter';
import    { deleteShop as Mutation_deleteShop } from './base/resolvers/Mutation/deleteShop';
import    { login as Mutation_login } from './base/resolvers/Mutation/login';
import    { updateCharacter as Mutation_updateCharacter } from './base/resolvers/Mutation/updateCharacter';
import    { updateShop as Mutation_updateShop } from './base/resolvers/Mutation/updateShop';
import    { character as Query_character } from './base/resolvers/Query/character';
import    { characterClasses as Query_characterClasses } from './base/resolvers/Query/characterClasses';
import    { cultures as Query_cultures } from './base/resolvers/Query/cultures';
import    { genericRules as Query_genericRules } from './base/resolvers/Query/genericRules';
import    { itemShop as Query_itemShop } from './base/resolvers/Query/itemShop';
import    { lineages as Query_lineages } from './base/resolvers/Query/lineages';
import    { me as Query_me } from './base/resolvers/Query/me';
import    { rules as Query_rules } from './base/resolvers/Query/rules';
import    { searchAll as Query_searchAll } from './base/resolvers/Query/searchAll';
import    { slugMap as Query_slugMap } from './base/resolvers/Query/slugMap';
import    { universalFeatures as Query_universalFeatures } from './base/resolvers/Query/universalFeatures';
import    { user as Query_user } from './base/resolvers/Query/user';
import    { users as Query_users } from './base/resolvers/Query/users';
import    { Range } from './base/resolvers/Range';
import    { RuleSection } from './base/resolvers/RuleSection';
import    { RuleText } from './base/resolvers/RuleText';
import    { SearchResult } from './base/resolvers/SearchResult';
import    { ShifterForm } from './base/resolvers/ShifterForm';
import    { SlugDict } from './base/resolvers/SlugDict';
import    { Speed } from './base/resolvers/Speed';
import    { Training } from './base/resolvers/Training';
import    { TrainingOptions } from './base/resolvers/TrainingOptions';
import    { User } from './base/resolvers/User';
import    { Uses } from './base/resolvers/Uses';
import    { Weapons } from './base/resolvers/Weapons';
import    { shifterArmor } from './base/resolvers/shifterArmor';
import    { shifterFeature } from './base/resolvers/shifterFeature';
    export const resolvers: Resolvers = {
      Query: { character: Query_character,characterClasses: Query_characterClasses,cultures: Query_cultures,genericRules: Query_genericRules,itemShop: Query_itemShop,lineages: Query_lineages,me: Query_me,rules: Query_rules,searchAll: Query_searchAll,slugMap: Query_slugMap,universalFeatures: Query_universalFeatures,user: Query_user,users: Query_users },
      Mutation: { createCharacter: Mutation_createCharacter,createShop: Mutation_createShop,createUser: Mutation_createUser,deleteCharacter: Mutation_deleteCharacter,deleteShop: Mutation_deleteShop,login: Mutation_login,updateCharacter: Mutation_updateCharacter,updateShop: Mutation_updateShop },
      
      AuthPayload: AuthPayload,
BeastAbility: BeastAbility,
BeastForm: BeastForm,
BeastHealth: BeastHealth,
BeastStats: BeastStats,
BeastmasterPet: BeastmasterPet,
Character: Character,
CharacterClass: CharacterClass,
CharacterClassFeature: CharacterClassFeature,
CharacterExtras: CharacterExtras,
Culture: Culture,
Damage: Damage,
Deflect: Deflect,
Effect: Effect,
FeatureWithoutChoices: FeatureWithoutChoices,
GenericFeature: GenericFeature,
GenericRule: GenericRule,
Item: Item,
ItemShop: ItemShop,
Lineage: Lineage,
List: List,
Range: Range,
RuleSection: RuleSection,
RuleText: RuleText,
SearchResult: SearchResult,
ShifterForm: ShifterForm,
SlugDict: SlugDict,
Speed: Speed,
Training: Training,
TrainingOptions: TrainingOptions,
User: User,
Uses: Uses,
Weapons: Weapons,
shifterArmor: shifterArmor,
shifterFeature: shifterFeature
    }