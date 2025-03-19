import { GraphQLError } from "graphql";
import lineagesData from "../../../../rules/1b/lineages";
import type { Lineage, QueryResolvers } from "./../../../types.generated";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Suppress TS2322 error for type mismatch
export const lineages: NonNullable<QueryResolvers["lineages"]> = async (
  _parent,
  _arg,
) => {
  const searchSlug = _arg.slug?.toLocaleLowerCase();
  let currentLineages: Lineage[] = lineagesData;
  if (_arg.version) {
    import(`../../../../rules/${_arg.version.slice(1)}/lineages`).then((l) => {
      currentLineages = l;
    });
  }
  if (searchSlug) {
    const result = currentLineages.find((lineage) => {
      if (lineage.slug.toLocaleLowerCase() === searchSlug) return lineage;
    });
    if (result) return [result];
    else
      throw new GraphQLError(
        `Slug ${_arg.slug} not found in the lineages data`,
      );
  } else return [...currentLineages];
};
