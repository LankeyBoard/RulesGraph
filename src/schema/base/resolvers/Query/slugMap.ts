import mappedSlugs from '../../../../slugMapper';
import type   { QueryResolvers } from './../../../types.generated';
export const slugMap: NonNullable<QueryResolvers['slugMap']> = async () => { 
        return mappedSlugs};