import { culturesData } from '../../../../rules/cultures';
import type   { QueryResolvers } from './../../../types.generated';
        export const cultures: NonNullable<QueryResolvers['cultures']> = async (_parent, _arg, _ctx) => { return [...culturesData]/* Implement Query.cultures resolver logic here */ };