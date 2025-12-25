import { Prisma } from "@prisma/client";
import type { MutationResolvers } from "./../../../types.generated";
import convertChosenToJson from "../../../../extras/convertChosenToJson";
import convertPrismaToGraphQLCharacter from "../../../../extras/convertPrismaToGraphQLCharacter";

export const createCharacter: NonNullable<MutationResolvers['createCharacter']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("You must be logged in to create a character");
  }
  if (!_arg.input || _arg.input === undefined) {
    throw new Error("You must provide a character input");
  }

  const newCharacterData: Prisma.CharacterCreateInput = {
    ..._arg.input,
    currentHealth: _arg.input.currentHealth ?? undefined, // Ensure null is converted to undefined
    currentStamina: _arg.input.currentStamina ?? undefined, // Ensure null is converted to undefined
    chosen: _arg.input.chosen ? convertChosenToJson(_arg.input.chosen) : {},
    items: {
      create:
        _arg.input.items
          ?.filter((item) => item !== null && item !== undefined)
          .map((item) => ({
            title: item.title,
            isMagic: item.isMagic,
            rarity: item.rarity,
            uses: item.uses !== null ? item.uses : undefined,
            text: {
              create: item.text?.map((textItem) => ({
                text: textItem?.text || "", // Ensure text is a non-optional string
                type: textItem?.type,
              })),
            },
          })) || [],
    },
    languages: _arg.input.languages?.filter(
      (language) => language !== undefined,
    ) as string[],
    createdBy: { connect: { id: _ctx.currentUser.id } },
  };

  const newCharacter = await _ctx.prisma.character.create({
    data: newCharacterData,
    include: { createdBy: true, items: { include: { text: true } } },
  });

  const convertedCharacter = convertPrismaToGraphQLCharacter(newCharacter);
  console.debug(
    `new character created with createCharacter`,
    convertedCharacter,
  );
  console.info(
    `createCharacter mutation created ${convertedCharacter.name} with id: ${convertedCharacter.id}`,
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return convertedCharacter as any;
};
