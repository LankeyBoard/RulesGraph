import { GraphQLError } from 'graphql';
import { NoviceFeatures, VeteranFeatures } from '../../../../rules/genericFeatures';
import type   { QueryResolvers } from './../../../types.generated';

export const genericFeatures: NonNullable<QueryResolvers['genericFeatures']> = async (_parent, _arg) => { 
        const searchSlug = _arg.slug?.toLocaleLowerCase();
        if(searchSlug){
                const result = NoviceFeatures.concat(VeteranFeatures).find(feature => {
                        if(feature.slug.toLocaleLowerCase() === searchSlug)
                                return feature;
                })
                if(result)
                        return[result]
                else
                        throw new GraphQLError(`Slug ${_arg.slug} not found in the generic features data`)
        }
        else return [...NoviceFeatures].concat([...VeteranFeatures])
};