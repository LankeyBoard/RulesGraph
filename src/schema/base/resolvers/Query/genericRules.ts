import { generalRules } from '../../../../rules/generalRules';
import type   { QueryResolvers } from './../../../types.generated';
export const genericRules: NonNullable<QueryResolvers['genericRules']> = async (_parent, _arg, _ctx) => { 
        return [...generalRules] 
};