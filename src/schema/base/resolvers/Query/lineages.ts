import { GraphQLError } from 'graphql';
import { lineagesData } from '../../../../rules/lineages';
import type   { QueryResolvers } from './../../../types.generated';
export const lineages: NonNullable<QueryResolvers['lineages']> = async (_parent, _arg) => { 
        const searchSlug = _arg.slug?.toLocaleLowerCase();
        if(searchSlug){
                const result = lineagesData.find(lineage => {
                        if(lineage.slug.toLocaleLowerCase() === searchSlug)
                                return lineage;
                })
                if(result)
                        return[result]
                else
                        throw new GraphQLError(`Slug ${_arg.slug} not found in the lineages data`)
        }
        else return ([...lineagesData])
};