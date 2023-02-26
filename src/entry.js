import { demo } from "./blocks/demo";

demo.run((env) => {
  if (env.isEntry) {
    import("./dev").then((app) => {
      app.runInNonEntryMode(env);
    });
  }
});
