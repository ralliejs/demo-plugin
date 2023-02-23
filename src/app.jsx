import { core } from "./blocks/core";

const start = async () => {
  core.setState("注册首页", (state) => {
    state.home = () => import("./components/App");
  });
  core.setState("注册应用", (state) => {
    state.applications.push({
      name: "测试应用",
      path: "demo",
      children: [
        {
          index: true,
          loader: () => import("./components/App"),
        },
        {
          name: "菜单1",
          path: "level-1",
          loader: () => import("./components/App"),
        },
      ],
    });
  });
  if (!core.state.root) {
    const container = document.createElement("div");
    document.body.appendChild(container);
    await core.setState("挂载root", (state) => {
      state.root = container;
    });
    console.log("挂载root");
  }
};

start();
