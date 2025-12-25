import { GraphQLError } from "graphql";
import NoviceFeatures from "../../../../rules/2a/noviceFeatures";
import veteranFeatures from "../../../../rules/2a/veteranFeatures";
import type { Feature, QueryResolvers } from "./../../../types.generated";

export const universalFeatures: NonNullable<QueryResolvers['universalFeatures']> = async (_parent, _arg) => {
  let currentNoviceFeatures: Feature[] = NoviceFeatures;
  let currentVeteranFeatures: Feature[] = veteranFeatures;
  if (_arg.version) {
    import(`../../../../rules/${_arg.version.slice(1)}/noviceFeatures`).then(
      (f) => {
        currentNoviceFeatures = f;
      },
    );
    import(`../../../../rules/${_arg.version.slice(1)}/veteranFeatures`).then(
      (f) => {
        currentVeteranFeatures = f;
      },
    );
  }
  const searchSlug = _arg.slug?.toLocaleLowerCase();
  const featureType = _arg.featureType;
  if (searchSlug) {
    const result = currentNoviceFeatures
      .concat(currentVeteranFeatures)
      .find((feature) => {
        if (feature.slug.toLocaleLowerCase() === searchSlug) return [feature];
      });
    if (result !== undefined) return [{ ...result }];
    else
      throw new GraphQLError(
        `Slug ${_arg.slug} not found in the generic features data`,
      );
  } else if (featureType) {
    if (featureType === "NOVICE") {
      return currentNoviceFeatures;
    } else if (featureType === "VETERAN") {
      return currentVeteranFeatures;
    } else return [];
  } else return currentNoviceFeatures.concat(currentVeteranFeatures);
};
