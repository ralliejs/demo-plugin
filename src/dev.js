import { loadHtml } from "@rallie/load-html";
import { demo } from "./blocks/demo";

export const runInNonEntryMode = (env) => {
  env.use(
    loadHtml({
      entries: {
        core: "http://localhost:8080/", // "https://ralliejs.github.io/open-platform/",
      },
    })
  );
  demo.activate(demo.name);
};
