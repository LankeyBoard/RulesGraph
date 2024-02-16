import { culturesData } from '../../../../rules/cultures';
import { generalRules } from '../../../../rules/generalRules';
import { NoviceFeatures, VeteranFeatures } from '../../../../rules/genericFeatures';
import { lineagesData } from '../../../../rules/lineages';
import { playerClasses } from '../../../../rules/playerClasses';
import type   { CharacterClassFeature, GenericFeature, GenericRule, QueryResolvers, SearchResult } from './../../../types.generated';




export const searchAll: NonNullable<QueryResolvers['searchAll']> = async (_parent, _arg) => {
        const searchPhrase = _arg.phrase.toLocaleLowerCase();
        console.log(_arg.phrase)
        const found: SearchResult[] = []
        const searchRule = (rule: GenericRule) =>{
                if(rule.title.toLocaleLowerCase().includes(searchPhrase) || rule.shortText?.toLocaleLowerCase().includes(searchPhrase) || rule.text?.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || rule.list?.toLocaleString().toLocaleLowerCase().includes(searchPhrase)){
                        found.push({
                                title: rule.title,
                                slug: rule.slug,
                                text: rule.text
                        })
                }
                rule.rules?.forEach(r=>{
                        if(r)
                                searchRule(r);
                })
        }

        const searchClassFeature = (feature: CharacterClassFeature) => {
                if(feature.title.toLocaleLowerCase().includes(searchPhrase) || feature.rules?.toLocaleString().toLocaleLowerCase().includes(searchPhrase)){
                        found.push({
                                title: feature.title,
                                slug: feature.slug,
                                text: feature.rules
                        })
                }
                feature.choices?.forEach(choice => {
                        if(choice)
                                searchGenericFeature(choice)
                })
                
        }
        const searchGenericFeature = (feature: GenericFeature) => {
                if(feature.title.toLocaleLowerCase().includes(searchPhrase) || feature.shortText?.toLocaleLowerCase().includes(searchPhrase)){
                        found.push({
                                title: feature.title,
                                slug: feature.slug,
                                text: feature.text
                        })
                }
                else{
                        feature.text?.forEach(txt => {
                                if(txt?.text.toLocaleLowerCase().includes(searchPhrase)){
                                        found.push({
                                                title: feature.title,
                                                slug: feature.slug,
                                                text: feature.text
                                        })
                                }
                        })
                        feature.options?.forEach(option => {
                                if(option?.toLocaleLowerCase().includes(searchPhrase)){
                                        found.push({
                                                title: feature.title,
                                                slug: feature.slug,
                                                text: feature.text
                                        })
                                }
                        })
                }
        }

        generalRules.forEach(rule => {
                searchRule(rule);                
        })

        culturesData.forEach(culture => {
                if(culture.title.toLocaleLowerCase().includes(searchPhrase) || culture.title.toLocaleLowerCase().includes(searchPhrase) || culture.description?.toLocaleString().includes(searchPhrase) || culture.languages?.toLocaleLowerCase().includes(searchPhrase) || culture.stat?.toLocaleLowerCase().includes(searchPhrase)){
                        found.push({
                                title: culture.title,
                                slug: culture.slug,
                                text: [{text: culture.description?.toLocaleString()|| ""}]
                        })
                }
                culture.traits?.forEach(trait => {
                        if(trait?.text?.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || trait?.title.toLocaleLowerCase().includes(searchPhrase) || trait?.shortText?.toLocaleLowerCase().includes(searchPhrase)){
                                found.push({
                                        title: `${culture.title} - ${trait.title}`,
                                        slug: trait.slug,
                                        text: trait.text
                                })
                        }
                })

        })
        lineagesData.forEach(lingeage => {
                if(lingeage.title.toLocaleLowerCase().includes(searchPhrase) || lingeage.description?.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || lingeage.size?.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || lingeage.stat?.toLocaleLowerCase().includes(searchPhrase)){
                        found.push({
                                title: lingeage.title,
                                slug: lingeage.slug,
                                text: [{text: lingeage.description?.toLocaleString() || ""}]
                        })
                }
                lingeage.traits?.forEach(trait => {
                        if(trait)
                                searchRule(trait)
                })
        })
        playerClasses.forEach(playerClass => {
                if(playerClass.title.toLocaleLowerCase().includes(searchPhrase) || playerClass.attackStat.toLocaleLowerCase().includes(searchPhrase) || playerClass.complexity?.toLocaleLowerCase().includes(searchPhrase) || playerClass.description.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || playerClass.training.armor?.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || playerClass.training.magic?.options.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || playerClass.training.shields?.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || playerClass.training.weapons?.melee?.options.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || playerClass.training.weapons?.ranged?.options.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || playerClass.training.weapons?.special?.options.toLocaleString().toLocaleLowerCase().includes(searchPhrase)){
                        found.push({
                                title: playerClass.title,
                                slug: playerClass.slug,
                                text: [{text: playerClass.description.toLocaleString()}]
                        })
                }
                playerClass.features.forEach(feature => {
                        if(feature)
                                searchClassFeature(feature)
                })
        })

        NoviceFeatures.forEach(feature => {
                searchGenericFeature(feature)
        })

        VeteranFeatures.forEach(feature => {
                searchGenericFeature(feature)
        })
        
        return found;
};      