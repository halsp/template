import { Configuration, defineConfig } from "@halsp/cli";
import "@halsp/router";

export default defineConfig(({ mode }) => {
  return <Configuration>{
    build: {
      sourceMap: mode == "development",
    },
    packageManager: "yarn",
  };
});
