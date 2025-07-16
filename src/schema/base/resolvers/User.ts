import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  characters: (parent) => {
    return parent.characters ?? [];
  },
  createdCampaigns: (parent) => {
    return parent.createdCampaigns ?? [];
  },
  createdItemShops: (parent) => {
    return parent.createdItemShops ?? [];
  },
};
