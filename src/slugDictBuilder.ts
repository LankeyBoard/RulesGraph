import { culturesData } from "./rules/cultures";
import { generalRules } from "./rules/generalRules";
import { NoviceFeatures, VeteranFeatures } from "./rules/genericFeatures";
import { lineagesData } from "./rules/lineages";
import { playerClasses } from "./rules/playerClasses";
import { GenericRule, SlugDict } from "./schema/types.generated";

const SlugMapper = () => {
    const slugDict: SlugDict[] =[]

    const subRuleMapper = (rule: GenericRule, slugStr: string, dict: SlugDict[]) => {
        dict.push({slug: rule.slug, url:  slugStr+'#'+rule.slug});
        rule.rules?.forEach(r=>{
            if(r)
            subRuleMapper(r, slugStr, dict)
        })
    }
    
    // General Rules
    generalRules.forEach(rule => {
        const s = {slug: rule.slug, url: '/rules/'+rule.slug}
        slugDict.push(s);
        subRuleMapper(rule, s.url, slugDict);
    })
    
    culturesData.forEach(culture => {
        const s = {slug: culture.slug, url: '/'+culture.slug}
        slugDict.push(s);
        culture.traits?.forEach(trait => {
            if(trait)
                subRuleMapper(trait, s.url, slugDict)
        })
        
    })
    
    //Novice Features
    NoviceFeatures.forEach(feature => {
        slugDict.push({slug: feature.slug, url:'/novice_features#'+feature.slug})
    })
    //Veteran Features
    VeteranFeatures.forEach(feature => {
        slugDict.push({slug: feature.slug, url:'/veteran_features#'+feature.slug})
    })
    
    //Lineages
    lineagesData.forEach(lineage => {
        const s = {slug: lineage.slug, url: '/lineages/'+lineage.slug}
        slugDict.push(s);
        lineage.traits?.forEach(trait => {
            if(trait)
                subRuleMapper(trait, s.url, slugDict)
        })
    })
    
    // Player Classes
    playerClasses.forEach(playerClass => {
        const s = {slug: playerClass.slug, url: '/player_classes'+playerClass.slug}
        slugDict.push(s);
        playerClass.features.forEach(classFeature => {
            if(classFeature)
                slugDict.push({slug: classFeature.slug, url: s.url+"#"+classFeature.slug})
        })
    })

    return slugDict;
}

export default SlugMapper;
