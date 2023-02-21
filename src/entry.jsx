import { registerBlock } from "@rallie/block";
import { demo } from "./blocks/plugin-demo";
import { core } from "./blocks/core";

registerBlock(demo)
  .relyOn(["core"])
  .onActivate(() => {
    core.setState("注册首页", (state) => {
      state.home = import("./components/App");
    });
    core.setState("注册应用", (state) => {
      state.applications.push({
        name: "样例",
        path: "demo",
        loader: import("./components/App"),
      });
    });
  });

demo.run((env) => {
  if (env.isEntry) {
    import("./dev").then((app) => {
      app.runInNonEntryMode(env);
    });
  }
});
