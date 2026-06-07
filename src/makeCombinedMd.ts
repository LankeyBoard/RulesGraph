import generalRules from "./rules/2a/generalRules";
import culturesData from "./rules/2a/cultures";
import lineagesData from "./rules/2a/lineages";
import playerClasses from "./rules/2a/playerClasses";
import noviceFeatures from "./rules/2a/noviceFeatures";
import veteranFeatures from "./rules/2a/veteranFeatures";
import gmSections from "./rules/2a/gmSections";
import allMonsters from "./rules/2a/allMonsters";
import spells from "./rules/2a/spells/spells";
import { GenericRule, Maybe, RuleText, List } from "./schema/types.generated";

const writeToFile = (contents: string, filename: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require("fs");
  fs.writeFile(filename + ".md", contents, (err: unknown) => {
    if (err) throw err;
  });
};

const textAreaToText = (textArea: Maybe<RuleText>[]): string => {
  let text = "";
  textArea.forEach((ta) => {
    if (!ta || ta === undefined || ta.text === undefined) return;
    switch (ta.type) {
      case "FLAVOR":
        text += "*" + stripLinks(ta.text) + "*\\\n";
        break;
      case "EG":
        text += "Eg: " + stripLinks(ta.text) + "\\\n";
        break;
      case undefined:
        text += stripLinks(ta.text) + "\\\n";
        break;
      case "RULE":
        text += stripLinks(ta.text) + "\\\n";
        break;
      default:
        text += ta.type + ": " + stripLinks(ta.text) + "\\\n";
    }
  });
  return text.slice(0, -2) + "\n";
};

const stripLinks = (s: string): string => {
  if (!s || typeof s !== "string") return s;
  return s.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");
};

const listToText = (list: Maybe<List>): string => {
  if (!list || list === undefined) return "";
  let text = list.label ? `label: ${list.label}\n` : "";
  list.items?.forEach((item) => (text += `- ${item}\n`));
  return text;
};

const listsToText = (lists: Maybe<List>[]): string => {
  let text = "";
  lists.forEach((list) => {
    text += listToText(list);
  });
  return text;
};

const ruleToText = (rule: Maybe<GenericRule>, depth: number): string => {
  if (!rule) return "";
  let text = "#".repeat(depth) + " " + rule.title + "\n";
  if (typeof rule.text !== "undefined" && rule.text !== null)
    text += textAreaToText(rule.text as Maybe<RuleText>[]);
  if (typeof rule.lists !== "undefined" && rule.lists !== null)
    text += listsToText(rule.lists as Maybe<List>[]);
  if (rule.subRules)
    rule.subRules.forEach((r) => {
      text += ruleToText(r, depth + 1);
    });
  return text + "\n";
};

const cultureToText = (c: any): string => {
  let out = `## ${c.title}\n`;
  if (c.description) out += `\n${(Array.isArray(c.description) ? c.description.map((d: any) => stripLinks(d)).join("\n\n") : stripLinks(c.description))}\n`;
  if (c.stat) out += `\nstat: ${stripLinks(c.stat)}\n`;
  if (c.languages) out += `languages: ${stripLinks(c.languages)}\n`;
  if (c.traits) {
    out += `\n### Traits\n`;
    c.traits.forEach((t: any) => {
      out += `#### ${t.title}\n`;
      if (t.text) out += `\n${(Array.isArray(t.text) ? t.text.map((x: any) => stripLinks(x.text || x)).join("\\\n") : stripLinks(t.text))}\n`;
      out += `\n`;
    });
  }
  return out + "\n";
};

const lineageToText = (l: any): string => {
  let out = `## ${l.title}\n`;
  if (l.description) out += `\n${(Array.isArray(l.description) ? l.description.map((d: any) => stripLinks(d)).join("\n\n") : stripLinks(l.description))}\n`;
  if (l.size) out += `\nsize: ${(Array.isArray(l.size) ? l.size.map((s: any) => stripLinks(s)).join(", ") : stripLinks(l.size))}\n`;
  if (l.speeds) out += `speed: ${(Array.isArray(l.speeds) ? l.speeds.map((s: any) => `${s.type || ""}:${s.speed}`).join(", ") : JSON.stringify(l.speeds))}\n`;
  if (l.stat) out += `\nstat: ${stripLinks(l.stat)}\n`;
  if (l.traits) {
    out += `\n### Traits\n`;
    l.traits.forEach((t: any) => {
      out += `#### ${t.title}\n`;
      if (t.text) out += `\n${(Array.isArray(t.text) ? t.text.map((x: any) => stripLinks(x.text || x)).join("\\\n") : stripLinks(t.text))}\n`;
      out += `\n`;
    });
  }
  return out + "\n";
};

const classToText = (c: any): string => {
  let out = `## ${c.title}\n`;
  if (c.description) out += `\n${(Array.isArray(c.description) ? c.description.join("\n\n") : c.description)}\n`;
  if (c.complexity) out += `\ncomplexity: ${c.complexity}\n`;
  if (typeof c.health !== "undefined") out += `health: ${c.health} (+${c.healthOnLevel || 0}/level)\n`;
  if (typeof c.stamina !== "undefined") out += `stamina: ${c.stamina} (+${c.staminaOnLevel || 0}/level)\n`;
  if (c.features) {
    out += `\n### Features\n`;
    c.features.forEach((f: any) => {
      out += `#### Level ${f.level} - ${f.title}\n`;
      if (f.text) out += `\n${textAreaToText(f.text)}\n`;
    });
  }
  return out + "\n";
};

const featureToText = (f: any): string => {
  let out = `## ${f.title}\n`;
  if (f.uses) out += `uses: ${JSON.stringify(f.uses)}\n`;
  if (f.text) out += `\n${textAreaToText(f.text)}\n`;
  return out + "\n";
};

const spellToText = (s: any): string => {
  let out = `## ${s.name} (Level ${s.level})\n`;
  if (s.type) out += `type: ${(Array.isArray(s.type) ? s.type.join(", ") : s.type)}\n`;
  if (s.castingTime) out += `castingTime: ${s.castingTime}\n`;
  if (s.duration) out += `duration: ${s.duration}\n`;
  if (s.range) out += `range: ${s.range}\n`;
  if (s.description) out += `\n${stripLinks(s.description)}\n`;
  out += "\n";
  return out;
};

const monsterToText = (m: any): string => {
  let out = `## ${m.name}${m.level ? ` (Level ${m.level})` : ""}\n`;
  if (m.size) out += `size: ${m.size}\n`;
  if (m.type) out += `type: ${m.type}\n`;
  if (m.description) out += `\n${(Array.isArray(m.description) ? m.description.map((d: any) => stripLinks(d.text || d)).join("\\\n") : stripLinks(m.description))}\n`;
  if (typeof m.health !== "undefined") out += `\nhealth: ${m.health}\n`;
  if (typeof m.armor !== "undefined") out += `armor: ${m.armor}\n`;
  if (m.Stats) out += `stats: ${JSON.stringify(m.Stats)}\n`;
  if (m.features) {
    out += `\n### Features\n`;
    m.features.forEach((f: any) => {
      out += `#### ${f.title}\n`;
      if (f.text) out += `\n${(Array.isArray(f.text) ? f.text.map((x: any) => stripLinks(x.text || x)).join("\\\n") : stripLinks(f.text))}\n`;
      out += `\n`;
    });
  }
  out += "\n";
  return out;
};

const writeAll = () => {
  let out = "# Rules 2a Combined\n\n";

  // Player Rules
  out += "# Player Rules\n\n";
  // generalRules (GenericRule[])
  generalRules.forEach((r) => {
    out += ruleToText(r as unknown as GenericRule, 2);
  });

  // cultures
  out += "# Cultures\n\n";
  culturesData.forEach((c: any) => {
    out += cultureToText(c);
  });

  // lineages
  out += "# Lineages\n\n";
  lineagesData.forEach((l: any) => {
    out += lineageToText(l);
  });

  // player classes
  out += "# Classes\n\n";
  playerClasses.forEach((c: any) => {
    out += classToText(c);
  });

  // spells
  out += "# Spells\n\n";
  spells.forEach((s: any) => {
    out += spellToText(s);
  });

  // novice & veteran features
  out += "# Novice Features\n\n";
  noviceFeatures.forEach((f: any) => {
    out += featureToText(f);
  });

  out += "# Veteran Features\n\n";
  veteranFeatures.forEach((f: any) => {
    out += featureToText(f);
  });

  // GM Rules
  out += "# GM Rules\n\n";
  gmSections.forEach((r: any) => {
    out += ruleToText(r as unknown as GenericRule, 2);
  });

  // Monsters
  out += "# Monsters\n\n";
  allMonsters.forEach((m: any) => {
    // some entries are groups with `monsters` sub-array
    if (m.monsters && Array.isArray(m.monsters)) {
      out += `## ${m.name}\n\n`;
      m.monsters.forEach((sub: any) => {
        out += monsterToText(sub);
      });
    } else {
      out += monsterToText(m);
    }
  });

  writeToFile(out, "rules_2a_combined");
};

function main() {
  writeAll();
}

main();

export {};
