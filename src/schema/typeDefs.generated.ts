import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "genericRules",
            loc: { start: 15, end: 27 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 28, end: 32 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 34, end: 40 },
                },
                loc: { start: 34, end: 40 },
              },
              directives: [],
              loc: { start: 28, end: 40 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "GenericRule",
                  loc: { start: 44, end: 55 },
                },
                loc: { start: 44, end: 55 },
              },
              loc: { start: 43, end: 56 },
            },
            loc: { start: 43, end: 57 },
          },
          directives: [],
          loc: { start: 15, end: 57 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "genericFeatures",
            loc: { start: 60, end: 75 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 76, end: 80 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 82, end: 88 },
                },
                loc: { start: 82, end: 88 },
              },
              directives: [],
              loc: { start: 76, end: 88 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "featureType",
                loc: { start: 90, end: 101 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "FeatureType",
                  loc: { start: 103, end: 114 },
                },
                loc: { start: 103, end: 114 },
              },
              directives: [],
              loc: { start: 90, end: 114 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "GenericFeature",
                  loc: { start: 118, end: 132 },
                },
                loc: { start: 118, end: 132 },
              },
              loc: { start: 117, end: 133 },
            },
            loc: { start: 117, end: 134 },
          },
          directives: [],
          loc: { start: 60, end: 134 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lineages",
            loc: { start: 137, end: 145 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 146, end: 150 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 152, end: 158 },
                },
                loc: { start: 152, end: 158 },
              },
              directives: [],
              loc: { start: 146, end: 158 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Lineage",
                  loc: { start: 162, end: 169 },
                },
                loc: { start: 162, end: 169 },
              },
              loc: { start: 161, end: 170 },
            },
            loc: { start: 161, end: 171 },
          },
          directives: [],
          loc: { start: 137, end: 171 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "cultures",
            loc: { start: 174, end: 182 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 183, end: 187 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 189, end: 195 },
                },
                loc: { start: 189, end: 195 },
              },
              directives: [],
              loc: { start: 183, end: 195 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Culture",
                  loc: { start: 199, end: 206 },
                },
                loc: { start: 199, end: 206 },
              },
              loc: { start: 198, end: 207 },
            },
            loc: { start: 198, end: 208 },
          },
          directives: [],
          loc: { start: 174, end: 208 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "characterClasses",
            loc: { start: 211, end: 227 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 228, end: 232 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 234, end: 240 },
                },
                loc: { start: 234, end: 240 },
              },
              directives: [],
              loc: { start: 228, end: 240 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "CharacterClass",
                  loc: { start: 244, end: 258 },
                },
                loc: { start: 244, end: 258 },
              },
              loc: { start: 243, end: 259 },
            },
            loc: { start: 243, end: 260 },
          },
          directives: [],
          loc: { start: 211, end: 260 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "searchAll",
            loc: { start: 263, end: 272 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "phrase",
                loc: { start: 273, end: 279 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 281, end: 287 },
                  },
                  loc: { start: 281, end: 287 },
                },
                loc: { start: 281, end: 288 },
              },
              directives: [],
              loc: { start: 273, end: 288 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "SearchResult",
                  loc: { start: 292, end: 304 },
                },
                loc: { start: 292, end: 304 },
              },
              loc: { start: 291, end: 305 },
            },
            loc: { start: 291, end: 306 },
          },
          directives: [],
          loc: { start: 263, end: 306 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slugMap",
            loc: { start: 309, end: 316 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SlugDict",
                loc: { start: 319, end: 327 },
              },
              loc: { start: 319, end: 327 },
            },
            loc: { start: 318, end: 328 },
          },
          directives: [],
          loc: { start: 309, end: 328 },
        },
      ],
      loc: { start: 0, end: 330 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "FeatureType",
        loc: { start: 337, end: 348 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOVICE",
            loc: { start: 353, end: 359 },
          },
          directives: [],
          loc: { start: 353, end: 359 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "VETERAN",
            loc: { start: 362, end: 369 },
          },
          directives: [],
          loc: { start: 362, end: 369 },
        },
      ],
      loc: { start: 332, end: 371 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Size", loc: { start: 378, end: 382 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "MINISCULE",
            loc: { start: 387, end: 396 },
          },
          directives: [],
          loc: { start: 387, end: 396 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TINY", loc: { start: 399, end: 403 } },
          directives: [],
          loc: { start: 399, end: 403 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SMALL", loc: { start: 406, end: 411 } },
          directives: [],
          loc: { start: 406, end: 411 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "MEDIUM",
            loc: { start: 414, end: 420 },
          },
          directives: [],
          loc: { start: 414, end: 420 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LARGE", loc: { start: 423, end: 428 } },
          directives: [],
          loc: { start: 423, end: 428 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GIGANTIC",
            loc: { start: 431, end: 439 },
          },
          directives: [],
          loc: { start: 431, end: 439 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "COLOSSAL",
            loc: { start: 442, end: 450 },
          },
          directives: [],
          loc: { start: 442, end: 450 },
        },
      ],
      loc: { start: 373, end: 452 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "RuleType", loc: { start: 459, end: 467 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "RULE", loc: { start: 472, end: 476 } },
          directives: [],
          loc: { start: 472, end: 476 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FLAVOR",
            loc: { start: 479, end: 485 },
          },
          directives: [],
          loc: { start: 479, end: 485 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EG", loc: { start: 488, end: 490 } },
          directives: [],
          loc: { start: 488, end: 490 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LIST", loc: { start: 493, end: 497 } },
          directives: [],
          loc: { start: 493, end: 497 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "LISTCOMPACT",
            loc: { start: 500, end: 511 },
          },
          directives: [],
          loc: { start: 500, end: 511 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CHOICE",
            loc: { start: 514, end: 520 },
          },
          directives: [],
          loc: { start: 514, end: 520 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "ATTACK",
            loc: { start: 523, end: 529 },
          },
          directives: [],
          loc: { start: 523, end: 529 },
        },
      ],
      loc: { start: 454, end: 531 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Stat", loc: { start: 538, end: 542 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "METTLE",
            loc: { start: 547, end: 553 },
          },
          directives: [],
          loc: { start: 547, end: 553 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "AGILITY",
            loc: { start: 556, end: 563 },
          },
          directives: [],
          loc: { start: 556, end: 563 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INTELLECT",
            loc: { start: 566, end: 575 },
          },
          directives: [],
          loc: { start: 566, end: 575 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "HEART", loc: { start: 578, end: 583 } },
          directives: [],
          loc: { start: 578, end: 583 },
        },
      ],
      loc: { start: 533, end: 585 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "Complexity",
        loc: { start: 592, end: 602 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "SIMPLE",
            loc: { start: 607, end: 613 },
          },
          directives: [],
          loc: { start: 607, end: 613 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "STANDARD",
            loc: { start: 616, end: 624 },
          },
          directives: [],
          loc: { start: 616, end: 624 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "COMPLEX",
            loc: { start: 627, end: 634 },
          },
          directives: [],
          loc: { start: 627, end: 634 },
        },
      ],
      loc: { start: 587, end: 636 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Action", loc: { start: 643, end: 649 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "ACTION",
            loc: { start: 654, end: 660 },
          },
          directives: [],
          loc: { start: 654, end: 660 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "COUNTER",
            loc: { start: 663, end: 670 },
          },
          directives: [],
          loc: { start: 663, end: 670 },
        },
      ],
      loc: { start: 638, end: 672 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "SearchResultSource",
        loc: { start: 679, end: 697 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "rule", loc: { start: 702, end: 706 } },
          directives: [],
          loc: { start: 702, end: 706 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "characterClass",
            loc: { start: 709, end: 723 },
          },
          directives: [],
          loc: { start: 709, end: 723 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "culture",
            loc: { start: 726, end: 733 },
          },
          directives: [],
          loc: { start: 726, end: 733 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "lineage",
            loc: { start: 736, end: 743 },
          },
          directives: [],
          loc: { start: 736, end: 743 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "noviceFeature",
            loc: { start: 746, end: 759 },
          },
          directives: [],
          loc: { start: 746, end: 759 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "veteranFeature",
            loc: { start: 762, end: 776 },
          },
          directives: [],
          loc: { start: 762, end: 776 },
        },
      ],
      loc: { start: 674, end: 778 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "Rule", loc: { start: 790, end: 794 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "title", loc: { start: 799, end: 804 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 806, end: 812 },
              },
              loc: { start: 806, end: 812 },
            },
            loc: { start: 806, end: 813 },
          },
          directives: [],
          loc: { start: 799, end: 813 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 816, end: 820 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 822, end: 828 },
              },
              loc: { start: 822, end: 828 },
            },
            loc: { start: 822, end: 829 },
          },
          directives: [],
          loc: { start: 816, end: 829 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "href", loc: { start: 832, end: 836 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 838, end: 844 },
            },
            loc: { start: 838, end: 844 },
          },
          directives: [],
          loc: { start: 832, end: 844 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortTitle",
            loc: { start: 847, end: 857 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 859, end: 865 },
            },
            loc: { start: 859, end: 865 },
          },
          directives: [],
          loc: { start: 847, end: 865 },
        },
      ],
      loc: { start: 780, end: 867 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "SearchResult",
        loc: { start: 874, end: 886 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: { kind: "Name", value: "Rule", loc: { start: 898, end: 902 } },
          loc: { start: 898, end: 902 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "title", loc: { start: 907, end: 912 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 914, end: 920 },
              },
              loc: { start: 914, end: 920 },
            },
            loc: { start: 914, end: 921 },
          },
          directives: [],
          loc: { start: 907, end: 921 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 924, end: 928 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 930, end: 936 },
              },
              loc: { start: 930, end: 936 },
            },
            loc: { start: 930, end: 937 },
          },
          directives: [],
          loc: { start: 924, end: 937 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "href", loc: { start: 940, end: 944 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 946, end: 952 },
            },
            loc: { start: 946, end: 952 },
          },
          directives: [],
          loc: { start: 940, end: 952 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortTitle",
            loc: { start: 955, end: 965 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 967, end: 973 },
            },
            loc: { start: 967, end: 973 },
          },
          directives: [],
          loc: { start: 955, end: 973 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "text", loc: { start: 976, end: 980 } },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RuleText",
                loc: { start: 983, end: 991 },
              },
              loc: { start: 983, end: 991 },
            },
            loc: { start: 982, end: 992 },
          },
          directives: [],
          loc: { start: 976, end: 992 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "page", loc: { start: 995, end: 999 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1001, end: 1007 },
            },
            loc: { start: 1001, end: 1007 },
          },
          directives: [],
          loc: { start: 995, end: 1007 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 1010, end: 1014 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "SearchResultSource",
              loc: { start: 1016, end: 1034 },
            },
            loc: { start: 1016, end: 1034 },
          },
          directives: [],
          loc: { start: 1010, end: 1034 },
        },
      ],
      loc: { start: 869, end: 1036 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RuleText",
        loc: { start: 1043, end: 1051 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 1056, end: 1060 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1062, end: 1068 },
              },
              loc: { start: 1062, end: 1068 },
            },
            loc: { start: 1062, end: 1069 },
          },
          directives: [],
          loc: { start: 1056, end: 1069 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 1072, end: 1076 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RuleType",
              loc: { start: 1078, end: 1086 },
            },
            loc: { start: 1078, end: 1086 },
          },
          directives: [],
          loc: { start: 1072, end: 1086 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "options",
            loc: { start: 1089, end: 1096 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1099, end: 1105 },
              },
              loc: { start: 1099, end: 1105 },
            },
            loc: { start: 1098, end: 1106 },
          },
          directives: [],
          loc: { start: 1089, end: 1106 },
        },
      ],
      loc: { start: 1038, end: 1108 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "GenericRule",
        loc: { start: 1115, end: 1126 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Rule",
            loc: { start: 1138, end: 1142 },
          },
          loc: { start: 1138, end: 1142 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1147, end: 1152 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1154, end: 1160 },
              },
              loc: { start: 1154, end: 1160 },
            },
            loc: { start: 1154, end: 1161 },
          },
          directives: [],
          loc: { start: 1147, end: 1161 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1164, end: 1168 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1170, end: 1176 },
              },
              loc: { start: 1170, end: 1176 },
            },
            loc: { start: 1170, end: 1177 },
          },
          directives: [],
          loc: { start: 1164, end: 1177 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "href",
            loc: { start: 1180, end: 1184 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1186, end: 1192 },
            },
            loc: { start: 1186, end: 1192 },
          },
          directives: [],
          loc: { start: 1180, end: 1192 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortTitle",
            loc: { start: 1195, end: 1205 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1207, end: 1213 },
            },
            loc: { start: 1207, end: 1213 },
          },
          directives: [],
          loc: { start: 1195, end: 1213 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "ruleType",
            loc: { start: 1216, end: 1224 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RuleType",
              loc: { start: 1226, end: 1234 },
            },
            loc: { start: 1226, end: 1234 },
          },
          directives: [],
          loc: { start: 1216, end: 1234 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 1237, end: 1241 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RuleText",
                loc: { start: 1244, end: 1252 },
              },
              loc: { start: 1244, end: 1252 },
            },
            loc: { start: 1243, end: 1253 },
          },
          directives: [],
          loc: { start: 1237, end: 1253 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rules",
            loc: { start: 1256, end: 1261 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "GenericRule",
                loc: { start: 1264, end: 1275 },
              },
              loc: { start: 1264, end: 1275 },
            },
            loc: { start: 1263, end: 1276 },
          },
          directives: [],
          loc: { start: 1256, end: 1276 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "list",
            loc: { start: 1279, end: 1283 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1286, end: 1292 },
              },
              loc: { start: 1286, end: 1292 },
            },
            loc: { start: 1285, end: 1293 },
          },
          directives: [],
          loc: { start: 1279, end: 1293 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortText",
            loc: { start: 1296, end: 1305 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1307, end: 1313 },
            },
            loc: { start: 1307, end: 1313 },
          },
          directives: [],
          loc: { start: 1296, end: 1313 },
        },
      ],
      loc: { start: 1110, end: 1315 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Culture", loc: { start: 1322, end: 1329 } },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Rule",
            loc: { start: 1341, end: 1345 },
          },
          loc: { start: 1341, end: 1345 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1350, end: 1355 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1357, end: 1363 },
              },
              loc: { start: 1357, end: 1363 },
            },
            loc: { start: 1357, end: 1364 },
          },
          directives: [],
          loc: { start: 1350, end: 1364 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1367, end: 1371 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1373, end: 1379 },
              },
              loc: { start: 1373, end: 1379 },
            },
            loc: { start: 1373, end: 1380 },
          },
          directives: [],
          loc: { start: 1367, end: 1380 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "href",
            loc: { start: 1383, end: 1387 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1389, end: 1395 },
            },
            loc: { start: 1389, end: 1395 },
          },
          directives: [],
          loc: { start: 1383, end: 1395 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortTitle",
            loc: { start: 1398, end: 1408 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1410, end: 1416 },
            },
            loc: { start: 1410, end: 1416 },
          },
          directives: [],
          loc: { start: 1398, end: 1416 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1419, end: 1430 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1433, end: 1439 },
              },
              loc: { start: 1433, end: 1439 },
            },
            loc: { start: 1432, end: 1440 },
          },
          directives: [],
          loc: { start: 1419, end: 1440 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stat",
            loc: { start: 1443, end: 1447 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1449, end: 1455 },
            },
            loc: { start: 1449, end: 1455 },
          },
          directives: [],
          loc: { start: 1443, end: 1455 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "languages",
            loc: { start: 1458, end: 1467 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1469, end: 1475 },
            },
            loc: { start: 1469, end: 1475 },
          },
          directives: [],
          loc: { start: 1458, end: 1475 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "traits",
            loc: { start: 1478, end: 1484 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "GenericRule",
                loc: { start: 1487, end: 1498 },
              },
              loc: { start: 1487, end: 1498 },
            },
            loc: { start: 1486, end: 1499 },
          },
          directives: [],
          loc: { start: 1478, end: 1499 },
        },
      ],
      loc: { start: 1317, end: 1501 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Lineage", loc: { start: 1508, end: 1515 } },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Rule",
            loc: { start: 1527, end: 1531 },
          },
          loc: { start: 1527, end: 1531 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1536, end: 1541 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1543, end: 1549 },
              },
              loc: { start: 1543, end: 1549 },
            },
            loc: { start: 1543, end: 1550 },
          },
          directives: [],
          loc: { start: 1536, end: 1550 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1553, end: 1557 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1559, end: 1565 },
              },
              loc: { start: 1559, end: 1565 },
            },
            loc: { start: 1559, end: 1566 },
          },
          directives: [],
          loc: { start: 1553, end: 1566 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "href",
            loc: { start: 1569, end: 1573 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1575, end: 1581 },
            },
            loc: { start: 1575, end: 1581 },
          },
          directives: [],
          loc: { start: 1569, end: 1581 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortTitle",
            loc: { start: 1584, end: 1594 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1596, end: 1602 },
            },
            loc: { start: 1596, end: 1602 },
          },
          directives: [],
          loc: { start: 1584, end: 1602 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1605, end: 1616 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1619, end: 1625 },
              },
              loc: { start: 1619, end: 1625 },
            },
            loc: { start: 1618, end: 1626 },
          },
          directives: [],
          loc: { start: 1605, end: 1626 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "size",
            loc: { start: 1629, end: 1633 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Size",
                loc: { start: 1636, end: 1640 },
              },
              loc: { start: 1636, end: 1640 },
            },
            loc: { start: 1635, end: 1641 },
          },
          directives: [],
          loc: { start: 1629, end: 1641 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "speed",
            loc: { start: 1644, end: 1649 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1651, end: 1654 },
            },
            loc: { start: 1651, end: 1654 },
          },
          directives: [],
          loc: { start: 1644, end: 1654 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stat",
            loc: { start: 1657, end: 1661 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1663, end: 1669 },
            },
            loc: { start: 1663, end: 1669 },
          },
          directives: [],
          loc: { start: 1657, end: 1669 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "traits",
            loc: { start: 1672, end: 1678 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "GenericRule",
                loc: { start: 1681, end: 1692 },
              },
              loc: { start: 1681, end: 1692 },
            },
            loc: { start: 1680, end: 1693 },
          },
          directives: [],
          loc: { start: 1672, end: 1693 },
        },
      ],
      loc: { start: 1503, end: 1695 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "GenericFeature",
        loc: { start: 1702, end: 1716 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Rule",
            loc: { start: 1728, end: 1732 },
          },
          loc: { start: 1728, end: 1732 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1737, end: 1742 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1744, end: 1750 },
              },
              loc: { start: 1744, end: 1750 },
            },
            loc: { start: 1744, end: 1751 },
          },
          directives: [],
          loc: { start: 1737, end: 1751 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1754, end: 1758 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1760, end: 1766 },
              },
              loc: { start: 1760, end: 1766 },
            },
            loc: { start: 1760, end: 1767 },
          },
          directives: [],
          loc: { start: 1754, end: 1767 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "href",
            loc: { start: 1770, end: 1774 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1776, end: 1782 },
            },
            loc: { start: 1776, end: 1782 },
          },
          directives: [],
          loc: { start: 1770, end: 1782 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortTitle",
            loc: { start: 1785, end: 1795 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1797, end: 1803 },
            },
            loc: { start: 1797, end: 1803 },
          },
          directives: [],
          loc: { start: 1785, end: 1803 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "staminaCost",
            loc: { start: 1806, end: 1817 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1819, end: 1822 },
            },
            loc: { start: 1819, end: 1822 },
          },
          directives: [],
          loc: { start: 1806, end: 1822 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "costsFortunesFavor",
            loc: { start: 1825, end: 1843 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1845, end: 1852 },
            },
            loc: { start: 1845, end: 1852 },
          },
          directives: [],
          loc: { start: 1825, end: 1852 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "actionType",
            loc: { start: 1855, end: 1865 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Action",
              loc: { start: 1867, end: 1873 },
            },
            loc: { start: 1867, end: 1873 },
          },
          directives: [],
          loc: { start: 1855, end: 1873 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "ruleType",
            loc: { start: 1876, end: 1884 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RuleType",
              loc: { start: 1886, end: 1894 },
            },
            loc: { start: 1886, end: 1894 },
          },
          directives: [],
          loc: { start: 1876, end: 1894 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 1897, end: 1901 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RuleText",
                loc: { start: 1904, end: 1912 },
              },
              loc: { start: 1904, end: 1912 },
            },
            loc: { start: 1903, end: 1913 },
          },
          directives: [],
          loc: { start: 1897, end: 1913 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortText",
            loc: { start: 1916, end: 1925 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1927, end: 1933 },
            },
            loc: { start: 1927, end: 1933 },
          },
          directives: [],
          loc: { start: 1916, end: 1933 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "multiSelect",
            loc: { start: 1936, end: 1947 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1949, end: 1956 },
            },
            loc: { start: 1949, end: 1956 },
          },
          directives: [],
          loc: { start: 1936, end: 1956 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "options",
            loc: { start: 1959, end: 1966 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1969, end: 1975 },
              },
              loc: { start: 1969, end: 1975 },
            },
            loc: { start: 1968, end: 1976 },
          },
          directives: [],
          loc: { start: 1959, end: 1976 },
        },
      ],
      loc: { start: 1697, end: 1978 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "SlugDict",
        loc: { start: 1985, end: 1993 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1998, end: 2002 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2004, end: 2010 },
              },
              loc: { start: 2004, end: 2010 },
            },
            loc: { start: 2004, end: 2011 },
          },
          directives: [],
          loc: { start: 1998, end: 2011 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2014, end: 2019 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2021, end: 2027 },
              },
              loc: { start: 2021, end: 2027 },
            },
            loc: { start: 2021, end: 2028 },
          },
          directives: [],
          loc: { start: 2014, end: 2028 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2031, end: 2034 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2036, end: 2042 },
              },
              loc: { start: 2036, end: 2042 },
            },
            loc: { start: 2036, end: 2043 },
          },
          directives: [],
          loc: { start: 2031, end: 2043 },
        },
      ],
      loc: { start: 1980, end: 2045 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Options", loc: { start: 2052, end: 2059 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pick",
            loc: { start: 2064, end: 2068 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 2070, end: 2073 },
            },
            loc: { start: 2070, end: 2073 },
          },
          directives: [],
          loc: { start: 2064, end: 2073 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "options",
            loc: { start: 2076, end: 2083 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2086, end: 2092 },
                  },
                  loc: { start: 2086, end: 2092 },
                },
                loc: { start: 2086, end: 2093 },
              },
              loc: { start: 2085, end: 2094 },
            },
            loc: { start: 2085, end: 2095 },
          },
          directives: [],
          loc: { start: 2076, end: 2095 },
        },
      ],
      loc: { start: 2047, end: 2097 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Weapons", loc: { start: 2104, end: 2111 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "melee",
            loc: { start: 2116, end: 2121 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Options",
              loc: { start: 2123, end: 2130 },
            },
            loc: { start: 2123, end: 2130 },
          },
          directives: [],
          loc: { start: 2116, end: 2130 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "ranged",
            loc: { start: 2133, end: 2139 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Options",
              loc: { start: 2141, end: 2148 },
            },
            loc: { start: 2141, end: 2148 },
          },
          directives: [],
          loc: { start: 2133, end: 2148 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "special",
            loc: { start: 2151, end: 2158 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Options",
              loc: { start: 2160, end: 2167 },
            },
            loc: { start: 2160, end: 2167 },
          },
          directives: [],
          loc: { start: 2151, end: 2167 },
        },
      ],
      loc: { start: 2099, end: 2169 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Training",
        loc: { start: 2176, end: 2184 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "armor",
            loc: { start: 2189, end: 2194 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2197, end: 2203 },
              },
              loc: { start: 2197, end: 2203 },
            },
            loc: { start: 2196, end: 2204 },
          },
          directives: [],
          loc: { start: 2189, end: 2204 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shields",
            loc: { start: 2207, end: 2214 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2217, end: 2223 },
              },
              loc: { start: 2217, end: 2223 },
            },
            loc: { start: 2216, end: 2224 },
          },
          directives: [],
          loc: { start: 2207, end: 2224 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "weapons",
            loc: { start: 2227, end: 2234 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Weapons",
              loc: { start: 2236, end: 2243 },
            },
            loc: { start: 2236, end: 2243 },
          },
          directives: [],
          loc: { start: 2227, end: 2243 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "magic",
            loc: { start: 2246, end: 2251 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Options",
              loc: { start: 2253, end: 2260 },
            },
            loc: { start: 2253, end: 2260 },
          },
          directives: [],
          loc: { start: 2246, end: 2260 },
        },
      ],
      loc: { start: 2171, end: 2262 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Range", loc: { start: 2269, end: 2274 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "min", loc: { start: 2279, end: 2282 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2284, end: 2287 },
              },
              loc: { start: 2284, end: 2287 },
            },
            loc: { start: 2284, end: 2288 },
          },
          directives: [],
          loc: { start: 2279, end: 2288 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "max", loc: { start: 2291, end: 2294 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2296, end: 2299 },
              },
              loc: { start: 2296, end: 2299 },
            },
            loc: { start: 2296, end: 2300 },
          },
          directives: [],
          loc: { start: 2291, end: 2300 },
        },
      ],
      loc: { start: 2264, end: 2302 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Damage", loc: { start: 2309, end: 2315 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dice",
            loc: { start: 2320, end: 2324 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2326, end: 2329 },
              },
              loc: { start: 2326, end: 2329 },
            },
            loc: { start: 2326, end: 2330 },
          },
          directives: [],
          loc: { start: 2320, end: 2330 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "count",
            loc: { start: 2333, end: 2338 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2340, end: 2343 },
              },
              loc: { start: 2340, end: 2343 },
            },
            loc: { start: 2340, end: 2344 },
          },
          directives: [],
          loc: { start: 2333, end: 2344 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stat",
            loc: { start: 2347, end: 2351 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Stat",
              loc: { start: 2353, end: 2357 },
            },
            loc: { start: 2353, end: 2357 },
          },
          directives: [],
          loc: { start: 2347, end: 2357 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 2360, end: 2364 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2367, end: 2373 },
              },
              loc: { start: 2367, end: 2373 },
            },
            loc: { start: 2366, end: 2374 },
          },
          directives: [],
          loc: { start: 2360, end: 2374 },
        },
      ],
      loc: { start: 2304, end: 2376 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CharacterClassFeature",
        loc: { start: 2383, end: 2404 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Rule",
            loc: { start: 2416, end: 2420 },
          },
          loc: { start: 2416, end: 2420 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2425, end: 2430 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2432, end: 2438 },
              },
              loc: { start: 2432, end: 2438 },
            },
            loc: { start: 2432, end: 2439 },
          },
          directives: [],
          loc: { start: 2425, end: 2439 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 2442, end: 2446 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2448, end: 2454 },
              },
              loc: { start: 2448, end: 2454 },
            },
            loc: { start: 2448, end: 2455 },
          },
          directives: [],
          loc: { start: 2442, end: 2455 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "href",
            loc: { start: 2458, end: 2462 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2464, end: 2470 },
            },
            loc: { start: 2464, end: 2470 },
          },
          directives: [],
          loc: { start: 2458, end: 2470 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortTitle",
            loc: { start: 2473, end: 2483 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2485, end: 2491 },
            },
            loc: { start: 2485, end: 2491 },
          },
          directives: [],
          loc: { start: 2473, end: 2491 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "level",
            loc: { start: 2494, end: 2499 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2501, end: 2504 },
              },
              loc: { start: 2501, end: 2504 },
            },
            loc: { start: 2501, end: 2505 },
          },
          directives: [],
          loc: { start: 2494, end: 2505 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "staminaCost",
            loc: { start: 2508, end: 2519 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2521, end: 2524 },
              },
              loc: { start: 2521, end: 2524 },
            },
            loc: { start: 2521, end: 2525 },
          },
          directives: [],
          loc: { start: 2508, end: 2525 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "costsFortunesFavor",
            loc: { start: 2528, end: 2546 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 2548, end: 2555 },
              },
              loc: { start: 2548, end: 2555 },
            },
            loc: { start: 2548, end: 2556 },
          },
          directives: [],
          loc: { start: 2528, end: 2556 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "ruleType",
            loc: { start: 2559, end: 2567 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RuleType",
              loc: { start: 2569, end: 2577 },
            },
            loc: { start: 2569, end: 2577 },
          },
          directives: [],
          loc: { start: 2559, end: 2577 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "actionType",
            loc: { start: 2580, end: 2590 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Action",
              loc: { start: 2592, end: 2598 },
            },
            loc: { start: 2592, end: 2598 },
          },
          directives: [],
          loc: { start: 2580, end: 2598 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rules",
            loc: { start: 2601, end: 2606 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RuleText",
                loc: { start: 2609, end: 2617 },
              },
              loc: { start: 2609, end: 2617 },
            },
            loc: { start: 2608, end: 2618 },
          },
          directives: [],
          loc: { start: 2601, end: 2618 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "choices",
            loc: { start: 2621, end: 2628 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "GenericFeature",
                loc: { start: 2631, end: 2645 },
              },
              loc: { start: 2631, end: 2645 },
            },
            loc: { start: 2630, end: 2646 },
          },
          directives: [],
          loc: { start: 2621, end: 2646 },
        },
      ],
      loc: { start: 2378, end: 2648 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CharacterClass",
        loc: { start: 2655, end: 2669 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Rule",
            loc: { start: 2681, end: 2685 },
          },
          loc: { start: 2681, end: 2685 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2690, end: 2695 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2697, end: 2703 },
              },
              loc: { start: 2697, end: 2703 },
            },
            loc: { start: 2697, end: 2704 },
          },
          directives: [],
          loc: { start: 2690, end: 2704 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 2707, end: 2711 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2713, end: 2719 },
              },
              loc: { start: 2713, end: 2719 },
            },
            loc: { start: 2713, end: 2720 },
          },
          directives: [],
          loc: { start: 2707, end: 2720 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "href",
            loc: { start: 2723, end: 2727 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2729, end: 2735 },
            },
            loc: { start: 2729, end: 2735 },
          },
          directives: [],
          loc: { start: 2723, end: 2735 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortTitle",
            loc: { start: 2738, end: 2748 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2750, end: 2756 },
            },
            loc: { start: 2750, end: 2756 },
          },
          directives: [],
          loc: { start: 2738, end: 2756 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "complexity",
            loc: { start: 2759, end: 2769 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Complexity",
              loc: { start: 2771, end: 2781 },
            },
            loc: { start: 2771, end: 2781 },
          },
          directives: [],
          loc: { start: 2759, end: 2781 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 2784, end: 2795 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 2798, end: 2804 },
                },
                loc: { start: 2798, end: 2804 },
              },
              loc: { start: 2797, end: 2805 },
            },
            loc: { start: 2797, end: 2806 },
          },
          directives: [],
          loc: { start: 2784, end: 2806 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "health",
            loc: { start: 2809, end: 2815 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2817, end: 2820 },
              },
              loc: { start: 2817, end: 2820 },
            },
            loc: { start: 2817, end: 2821 },
          },
          directives: [],
          loc: { start: 2809, end: 2821 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "healthOnLevel",
            loc: { start: 2824, end: 2837 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2839, end: 2842 },
              },
              loc: { start: 2839, end: 2842 },
            },
            loc: { start: 2839, end: 2843 },
          },
          directives: [],
          loc: { start: 2824, end: 2843 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stamina",
            loc: { start: 2846, end: 2853 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2855, end: 2858 },
              },
              loc: { start: 2855, end: 2858 },
            },
            loc: { start: 2855, end: 2859 },
          },
          directives: [],
          loc: { start: 2846, end: 2859 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "staminaOnLevel",
            loc: { start: 2862, end: 2876 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2878, end: 2881 },
              },
              loc: { start: 2878, end: 2881 },
            },
            loc: { start: 2878, end: 2882 },
          },
          directives: [],
          loc: { start: 2862, end: 2882 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "staminaStat",
            loc: { start: 2885, end: 2896 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Stat",
                loc: { start: 2898, end: 2902 },
              },
              loc: { start: 2898, end: 2902 },
            },
            loc: { start: 2898, end: 2903 },
          },
          directives: [],
          loc: { start: 2885, end: 2903 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "training",
            loc: { start: 2906, end: 2914 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Training",
                loc: { start: 2916, end: 2924 },
              },
              loc: { start: 2916, end: 2924 },
            },
            loc: { start: 2916, end: 2925 },
          },
          directives: [],
          loc: { start: 2906, end: 2925 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attackStat",
            loc: { start: 2928, end: 2938 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Stat",
                  loc: { start: 2941, end: 2945 },
                },
                loc: { start: 2941, end: 2945 },
              },
              loc: { start: 2941, end: 2946 },
            },
            loc: { start: 2940, end: 2947 },
          },
          directives: [],
          loc: { start: 2928, end: 2947 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "range",
            loc: { start: 2950, end: 2955 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Range",
                loc: { start: 2957, end: 2962 },
              },
              loc: { start: 2957, end: 2962 },
            },
            loc: { start: 2957, end: 2963 },
          },
          directives: [],
          loc: { start: 2950, end: 2963 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "damage",
            loc: { start: 2966, end: 2972 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Damage",
                loc: { start: 2974, end: 2980 },
              },
              loc: { start: 2974, end: 2980 },
            },
            loc: { start: 2974, end: 2981 },
          },
          directives: [],
          loc: { start: 2966, end: 2981 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "features",
            loc: { start: 2984, end: 2992 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "CharacterClassFeature",
                  loc: { start: 2995, end: 3016 },
                },
                loc: { start: 2995, end: 3016 },
              },
              loc: { start: 2994, end: 3017 },
            },
            loc: { start: 2994, end: 3018 },
          },
          directives: [],
          loc: { start: 2984, end: 3018 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "extra",
            loc: { start: 3021, end: 3026 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ShifterForms",
              loc: { start: 3028, end: 3040 },
            },
            loc: { start: 3028, end: 3040 },
          },
          directives: [],
          loc: { start: 3021, end: 3040 },
        },
      ],
      loc: { start: 2650, end: 3042 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShifterForms",
        loc: { start: 3049, end: 3061 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "forms",
            loc: { start: 3066, end: 3071 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ShifterForm",
                loc: { start: 3074, end: 3085 },
              },
              loc: { start: 3074, end: 3085 },
            },
            loc: { start: 3073, end: 3086 },
          },
          directives: [],
          loc: { start: 3066, end: 3086 },
        },
      ],
      loc: { start: 3044, end: 3088 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShifterForm",
        loc: { start: 3095, end: 3106 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Rule",
            loc: { start: 3118, end: 3122 },
          },
          loc: { start: 3118, end: 3122 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 3127, end: 3132 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3134, end: 3140 },
              },
              loc: { start: 3134, end: 3140 },
            },
            loc: { start: 3134, end: 3141 },
          },
          directives: [],
          loc: { start: 3127, end: 3141 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 3144, end: 3148 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3150, end: 3156 },
              },
              loc: { start: 3150, end: 3156 },
            },
            loc: { start: 3150, end: 3157 },
          },
          directives: [],
          loc: { start: 3144, end: 3157 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "href",
            loc: { start: 3160, end: 3164 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3166, end: 3172 },
            },
            loc: { start: 3166, end: 3172 },
          },
          directives: [],
          loc: { start: 3160, end: 3172 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortTitle",
            loc: { start: 3175, end: 3185 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3187, end: 3193 },
            },
            loc: { start: 3187, end: 3193 },
          },
          directives: [],
          loc: { start: 3175, end: 3193 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "size",
            loc: { start: 3196, end: 3200 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Size",
                loc: { start: 3202, end: 3206 },
              },
              loc: { start: 3202, end: 3206 },
            },
            loc: { start: 3202, end: 3207 },
          },
          directives: [],
          loc: { start: 3196, end: 3207 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attackStat",
            loc: { start: 3210, end: 3220 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Stat",
                loc: { start: 3222, end: 3226 },
              },
              loc: { start: 3222, end: 3226 },
            },
            loc: { start: 3222, end: 3227 },
          },
          directives: [],
          loc: { start: 3210, end: 3227 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "damage",
            loc: { start: 3230, end: 3236 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Damage",
                  loc: { start: 3239, end: 3245 },
                },
                loc: { start: 3239, end: 3245 },
              },
              loc: { start: 3238, end: 3246 },
            },
            loc: { start: 3238, end: 3247 },
          },
          directives: [],
          loc: { start: 3230, end: 3247 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "armor",
            loc: { start: 3250, end: 3255 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "shifterArmor",
              loc: { start: 3257, end: 3269 },
            },
            loc: { start: 3257, end: 3269 },
          },
          directives: [],
          loc: { start: 3250, end: 3269 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "features",
            loc: { start: 3272, end: 3280 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "shifterFeature",
                loc: { start: 3283, end: 3297 },
              },
              loc: { start: 3283, end: 3297 },
            },
            loc: { start: 3282, end: 3298 },
          },
          directives: [],
          loc: { start: 3272, end: 3298 },
        },
      ],
      loc: { start: 3090, end: 3300 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "shifterArmor",
        loc: { start: 3307, end: 3319 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stat",
            loc: { start: 3324, end: 3328 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Stat",
              loc: { start: 3330, end: 3334 },
            },
            loc: { start: 3330, end: 3334 },
          },
          directives: [],
          loc: { start: 3324, end: 3334 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "baseArmor",
            loc: { start: 3337, end: 3346 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 3348, end: 3351 },
              },
              loc: { start: 3348, end: 3351 },
            },
            loc: { start: 3348, end: 3352 },
          },
          directives: [],
          loc: { start: 3337, end: 3352 },
        },
      ],
      loc: { start: 3302, end: 3354 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "shifterFeature",
        loc: { start: 3361, end: 3375 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 3380, end: 3385 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3387, end: 3393 },
            },
            loc: { start: 3387, end: 3393 },
          },
          directives: [],
          loc: { start: 3380, end: 3393 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 3396, end: 3400 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3402, end: 3408 },
              },
              loc: { start: 3402, end: 3408 },
            },
            loc: { start: 3402, end: 3409 },
          },
          directives: [],
          loc: { start: 3396, end: 3409 },
        },
      ],
      loc: { start: 3356, end: 3411 },
    },
  ],
  loc: { start: 0, end: 3412 },
} as unknown as DocumentNode;
