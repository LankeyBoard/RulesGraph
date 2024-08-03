import { culturesData } from "../../../../rules/cultures";
import { generalRules } from "../../../../rules/generalRules";
import {
  NoviceFeatures,
  VeteranFeatures,
} from "../../../../rules/genericFeatures";
import { lineagesData } from "../../../../rules/lineages";
import { playerClasses } from "../../../../rules/playerClasses";
import type {
  CharacterClassFeature,
  FeatureWithoutChoices,
  GenericFeature,
  GenericRule,
  QueryResolvers,
  SearchResult,
  SearchResultSource,
} from "./../../../types.generated";

export const searchAll: NonNullable<QueryResolvers['searchAll']> = async (_parent, _arg) => {
        const searchPhrase = _arg.phrase.toLocaleLowerCase();
        console.log(_arg.phrase)
        const found: SearchResult[] = []
        const searchRule = (rule: GenericRule, parentPage: string, type: SearchResultSource = "rule") =>{
                if(rule.title.toLocaleLowerCase().includes(searchPhrase) || rule.shortText?.toLocaleLowerCase().includes(searchPhrase) || rule.text?.toLocaleString().toLocaleLowerCase().includes(searchPhrase) || rule.list?.toLocaleString().toLocaleLowerCase().includes(searchPhrase)){
                        found.push({
                                title: rule.title,
                                slug: rule.slug,
                                text: rule.text,
                                type: type,
                                page: parentPage,
                        })
                }
                rule.subRules?.forEach(r=>{
                        if(r)
                                searchRule(r, parentPage, type);
                })
        }

        const searchClassFeature = (feature: CharacterClassFeature, parentPage: string) => {
                if(feature.title.toLocaleLowerCase().includes(searchPhrase) || feature.text?.toLocaleString().toLocaleLowerCase().includes(searchPhrase)){
                        found.push({
                                title: feature.title,
                                slug: feature.slug,
                                text: feature.text,
                                page: parentPage,
                                type: "characterClass"
                        })
                }
                feature.choices?.forEach(choice => {
                        if("slug" in choice)
                                searchGenericFeature(choice, parentPage, "characterClass")
                        else if(choice.text.toLocaleLowerCase().includes(searchPhrase))
                                found.push({
                                        title: feature.title,
                                        slug: feature.slug,
                                        text: [choice],
                                        page: parentPage,
                                        type: "characterClass"   
                                })
                })
                
        }
        type featureTypes = GenericFeature | FeatureWithoutChoices
        const searchGenericFeature = (feature: featureTypes, parentPage: string, type: SearchResultSource) => {
                if(feature.title.toLocaleLowerCase().includes(searchPhrase) || feature.shortText?.toLocaleLowerCase().includes(searchPhrase)){
                        found.push({
                                title: feature.title,
                                slug: feature.slug,
                                text: feature.text,
                                page: parentPage,
                                type: type
                        })
                }
                else{
                        feature.text?.forEach(txt => {
                                if(txt?.text.toLocaleLowerCase().includes(searchPhrase)){
                                        found.push({
                                                title: feature.title,
                                                slug: feature.slug,
                                                text: feature.text,
                                                page: parentPage,
                                                type: type
                                        })
                                }
                        })
                        if("choices" in feature){
                                feature.choices?.forEach(choice => {              
                                        if(choice?.__typename === "RuleText" && choice.text?.toLocaleLowerCase().includes(searchPhrase)){
                                                found.push({
                                                        title: feature.title,
                                                        slug: feature.slug,
                                                        text: feature.text,
                                                        page: parentPage,
                                                        type: type
                                                })
                                        }
                                        else if(choice?.__typename === "FeatureWithoutChoices"){
                                                searchGenericFeature(choice, feature.slug, "noviceFeature")
                                        }
                                })
                        }
                }
        }
  generalRules.forEach((rule) => {
    searchRule(rule, rule.title);
  });

  culturesData.forEach((culture) => {
    if (
      culture.title.toLocaleLowerCase().includes(searchPhrase) ||
      culture.title.toLocaleLowerCase().includes(searchPhrase) ||
      culture.description?.toLocaleString().includes(searchPhrase) ||
      culture.languages?.toLocaleLowerCase().includes(searchPhrase) ||
      culture.stat?.toLocaleLowerCase().includes(searchPhrase)
    ) {
      found.push({
        title: culture.title,
        slug: culture.slug,
        text: [{ text: culture.description?.toLocaleString() || "" }],
        page: culture.title,
        type: "culture",
      });
    }
    culture.traits?.forEach((trait) => {
      if (
        trait?.text
          ?.toLocaleString()
          .toLocaleLowerCase()
          .includes(searchPhrase) ||
        trait?.title.toLocaleLowerCase().includes(searchPhrase) ||
        trait?.shortText?.toLocaleLowerCase().includes(searchPhrase)
      ) {
        found.push({
          title: `${culture.title} - ${trait.title}`,
          slug: trait.slug,
          text: trait.text,
          page: culture.title,
          type: "culture",
        });
      }
    });
  });
  lineagesData.forEach((lineage) => {
    if (
      lineage.title.toLocaleLowerCase().includes(searchPhrase) ||
      lineage.description
        ?.toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase) ||
      lineage.size
        ?.toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase) ||
      lineage.stat?.toLocaleLowerCase().includes(searchPhrase)
    ) {
      found.push({
        title: lineage.title,
        slug: lineage.slug,
        text: [{ text: lineage.description?.toLocaleString() || "" }],
        page: lineage.title,
        type: "lineage",
      });
    }
    lineage.traits?.forEach((trait) => {
      if (trait) searchRule(trait, lineage.title, "lineage");
    });
  });
  playerClasses.forEach((playerClass) => {
    if (
      playerClass.title.toLocaleLowerCase().includes(searchPhrase) ||
      playerClass.attackStat
        ?.toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase) ||
      playerClass.complexity?.toLocaleLowerCase().includes(searchPhrase) ||
      playerClass.description
        .toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase) ||
      playerClass.training.armor
        ?.toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase) ||
      playerClass.training.magic?.options
        .toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase) ||
      playerClass.training.shields
        ?.toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase) ||
      playerClass.training.weapons?.melee?.options
        .toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase) ||
      playerClass.training.weapons?.ranged?.options
        .toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase) ||
      playerClass.training.weapons?.special?.options
        .toLocaleString()
        .toLocaleLowerCase()
        .includes(searchPhrase)
    ) {
      found.push({
        title: playerClass.title,
        slug: playerClass.slug,
        text: [{ text: playerClass.description.toLocaleString() }],
        page: playerClass.title,
        type: "characterClass",
      });
    }
    playerClass.features.forEach((feature) => {
      if (feature) searchClassFeature(feature, playerClass.title);
    });
  });

  NoviceFeatures.forEach((feature) => {
    searchGenericFeature(feature, feature.title, "noviceFeature");
  });

  VeteranFeatures.forEach((feature) => {
    searchGenericFeature(feature, feature.title, "veteranFeature");
  });

  return found;
};
