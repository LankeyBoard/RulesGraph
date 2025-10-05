import mappedSlugs from "../../../slugMapper";
import type { GenericRuleResolvers } from "./../../types.generated";
export const GenericRule: GenericRuleResolvers = {
  href: ({ slug }) => mappedSlugs.get(slug)?.url,
};
