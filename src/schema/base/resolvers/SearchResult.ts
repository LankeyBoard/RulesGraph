import mappedSlugs from "../../../slugMapper";
import type { SearchResultResolvers } from "./../../types.generated";
export const SearchResult: SearchResultResolvers = {
  href: ({ slug }) => {
    const found = mappedSlugs.get(slug);
    if (found) return found.url;
    else return;
  },
};
