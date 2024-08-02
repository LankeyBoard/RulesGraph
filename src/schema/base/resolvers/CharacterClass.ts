import { baseUrls, hrefer } from "../../../slugMapper";
import type { CharacterClassResolvers } from "./../../types.generated";
export const CharacterClass: CharacterClassResolvers = {
  href: ({ slug }) => hrefer(baseUrls.classes, slug, false),
};
