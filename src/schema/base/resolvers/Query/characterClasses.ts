import { playerClasses } from "../../../../rules/playerClasses";
import type { QueryResolvers } from "./../../../types.generated";
import { GraphQLError } from "graphql";

export const characterClasses: NonNullable<QueryResolvers['characterClasses']> = async (_parent, _arg) => {
  const searchSlug = _arg.slug?.toLocaleLowerCase();
  if (searchSlug) {
    const result = playerClasses.find((playerClass) => {
      if (playerClass.slug.toLocaleLowerCase() === searchSlug)
        return playerClass;
    });
    if (result) return [result];
    else
      throw new GraphQLError(
        `Slug ${_arg.slug} not found in the player classes`,
      );
  } else return [...playerClasses];
};
