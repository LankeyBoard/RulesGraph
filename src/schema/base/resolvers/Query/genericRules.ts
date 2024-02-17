import { GraphQLError } from 'graphql';
import { generalRules } from '../../../../rules/generalRules';
import type   { QueryResolvers } from './../../../types.generated';
export const genericRules: NonNullable<QueryResolvers['genericRules']> = async (_parent, _arg) => { 
        const searchSlug = _arg.slug?.toLocaleLowerCase();
        if(searchSlug){
                const result = generalRules.find(rule => {
                        if(rule.slug.toLocaleLowerCase() === searchSlug)
                                return rule;
                })
                if(result)
                        return[result]
                else
                        throw new GraphQLError(`Slug ${_arg.slug} not found in the general rules data`)
        }
        else return [...generalRules] 
};