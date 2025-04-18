import mappedSlugs from "../../../slugMapper";
import type { SearchResultResolvers } from "./../../types.generated";
export const SearchResult: SearchResultResolvers = {
  href: ({ slug }) => {
    const found = mappedSlugs.find((element) => element.slug === slug);
    if (found) return found.url;
    else return;
  },
};
