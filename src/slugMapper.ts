import { culturesData } from "./rules/cultures";
import { generalRules } from "./rules/generalRules";
import { NoviceFeatures, VeteranFeatures } from "./rules/genericFeatures";
import { lineagesData } from "./rules/lineages";
import { playerClasses } from "./rules/playerClasses";
import { Feature, GenericRule, SlugDict } from "./schema/types.generated";

export enum baseUrls {
    generalRules = "player_rules",
    cultures = "cultures",
    noviceFeatures = "generic_features/novice_features",
    veteranFeatures = "generic_features/veteran_features",
    lineages = "lineages",
    classes = "classes"
}


export const hrefer = (baseUrl: baseUrls | string, slug: string, isAnchor: boolean): string => {
    if(baseUrl.includes('#'))
        return baseUrl
    if(!isAnchor)
        return `/rules/${baseUrl}/${slug}`
    else
        return `${baseUrl}#${slug}`
}

const SlugMapper = () => {
    const slugDict: SlugDict[] =[]

    const subRuleMapper = (rule: GenericRule|Feature, slugStr: string, dict: SlugDict[]) => {
        dict.push({slug: rule.slug, title: rule.shortTitle || rule.title, url: hrefer(slugStr, rule.slug, true)});
        if("subRules" in rule){
            rule.subRules?.forEach(r=>{
                if(r)
                subRuleMapper(r, slugStr, dict)
            })
        }
    }
    
    // General Rules
    generalRules.forEach(rule => {
        const s = {slug: rule.slug, title: rule.shortTitle || rule.title, url: hrefer(baseUrls.generalRules, rule.slug, true)}
        slugDict.push(s);
        subRuleMapper(rule, s.url, slugDict);
    })
    
    culturesData.forEach(culture => {
        const s = {slug: culture.slug, title: culture.shortTitle || culture.title, url: hrefer(baseUrls.cultures, culture.slug, false)}
        slugDict.push(s);
        culture.traits?.forEach(trait => {
            if(trait)
                subRuleMapper(trait, s.url, slugDict)
        })
        
    })
    
    //Novice Features
    NoviceFeatures.forEach(feature => {
        slugDict.push({slug: feature.slug, title: feature.shortTitle || feature.title, url: hrefer(baseUrls.noviceFeatures, feature.slug, false)})
    })
    //Veteran Features
    VeteranFeatures.forEach(feature => {
        slugDict.push({slug: feature.slug, title: feature.shortTitle || feature.title, url: hrefer(baseUrls.veteranFeatures, feature.slug, false)})
    })
    
    //Lineages
    lineagesData.forEach(lineage => {
        const s = {slug: lineage.slug, title: lineage.shortTitle || lineage.title, url: hrefer(baseUrls.lineages, lineage.slug, false)}
        slugDict.push(s);
        lineage.traits?.forEach(trait => {
            if(trait)
                subRuleMapper(trait, s.url, slugDict)
        })
    })
    
    // Player Classes
    playerClasses.forEach(playerClass => {
        const s = {slug: playerClass.slug, title: playerClass.shortTitle || playerClass.title, url: hrefer(baseUrls.classes, playerClass.slug, false)}
        slugDict.push(s);
        playerClass.features.forEach(classFeature => {
            if(classFeature){
                slugDict.push({slug: classFeature.slug, title: classFeature.shortTitle || classFeature.title, url: hrefer(s.url, classFeature.slug, true)});
                classFeature.choices?.forEach(choice => {
                        slugDict.push({slug: choice.slug, title: choice.shortTitle || choice.title, url: hrefer(s.url, classFeature.slug, true)})
                })
            }
        })
    })

    return slugDict;
}
const mappedSlugs = SlugMapper();
export default mappedSlugs
