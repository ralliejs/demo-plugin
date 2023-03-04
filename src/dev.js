import { loadHtml } from "@rallie/load-html";
import { demo } from "./blocks/demo";

export const runInNonEntryMode = (env) => {
  env.use(
    loadHtml({
      entries: {
        core: "https://ralliejs.github.io/open-platform/#",
        // core: "http://localhost:8080/#core",
      },
    })
  );
  demo.activate(demo.name);
};
