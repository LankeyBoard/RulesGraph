import { GraphQLError } from "graphql";
import { culturesData } from "../../../../rules/cultures";
import type { QueryResolvers } from "./../../../types.generated";
export const cultures: NonNullable<QueryResolvers['cultures']> = async (
  _parent,
  _arg,
) => {
  const searchSlug = _arg.slug?.toLocaleLowerCase();
  if (searchSlug) {
    const result = culturesData.find((culture) => {
      if (culture.slug.toLocaleLowerCase() === searchSlug) return culture;
    });
    if (result) return [result];
    else
      throw new GraphQLError(
        `Slug ${_arg.slug} not found in the cultures data`,
      );
  } else return [...culturesData];
};
