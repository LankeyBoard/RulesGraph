import NoviceFeatures from "../../../rules/1b/noviceFeatures";
import VeteranFeatures from "../../../rules/1b/veteranFeatures";
import { baseUrls, hrefer } from "../../../slugMapper";
import type { GenericFeatureResolvers } from "./../../types.generated";

const makeFeatureLink = (slug: string) => {
  if (NoviceFeatures.find((f) => f.slug === slug))
    return hrefer(baseUrls.noviceFeatures, slug, false);
  else if (VeteranFeatures.find((f) => f.slug === slug))
    return hrefer(baseUrls.veteranFeatures, slug, false);
  else return undefined;
};
const featureTyper = (slug: string) => {
  if (NoviceFeatures.find((f) => f.slug === slug)) return "NOVICE";
  else if (VeteranFeatures.find((f) => f.slug === slug)) return "VETERAN";
  else return undefined;
};

export const GenericFeature: GenericFeatureResolvers = {
  href: ({ slug }) => makeFeatureLink(slug),
  featureType: ({ slug }) => featureTyper(slug),
  isVariant: (object) => object.isVariant || false,
};
