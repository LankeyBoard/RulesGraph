import SlugMapper from '../../../../slugDictBuilder';
import type   { QueryResolvers } from './../../../types.generated';
export const slugMap: NonNullable<QueryResolvers['slugMap']> = async () => { 
        return SlugMapper()};