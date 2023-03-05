import { demo } from "./blocks/demo";

demo.run(async (env) => {
  if (env.isEntry) {
    const { loadHtml } = await import("@rallie/load-html");
    env.use(
      loadHtml({
        entries: {
          core: "https://ralliejs.github.io/open-platform/#core",
          // core: "http://localhost:8080/#core",
        },
      })
    );
    demo.activate(demo.name);
  }
});
