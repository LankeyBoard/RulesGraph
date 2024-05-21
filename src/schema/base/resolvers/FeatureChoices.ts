import { FeatureChoicesResolvers } from "../../types.generated";
const findType = (object: object) => {
    console.log("HERE", object)
    if("text" in object){
        if(typeof object.text === "string")
            return "RuleText"
        else if(typeof object.text === "object")
            return "FeatureWithoutChoices"
    }
    console.log("undefined type")
    return undefined
  }
export const FeatureChoices: FeatureChoicesResolvers = {
    __resolveType: (object) => findType(object),
    
}