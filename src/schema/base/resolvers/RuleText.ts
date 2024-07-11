import type   { RuleTextResolvers } from './../../types.generated';
export const RuleText: RuleTextResolvers = {
    __isTypeOf: (object) => verifyType(object)
};

function verifyType(object: object): boolean | Promise<boolean> {
    if("text" in object && typeof object.text === "string")
        return true;
      return false
}
