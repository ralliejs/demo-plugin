import { registerBlock } from "@rallie/block";
import { demo } from "./blocks/demo";

registerBlock(demo)
  .initState({
    count: 0,
  })
  .relyOn(["core"])
  .onActivate(async () => {
    await import("./app");
  });

demo.run((env) => {
  if (env.isEntry) {
    import("./dev").then((app) => {
      app.runInNonEntryMode(env);
    });
  }
});
