import culturesData from "./rules/2a/cultures";
import generalRules from "./rules/2a/generalRules";
import NoviceFeatures from "./rules/2a/noviceFeatures";
import veteranFeatures from "./rules/2a/veteranFeatures";
import lineagesData from "./rules/2a/lineages";
import playerClasses from "./rules/2a/playerClasses";
import gmSections from "./rules/2a/gmSections";
import { Feature, GenericRule, SlugDict } from "./schema/types.generated";

export enum baseUrls {
  generalRules = "/rules/player_rules",
  cultures = "/rules/cultures",
  noviceFeatures = "/rules/generic_features/novice_features",
  veteranFeatures = "/rules/generic_features/veteran_features",
  lineages = "/rules/lineages",
  classes = "/rules/classes",
  gmRules = "/rules/gm_rules",
}

export const hrefer = (
  baseUrl: baseUrls | string,
  slug: string,
  isAnchor: boolean,
): string => {
  if (baseUrl.includes("#")) return baseUrl;
  if (!isAnchor) return `${baseUrl}/${slug}`;
  else return `${baseUrl}#${slug}`;
};

const SlugMapper = () => {
  const slugMap: Map<string, SlugDict> = new Map();

  const subRuleMapper = (
    rule: GenericRule | Feature,
    slugStr: string,
    map: Map<string, SlugDict>,
  ) => {
    map.set(rule.slug, {
      slug: rule.slug,
      title: rule.shortTitle || rule.title,
      url: hrefer(slugStr, rule.slug, true),
    });
    if ("subRules" in rule) {
      rule.subRules?.forEach((r) => {
        if (r) subRuleMapper(r, slugStr, map);
      });
    }
  };

  // General Rules
  generalRules.forEach((rule) => {
    const s = {
      slug: rule.slug,
      title: rule.shortTitle || rule.title,
      url: hrefer(baseUrls.generalRules, rule.slug, true),
    };
    slugMap.set(s.slug, s);
    subRuleMapper(rule, s.url, slugMap);
  });

  gmSections.forEach((rule) => {
    const s = {
      slug: rule.slug,
      title: rule.shortTitle || rule.title,
      url: hrefer(baseUrls.gmRules, rule.slug, true),
    };
    slugMap.set(s.slug, s);
    subRuleMapper(rule, s.url, slugMap);
  });

  culturesData.forEach((culture) => {
    const s = {
      slug: culture.slug,
      title: culture.shortTitle || culture.title,
      url: hrefer(baseUrls.cultures, culture.slug, false),
    };
    slugMap.set(s.slug, s);
    culture.traits?.forEach((trait) => {
      if (trait) subRuleMapper(trait, s.url, slugMap);
    });
  });

  //Novice Features
  NoviceFeatures.forEach((feature) => {
    slugMap.set(feature.slug, {
      slug: feature.slug,
      title: feature.shortTitle || feature.title,
      url: hrefer(baseUrls.noviceFeatures, feature.slug, false),
    });
  });
  //Veteran Features
  veteranFeatures.forEach((feature) => {
    slugMap.set(feature.slug, {
      slug: feature.slug,
      title: feature.shortTitle || feature.title,
      url: hrefer(baseUrls.veteranFeatures, feature.slug, false),
    });
  });

  //Lineages
  lineagesData.forEach((lineage) => {
    const s = {
      slug: lineage.slug,
      title: lineage.shortTitle || lineage.title,
      url: hrefer(baseUrls.lineages, lineage.slug, false),
    };
    slugMap.set(s.slug, s);
    lineage.traits?.forEach((trait) => {
      if (trait) subRuleMapper(trait, s.url, slugMap);
    });
  });

  // Player Classes
  playerClasses.forEach((playerClass) => {
    const s = {
      slug: playerClass.slug,
      title: playerClass.shortTitle || playerClass.title,
      url: hrefer(baseUrls.classes, playerClass.slug, false),
    };
    slugMap.set(s.slug, s);
    playerClass.features.forEach((classFeature) => {
      if (classFeature) {
        slugMap.set(classFeature.slug, {
          slug: classFeature.slug,
          title: classFeature.shortTitle || classFeature.title,
          url: hrefer(s.url, classFeature.slug, true),
        });
        classFeature.choices?.forEach((choice) => {
          if (choice.choiceRule && "slug" in choice.choiceRule)
            slugMap.set(choice.choiceRule.slug, {
              slug: choice.choiceRule.slug,
              title: choice.choiceRule.shortTitle || choice.choiceRule.title,
              url: hrefer(s.url, classFeature.slug, true),
            });
        });
      }
    });
  });

  return slugMap;
};
const mappedSlugs = SlugMapper();
export default mappedSlugs;
