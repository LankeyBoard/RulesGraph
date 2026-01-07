/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AuthPayload } from './base/resolvers/AuthPayload';
import    { BeastAbility } from './base/resolvers/BeastAbility';
import    { BeastForm } from './base/resolvers/BeastForm';
import    { BeastHealth } from './base/resolvers/BeastHealth';
import    { BeastStats } from './base/resolvers/BeastStats';
import    { BeastmasterPet } from './base/resolvers/BeastmasterPet';
import    { Campaign } from './base/resolvers/Campaign';
import    { Character } from './base/resolvers/Character';
import    { CharacterClass } from './base/resolvers/CharacterClass';
import    { CharacterClassFeature } from './base/resolvers/CharacterClassFeature';
import    { CharacterClassVariant } from './base/resolvers/CharacterClassVariant';
import    { CharacterExtras } from './base/resolvers/CharacterExtras';
import    { Choice } from './base/resolvers/Choice';
import    { Culture } from './base/resolvers/Culture';
import    { CultureVariant } from './base/resolvers/CultureVariant';
import    { Damage } from './base/resolvers/Damage';
import    { Deflect } from './base/resolvers/Deflect';
import    { Effect } from './base/resolvers/Effect';
import    { FeatureWithoutChoices } from './base/resolvers/FeatureWithoutChoices';
import    { GenericFeature } from './base/resolvers/GenericFeature';
import    { GenericRule } from './base/resolvers/GenericRule';
import    { Img } from './base/resolvers/Img';
import    { Item } from './base/resolvers/Item';
import    { ItemShop } from './base/resolvers/ItemShop';
import    { Lineage } from './base/resolvers/Lineage';
import    { LineageVariant } from './base/resolvers/LineageVariant';
import    { List } from './base/resolvers/List';
import    { addCharacterToCampaign as Mutation_addCharacterToCampaign } from './base/resolvers/Mutation/addCharacterToCampaign';
import    { addShopToCampaign as Mutation_addShopToCampaign } from './base/resolvers/Mutation/addShopToCampaign';
import    { createCampaign as Mutation_createCampaign } from './base/resolvers/Mutation/createCampaign';
import    { createCharacter as Mutation_createCharacter } from './base/resolvers/Mutation/createCharacter';
import    { createShop as Mutation_createShop } from './base/resolvers/Mutation/createShop';
import    { createUser as Mutation_createUser } from './base/resolvers/Mutation/createUser';
import    { deleteCampaign as Mutation_deleteCampaign } from './base/resolvers/Mutation/deleteCampaign';
import    { deleteCharacter as Mutation_deleteCharacter } from './base/resolvers/Mutation/deleteCharacter';
import    { deleteShop as Mutation_deleteShop } from './base/resolvers/Mutation/deleteShop';
import    { forgotPassword as Mutation_forgotPassword } from './base/resolvers/Mutation/forgotPassword';
import    { login as Mutation_login } from './base/resolvers/Mutation/login';
import    { removeCharacterFromCampaign as Mutation_removeCharacterFromCampaign } from './base/resolvers/Mutation/removeCharacterFromCampaign';
import    { removeShopFromCampaign as Mutation_removeShopFromCampaign } from './base/resolvers/Mutation/removeShopFromCampaign';
import    { sellItem as Mutation_sellItem } from './base/resolvers/Mutation/sellItem';
import    { setPassword as Mutation_setPassword } from './base/resolvers/Mutation/setPassword';
import    { updateCampaign as Mutation_updateCampaign } from './base/resolvers/Mutation/updateCampaign';
import    { updateCharacter as Mutation_updateCharacter } from './base/resolvers/Mutation/updateCharacter';
import    { updateMe as Mutation_updateMe } from './base/resolvers/Mutation/updateMe';
import    { updateShop as Mutation_updateShop } from './base/resolvers/Mutation/updateShop';
import    { MyCampaignsResult } from './base/resolvers/MyCampaignsResult';
import    { allCampaigns as Query_allCampaigns } from './base/resolvers/Query/allCampaigns';
import    { allItems as Query_allItems } from './base/resolvers/Query/allItems';
import    { allShops as Query_allShops } from './base/resolvers/Query/allShops';
import    { allSpells as Query_allSpells } from './base/resolvers/Query/allSpells';
import    { campaign as Query_campaign } from './base/resolvers/Query/campaign';
import    { character as Query_character } from './base/resolvers/Query/character';
import    { characterClasses as Query_characterClasses } from './base/resolvers/Query/characterClasses';
import    { cultures as Query_cultures } from './base/resolvers/Query/cultures';
import    { genericRules as Query_genericRules } from './base/resolvers/Query/genericRules';
import    { itemShop as Query_itemShop } from './base/resolvers/Query/itemShop';
import    { lineages as Query_lineages } from './base/resolvers/Query/lineages';
import    { me as Query_me } from './base/resolvers/Query/me';
import    { myCampaigns as Query_myCampaigns } from './base/resolvers/Query/myCampaigns';
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
import    { Spell } from './base/resolvers/Spell';
import    { Training } from './base/resolvers/Training';
import    { TrainingOptions } from './base/resolvers/TrainingOptions';
import    { User } from './base/resolvers/User';
import    { Uses } from './base/resolvers/Uses';
import    { Weapons } from './base/resolvers/Weapons';
import    { shifterArmor } from './base/resolvers/shifterArmor';
import    { shifterFeature } from './base/resolvers/shifterFeature';
    export const resolvers: Resolvers = {
      Query: { allCampaigns: Query_allCampaigns,allItems: Query_allItems,allShops: Query_allShops,allSpells: Query_allSpells,campaign: Query_campaign,character: Query_character,characterClasses: Query_characterClasses,cultures: Query_cultures,genericRules: Query_genericRules,itemShop: Query_itemShop,lineages: Query_lineages,me: Query_me,myCampaigns: Query_myCampaigns,rules: Query_rules,searchAll: Query_searchAll,slugMap: Query_slugMap,universalFeatures: Query_universalFeatures,user: Query_user,users: Query_users },
      Mutation: { addCharacterToCampaign: Mutation_addCharacterToCampaign,addShopToCampaign: Mutation_addShopToCampaign,createCampaign: Mutation_createCampaign,createCharacter: Mutation_createCharacter,createShop: Mutation_createShop,createUser: Mutation_createUser,deleteCampaign: Mutation_deleteCampaign,deleteCharacter: Mutation_deleteCharacter,deleteShop: Mutation_deleteShop,forgotPassword: Mutation_forgotPassword,login: Mutation_login,removeCharacterFromCampaign: Mutation_removeCharacterFromCampaign,removeShopFromCampaign: Mutation_removeShopFromCampaign,sellItem: Mutation_sellItem,setPassword: Mutation_setPassword,updateCampaign: Mutation_updateCampaign,updateCharacter: Mutation_updateCharacter,updateMe: Mutation_updateMe,updateShop: Mutation_updateShop },
      
      AuthPayload: AuthPayload,
BeastAbility: BeastAbility,
BeastForm: BeastForm,
BeastHealth: BeastHealth,
BeastStats: BeastStats,
BeastmasterPet: BeastmasterPet,
Campaign: Campaign,
Character: Character,
CharacterClass: CharacterClass,
CharacterClassFeature: CharacterClassFeature,
CharacterClassVariant: CharacterClassVariant,
CharacterExtras: CharacterExtras,
Choice: Choice,
Culture: Culture,
CultureVariant: CultureVariant,
Damage: Damage,
Deflect: Deflect,
Effect: Effect,
FeatureWithoutChoices: FeatureWithoutChoices,
GenericFeature: GenericFeature,
GenericRule: GenericRule,
Img: Img,
Item: Item,
ItemShop: ItemShop,
Lineage: Lineage,
LineageVariant: LineageVariant,
List: List,
MyCampaignsResult: MyCampaignsResult,
Range: Range,
RuleSection: RuleSection,
RuleText: RuleText,
SearchResult: SearchResult,
ShifterForm: ShifterForm,
SlugDict: SlugDict,
Speed: Speed,
Spell: Spell,
Training: Training,
TrainingOptions: TrainingOptions,
User: User,
Uses: Uses,
Weapons: Weapons,
shifterArmor: shifterArmor,
shifterFeature: shifterFeature
    }