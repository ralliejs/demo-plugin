import { registerBlock } from "@rallie/block";
import { demo } from "./blocks/plugin-demo";
import { loadHtml } from "@rallie/load-html";

registerBlock(demo)
  .relyOn([
    {
      name: "core",
      data: {
        container: document.getElementById("root"),
      },
    },
  ])
  .onBootstrap(() => {
    return import("./app").then((app) => {
      app.bootstrap();
    });
  });

demo.run((env) => {
  if (env.isEntry) {
    env.use(
      loadHtml({
        entries: {
          core: "http://localhost:8080",
        },
      })
    );
    demo.activate(demo.name);
  }
});
