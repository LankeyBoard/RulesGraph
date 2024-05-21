import { NoviceFeatures } from '../../../rules/genericFeatures';
import { baseUrls, hrefer } from '../../../slugMapper';
import type   { FeatureWithSimpleChoicesResolvers } from './../../types.generated';
    export const FeatureWithSimpleChoices: FeatureWithSimpleChoicesResolvers = {
        href: ({slug}) => NoviceFeatures.find((f)=> f.slug === slug)? hrefer(baseUrls.noviceFeatures, slug, true) : hrefer(baseUrls.veteranFeatures, slug, true)
  };