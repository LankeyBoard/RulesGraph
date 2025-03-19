/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AuthPayload } from './base/resolvers/AuthPayload';
import    { Character } from './base/resolvers/Character';
import    { CharacterClass } from './base/resolvers/CharacterClass';
import    { CharacterClassFeature } from './base/resolvers/CharacterClassFeature';
import    { Culture } from './base/resolvers/Culture';
import    { Damage } from './base/resolvers/Damage';
import    { Deflect } from './base/resolvers/Deflect';
import    { Effect } from './base/resolvers/Effect';
import    { FeatureWithoutChoices } from './base/resolvers/FeatureWithoutChoices';
import    { GenericFeature } from './base/resolvers/GenericFeature';
import    { GenericRule } from './base/resolvers/GenericRule';
import    { Item } from './base/resolvers/Item';
import    { Lineage } from './base/resolvers/Lineage';
import    { createCharacter as Mutation_createCharacter } from './base/resolvers/Mutation/createCharacter';
import    { createUser as Mutation_createUser } from './base/resolvers/Mutation/createUser';
import    { deleteCharacter as Mutation_deleteCharacter } from './base/resolvers/Mutation/deleteCharacter';
import    { login as Mutation_login } from './base/resolvers/Mutation/login';
import    { updateCharacter as Mutation_updateCharacter } from './base/resolvers/Mutation/updateCharacter';
import    { character as Query_character } from './base/resolvers/Query/character';
import    { characterClasses as Query_characterClasses } from './base/resolvers/Query/characterClasses';
import    { cultures as Query_cultures } from './base/resolvers/Query/cultures';
import    { genericRules as Query_genericRules } from './base/resolvers/Query/genericRules';
import    { lineages as Query_lineages } from './base/resolvers/Query/lineages';
import    { me as Query_me } from './base/resolvers/Query/me';
import    { searchAll as Query_searchAll } from './base/resolvers/Query/searchAll';
import    { slugMap as Query_slugMap } from './base/resolvers/Query/slugMap';
import    { universalFeatures as Query_universalFeatures } from './base/resolvers/Query/universalFeatures';
import    { user as Query_user } from './base/resolvers/Query/user';
import    { users as Query_users } from './base/resolvers/Query/users';
import    { Range } from './base/resolvers/Range';
import    { RuleText } from './base/resolvers/RuleText';
import    { SearchResult } from './base/resolvers/SearchResult';
import    { ShifterForm } from './base/resolvers/ShifterForm';
import    { ShifterForms } from './base/resolvers/ShifterForms';
import    { SlugDict } from './base/resolvers/SlugDict';
import    { Speed } from './base/resolvers/Speed';
import    { Training } from './base/resolvers/Training';
import    { TrainingOptions } from './base/resolvers/TrainingOptions';
import    { User } from './base/resolvers/User';
import    { Weapons } from './base/resolvers/Weapons';
import    { shifterArmor } from './base/resolvers/shifterArmor';
import    { shifterFeature } from './base/resolvers/shifterFeature';
    export const resolvers: Resolvers = {
      Query: { character: Query_character,characterClasses: Query_characterClasses,cultures: Query_cultures,genericRules: Query_genericRules,lineages: Query_lineages,me: Query_me,searchAll: Query_searchAll,slugMap: Query_slugMap,universalFeatures: Query_universalFeatures,user: Query_user,users: Query_users },
      Mutation: { createCharacter: Mutation_createCharacter,createUser: Mutation_createUser,deleteCharacter: Mutation_deleteCharacter,login: Mutation_login,updateCharacter: Mutation_updateCharacter },
      
      AuthPayload: AuthPayload,
Character: Character,
CharacterClass: CharacterClass,
CharacterClassFeature: CharacterClassFeature,
Culture: Culture,
Damage: Damage,
Deflect: Deflect,
Effect: Effect,
FeatureWithoutChoices: FeatureWithoutChoices,
GenericFeature: GenericFeature,
GenericRule: GenericRule,
Item: Item,
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
User: User,
Weapons: Weapons,
shifterArmor: shifterArmor,
shifterFeature: shifterFeature
    }