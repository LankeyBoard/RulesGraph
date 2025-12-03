import { baseUrls, hrefer } from "../../../slugMapper";
import type {
  CharacterClass,
  CharacterClassVariantResolvers,
} from "../../types.generated";
import playerClasses from "../../../rules/2a/playerClasses";
const findBaseSlug = (
  classes: CharacterClass[],
  variantSlug: string,
): string => {
  const base = classes.find((pc) =>
    pc.variants?.some((v) => v?.slug === variantSlug),
  );
  if (!base) {
    throw new Error(`slug ${variantSlug} not found in base classes`);
  }
  return base.slug;
};

export const CharacterClassVariant: CharacterClassVariantResolvers = {
  href: (parent) => {
    const { slug } = parent;
    const baseURL = hrefer(
      baseUrls.classes,
      findBaseSlug(playerClasses, slug),
      false,
    );
    if (!baseURL) throw new Error(`Base class not found for slug: ${slug}`);
    return baseURL + `?variant=${slug.toLowerCase()}`;
  },
};
export default CharacterClassVariant;
