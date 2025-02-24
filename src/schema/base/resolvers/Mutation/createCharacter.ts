import type { MutationResolvers } from "./../../../types.generated";
export const createCharacter: NonNullable<
  MutationResolvers["createCharacter"]
> = async (_parent, _arg, _ctx) => {
  /* Implement Mutation.createCharacter resolver logic here */
  const newCharacter = await _ctx.prisma.character.create({
    data: {
      ..._arg.input,
      userId: _ctx.currentUser.id,
    },
  });
  newCharacter.createdBy = _ctx.currentUser.id;
  return newCharacter;
};
