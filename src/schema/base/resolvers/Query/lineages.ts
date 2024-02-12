import { lineagesData } from '../../../../rules/lineages';
import type   { QueryResolvers } from './../../../types.generated';
export const lineages: NonNullable<QueryResolvers['lineages']> = async (_parent, _arg, _ctx) => { 
        return ([...lineagesData])
};