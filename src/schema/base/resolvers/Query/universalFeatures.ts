import { GraphQLError } from 'graphql';
import { NoviceFeatures, VeteranFeatures } from '../../../../rules/genericFeatures';
import type   { QueryResolvers } from './../../../types.generated';
        export const universalFeatures: NonNullable<QueryResolvers['universalFeatures']> = async (_parent, _arg) => { 
                const searchSlug = _arg.slug?.toLocaleLowerCase();
                const featureType = _arg.featureType;
                if(searchSlug){
                        const result = NoviceFeatures.concat(VeteranFeatures).find(feature => {
                                if(feature.slug.toLocaleLowerCase() === searchSlug)
                                        return [feature];
                        })
                        if(result !== undefined)
                                return [{...result}]
                
                        else
                                throw new GraphQLError(`Slug ${_arg.slug} not found in the generic features data`)
                }

                else if(featureType){
                        if(featureType === "NOVICE"){
                                return NoviceFeatures
                        }
                        else if(featureType === "VETERAN"){
                                return VeteranFeatures
                        }
                        else return []
                }
        
                else return NoviceFeatures.concat(VeteranFeatures) 
         };