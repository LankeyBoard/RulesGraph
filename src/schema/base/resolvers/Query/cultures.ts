import { GraphQLError } from "graphql";
import culturesData from "../../../../rules/1b/cultures";
import type { Culture, QueryResolvers } from "./../../../types.generated";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Suppress TS2322 error for type mismatch
export const cultures: NonNullable<QueryResolvers["cultures"]> = async (
  _parent,
  _arg,
) => {
  const searchSlug = _arg.slug?.toLocaleLowerCase();

  let currentCultures: Culture[] = culturesData;
  if (_arg.version) {
    import(`../../../../rules/${_arg.version.slice(1)}/cultures`).then((c) => {
      currentCultures = c;
    });
  }

  if (searchSlug) {
    const result = currentCultures.find((culture) => {
      if (culture.slug.toLocaleLowerCase() === searchSlug) return culture;
    });
    if (result) return [result];
    else
      throw new GraphQLError(
        `Slug ${_arg.slug} not found in the cultures data`,
      );
  } else return [...currentCultures];
};
