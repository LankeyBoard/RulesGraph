import { culturesData } from '../../../../rules/cultures';
import type   { CharacterClass, Culture, GenericFeature, GenericRule, Lineage, QueryResolvers, SearchResult } from './../../../types.generated';

export const searchAll: NonNullable<QueryResolvers['searchAll']> = async (_parent, _arg, _ctx) => {
        const searchPhrase = _arg.phrase.toLocaleLowerCase();
        console.log(_arg.phrase)
        let found: SearchResult[] = []
        culturesData.forEach(culture => {
                if(culture.title.toLocaleLowerCase().includes(searchPhrase) || culture.title.toLocaleLowerCase().includes(searchPhrase) || culture.description?.toLocaleString().includes(searchPhrase)){
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
        return found;
};      