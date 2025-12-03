import lineagesData from "../../../rules/2a/lineages";
import { hrefer, baseUrls } from "../../../slugMapper";
import type { Lineage, LineageVariantResolvers } from "./../../types.generated";

const findBaseSlug = (lineages: Lineage[], variantSlug: string): string => {
  const base = lineages.find((l) =>
    l.variants?.some((v) => v?.slug === variantSlug),
  );
  if (!base) {
    throw new Error(`slug ${variantSlug} not found in base lineages`);
  }
  return base.slug;
};
export const LineageVariant: LineageVariantResolvers = {
  href: (parent) => {
    const { slug } = parent;
    const baseURL = hrefer(
      baseUrls.lineages,
      findBaseSlug(lineagesData, slug),
      false,
    );
    if (!baseURL) throw new Error(`Base class not found for slug: ${slug}`);
    return baseURL + `?variant=${slug.toLowerCase()}`;
  },
};
