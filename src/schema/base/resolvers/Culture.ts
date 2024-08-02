import { hrefer, baseUrls } from "../../../slugMapper";
import type { CultureResolvers } from "./../../types.generated";
export const Culture: CultureResolvers = {
  href: ({ slug }) => hrefer(baseUrls.cultures, slug, false),
};
