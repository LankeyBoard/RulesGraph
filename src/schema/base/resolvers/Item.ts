import type { ItemResolvers } from "./../../types.generated";

export const Item: ItemResolvers = {
  slots: (parent) => {
    // If slots is null or undefined, return 0
    return typeof parent.slots === "number" ? parent.slots : 0;
  },
};
