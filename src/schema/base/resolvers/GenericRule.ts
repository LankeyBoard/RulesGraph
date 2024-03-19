import { hrefer, baseUrls } from '../../../slugMapper';
import type   { GenericRuleResolvers } from './../../types.generated';
    export const GenericRule: GenericRuleResolvers = {
      href: ({slug}) => hrefer(baseUrls.generalRules, slug, true)
  };