import { GraphQLError } from "graphql";
import generalRules from "../../../../rules/1b/generalRules";
import type { GenericRule, QueryResolvers } from "./../../../types.generated";
export const genericRules: NonNullable<QueryResolvers["genericRules"]> = async (
  _parent,
  _arg
) => {
  let currentRules: GenericRule[] = generalRules;
  if (_arg.version) {
    import(`../../../../rules/${_arg.version.slice(1)}/generalRules`).then(
      (r) => {
        currentRules = r;
      }
    );
  }
  const searchSlug = _arg.slug?.toLocaleLowerCase();
  if (searchSlug) {
    const result = currentRules.find((rule) => {
      if (rule.slug.toLocaleLowerCase() === searchSlug) return rule;
    });
    if (result) return [result];
    else
      throw new GraphQLError(
        `Slug ${_arg.slug} not found in the general rules data`
      );
  } else return [...currentRules];
};
