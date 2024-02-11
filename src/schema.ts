import { makeExecutableSchema } from '@graphql-tools/schema'
 
const typeDefinitions = /* GraphQL */ `
  type Query {
  rulesText: [RuleText]!
  genericRules: [GenericRule]!

  genericFeatures: [GenericFeature]!

  lineages: [Lineage]!

  cultures: [Culture]!

  characterClasses: [CharacterClass]!
}

enum Size {
  MINISCULE
  TINY
  SMALL
  MEDIUM
  LARGE
  GIGANTIC
  COLOSSAL
}

enum Stat {
  METTLE
  AGILITY
  INTELLECT
  HEART
}

interface Rule {
  title: String!
  slug: String!
}

type RuleText {
  text: String!
  type: String
}

type GenericRule implements Rule {
  title: String!
  slug: String!
  ruleType: String
  text: [RuleText]
  rules: [GenericRule]
  shortText: String
}

type Culture implements Rule {
  title: String!
  slug: String!
  description: [String]
  stat: String
  languages: String
  traits: [GenericRule]
}

type Lineage implements Rule {
  title: String!
  slug: String!
  description: [String]
  size: [Size]
  speed: Int
  stat: String
  traits: [GenericRule]
}

type GenericFeature implements Rule {
  title: String!
  slug: String!
  ruleType: String
  text: [RuleText]
  rules: [Rule]
  shortText: String
  multiselect: Boolean
}

type Options {
  pick: Int
  options: [String!]!
}

type Weapons {
  melee: Options
  ranged: Options
  special: Options
}

type Training {
  armor: [String]
  shields: [String]
  weapons: Weapons
  magic: Options
}

type Range {
  min: Int!
  max: Int!
}

type Damage {
  dice: Int!
  count: Int!
  stat: Stat
}

type CharacterClassFeature implements Rule {
  title: String!
  slug: String!
  level: Int
  staminaCost: Int
  costsFortunesFavor: Boolean
  rules: [RuleText]
}

type CharacterClass implements Rule {
  title: String!
  slug: String!
  description: [String]
  health: Int
  healthOnLevel: Int
  stamina: Int
  staminaOnLevel: Int
  staminaStat: Stat
  training: Training
  attackStat: Stat
  range: Range
  damage: Damage
  features: [CharacterClassFeature]
}

`


const resolvers = {
  Query: {
    hello: () => 'Hello World!',
  }
}
 
export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})