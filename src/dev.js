import { loadHtml } from "@rallie/load-html";
import { demo } from "./blocks/demo";

export const runInNonEntryMode = (env) => {
  env.use(
    loadHtml({
      entries: {
        core: "https://ralliejs.github.io/open-platform/index.html",
      },
    })
  );
  demo.activate(demo.name);
};
