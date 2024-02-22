import { NoviceFeatures } from '../../../rules/genericFeatures';
import { hrefer, baseUrls } from '../../../slugMapper';
import type   { GenericFeatureResolvers } from './../../types.generated';
    export const GenericFeature: GenericFeatureResolvers = {
      href: ({slug}) => {if(NoviceFeatures.find((feature => feature.slug === slug))){ return hrefer(baseUrls.noviceFeatures, slug, false)} return hrefer(baseUrls.veteranFeatures, slug, false)}
  };