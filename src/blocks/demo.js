import { createBlock } from "@rallie/block";

export const demo = createBlock("demo-plugin")
  .initState({
    count: 0,
  })
  .relyOn(["core"])
  .onActivate(async () => {
    const core = demo.connect("core");
    await core.methods.addI18nResources({
      "zh-CN": () => import("../i18n/zh-CN"),
      "en-US": () => import("../i18n/en-US"),
    });
    core.setState("注册首页", (state) => {
      state.slots.home = () => import("../components/Home");
    });
    core.setState("注册应用", (state) => {
      state.applications.push({
        name: "测试应用",
        locale: "demo-plugin:menu.root",
        path: "demo",
        children: [
          {
            index: true,
            loader: () => import("../components/App"),
          },
          {
            name: "菜单1",
            locale: "demo-plugin:menu.firstChild",
            path: "level-1",
            loader: () => import("../components/App"),
          },
        ],
      });
    });
  });
