import { hrefer, baseUrls } from "../../../slugMapper";
import type { LineageResolvers } from "./../../types.generated";
export const Lineage: LineageResolvers = {
  href: ({ slug }) => hrefer(baseUrls.lineages, slug, false),
};
