import type {
  CharacterClass,
  CharacterClassFeature,
  CharacterClassVariant,
  Culture,
  CultureVariant,
  Lineage,
  LineageVariant,
} from "../schema/types.generated";

/**
 * Combine a base CharacterClass with a CharacterClassVariant.
 * - Any scalar/field present on variant replaces the corresponding field on base.
 * - Features are merged:
 *   - If a variant feature slug matches a base feature slug, the base feature is replaced.
 *   - If a variant feature slug does not exist on base, it is inserted below the last feature
 *     that has the same `level`. If no feature with that level exists, the variant feature is
 *     appended to the end.
 *
 * Returns a new CharacterClass object (does not mutate inputs).
 */
export function variantClassCombiner(
  base: CharacterClass,
  variant: Partial<CharacterClassVariant>,
): CharacterClassVariant {
  if (!variant.title || variant.title === base.title) {
    throw new Error(
      `variant title cannot be ${variant.title} title cannot be empty or the same as the base class`,
    );
  }
  if (!variant.slug || variant.slug === base.slug) {
    throw new Error(
      `variant slug cannot be ${variant.slug} slug cannot be empty or the same as the base class`,
    );
  }

  delete base.variants;
  // shallow merge for top-level fields (variant overrides base)
  const merged: CharacterClassVariant = {
    ...base,
    // allow partial variant fields to overwrite base without using `any`
    ...variant,
  } as CharacterClassVariant;

  const isFeature = (
    f: CharacterClassFeature | null | undefined,
  ): f is CharacterClassFeature => f != null;

  const baseFeatures: CharacterClassFeature[] = Array.isArray(base.features)
    ? base.features.slice().filter(isFeature)
    : [];
  const variantFeatures: CharacterClassFeature[] = Array.isArray(
    variant.features,
  )
    ? variant.features.slice().filter(isFeature)
    : [];

  // If there are no variant features just return the shallow-merged class
  if (variantFeatures.length === 0) {
    merged.features = baseFeatures;
    return merged;
  }

  const combinedFeatures = baseFeatures.slice();

  for (const vFeat of variantFeatures) {
    vFeat.isVariant = true;
    // try to find existing feature with same slug
    const existingIndex = combinedFeatures.findIndex(
      (f) => f.slug === vFeat.slug,
    );

    if (existingIndex >= 0) {
      // replace existing feature entirely with the variant feature
      combinedFeatures[existingIndex] = vFeat;
    } else {
      // find last feature index that has the same level
      const sameLevelIndexes = combinedFeatures
        .map((f, i) => (f.level === vFeat.level ? i : -1))
        .filter((i) => i >= 0);

      let insertIndex = combinedFeatures.length; // default append
      if (sameLevelIndexes.length > 0) {
        insertIndex = sameLevelIndexes[sameLevelIndexes.length - 1] + 1;
      }

      combinedFeatures.splice(insertIndex, 0, vFeat);
    }
  }

  merged.features = combinedFeatures;
  return merged;
}

export function variantCultureCombiner(
  base: Culture,
  variant: Partial<CultureVariant>,
): CultureVariant {
  if (!variant.title || variant.title === base.title) {
    throw new Error(
      `variant title cannot be ${variant.title} title cannot be empty or the same as the base culture`,
    );
  }
  if (!variant.slug || variant.slug === base.slug) {
    throw new Error(
      `variant slug cannot be ${variant.slug} slug cannot be empty or the same as the base culture`,
    );
  }
  delete base.variants;
  // shallow merge for top-level fields (variant overrides base)
  const merged: CultureVariant = {
    ...base,
    ...variant,
  } as CultureVariant;

  // If there are no variant features just return the shallow-merged class
  if (!variant.traits || variant.traits.length === 0 || !base.traits) {
    return merged;
  }
  const combinedFeatures = base.traits.slice();

  for (const vFeat of variant.traits) {
    vFeat.isVariant = true;
    // try to find existing feature with same slug
    const existingIndex = combinedFeatures.findIndex(
      (f) => f.slug === vFeat.slug,
    );

    if (existingIndex >= 0) {
      // replace existing feature entirely with the variant feature
      combinedFeatures[existingIndex] = vFeat;
    } else {
      combinedFeatures.push(vFeat);
    }
  }

  merged.traits = combinedFeatures;
  return merged;
}

export function variantLineageCombiner(
  base: Lineage,
  variant: Partial<LineageVariant>,
): LineageVariant {
  if (!variant.title || variant.title === base.title) {
    throw new Error(
      `variant title cannot be ${variant.title} title cannot be empty or the same as the base culture`,
    );
  }
  if (!variant.slug || variant.slug === base.slug) {
    throw new Error(
      `variant slug cannot be ${variant.slug} slug cannot be empty or the same as the base culture`,
    );
  }
  delete base.variants;
  // shallow merge for top-level fields (variant overrides base)
  const merged: LineageVariant = {
    ...base,
    ...variant,
  } as LineageVariant;

  // If there are no variant features just return the shallow-merged class
  if (!variant.traits || variant.traits.length === 0) {
    return merged;
  }
  const combinedFeatures = base.traits.slice();

  for (const vFeat of variant.traits) {
    vFeat.isVariant = true;
    // try to find existing feature with same slug
    const existingIndex = combinedFeatures.findIndex(
      (f) => f.slug === vFeat.slug,
    );

    if (existingIndex >= 0) {
      // replace existing feature entirely with the variant feature
      combinedFeatures[existingIndex] = vFeat;
    } else {
      combinedFeatures.push(vFeat);
    }
  }

  merged.traits = combinedFeatures;
  return merged;
}
