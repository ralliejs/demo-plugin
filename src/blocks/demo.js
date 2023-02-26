import { createBlock } from "@rallie/block";

export const demo = createBlock("plugin-demo")
  .initState({
    count: 0,
  })
  .relyOn(["core"])
  .onActivate(async () => {
    const core = demo.connect("core");
    if (!core.state.root) {
      const container = document.createElement("div");
      document.body.appendChild(container);
      core.setState("挂载root", (state) => {
        state.root = container;
      });
    }
    core.setState("注册首页", (state) => {
      state.slot.home = () => import("../components/Home");
    });
    core.setState("注册应用", (state) => {
      state.applications.push({
        name: "测试应用",
        path: "demo",
        children: [
          {
            index: true,
            loader: () => import("../components/App"),
          },
          {
            name: "菜单1",
            path: "level-1",
            loader: () => import("../components/App"),
          },
        ],
      });
    });
  });
