import playerClasses from "../../../../rules/1b/playerClasses";
import type {
  CharacterClass,
  QueryResolvers,
} from "./../../../types.generated";
import { GraphQLError } from "graphql";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Suppress TS2322 error for type mismatch
export const characterClasses: NonNullable<
  QueryResolvers["characterClasses"]
> = async (_parent, _arg) => {
  let currentClasses: CharacterClass[] = playerClasses;
  if (_arg.version) {
    const classes = await import(
      `../../../../rules/${_arg.version.slice(1)}/playerClasses`
    );
    currentClasses = classes.default;
  }
  const searchSlug = _arg.slug?.toLocaleLowerCase();
  if (searchSlug) {
    const result = currentClasses.find((playerClass) => {
      if (playerClass.slug.toLocaleLowerCase() === searchSlug)
        return playerClass;
    });
    if (result) return [result];
    else
      throw new GraphQLError(
        `Slug ${_arg.slug} not found in the player classes`,
      );
  } else return currentClasses;
};
