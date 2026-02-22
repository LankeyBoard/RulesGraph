import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import { DateTimeTypeDefinition } from "graphql-scalars";

const config: CodegenConfig = {
  schema: [DateTimeTypeDefinition, "**/schema.graphql"],
  generates: {
    "src/schema": defineConfig(),
  },
};
export default config;
