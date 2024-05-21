import { NoviceFeatures, VeteranFeatures } from '../../../rules/genericFeatures';
import { baseUrls, hrefer } from '../../../slugMapper';
import type   { GenericFeatureResolvers } from './../../types.generated';

const makeFeatureLink = (slug: string) => {
  if(NoviceFeatures.find(f => f.slug === slug))
    return hrefer(baseUrls.noviceFeatures, slug, false)
  else if(VeteranFeatures.find(f => f.slug === slug))
    return hrefer(baseUrls.veteranFeatures, slug, false)
  else return undefined
}

export const GenericFeature: GenericFeatureResolvers = {
  href: ({slug}) => makeFeatureLink(slug)
};