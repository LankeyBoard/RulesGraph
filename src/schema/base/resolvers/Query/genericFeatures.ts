import { NoviceFeatures, VeteranFeatures } from '../../../../rules/genericFeatures';
import type   { QueryResolvers } from './../../../types.generated';

export const genericFeatures: NonNullable<QueryResolvers['genericFeatures']> = async (_parent, _arg, _ctx) => { 
        console.log(_parent, _arg, _ctx)
        return [...NoviceFeatures].concat([...VeteranFeatures])
};