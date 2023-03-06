import { createBlock } from "@rallie/block";

export const demo = createBlock("ralliejs/demo-plugin")
  .initState({
    count: 0,
  })
  .relyOn(["core"])
  .onActivate(async () => {
    const core = demo.connect("core");
    await core.methods.addI18nResources({
      "zh-CN": () => import("../i18n/resources/zh-CN"),
      "en-US": () => import("../i18n/resources/en-US"),
    });
    core.methods.registerSlot("home", () => import("../components/Home"));
    core.methods.registerPluginInfo({
      title: "plugin.title",
      description: "plugin.description",
    });
    core.methods.addApplication({
      name: "样例应用",
      icon: () => import("../components/BlockOutlinedIcon"),
      locale: "menu.root",
      path: "demo",
      hideInBreadcrumb: true,
      children: [
        {
          index: true,
          loader: () => import("../components/App"),
        },
        {
          name: "一级菜单",
          locale: "menu.firstChild",
          path: "level-1",
          loader: () => import("../components/App"),
        },
      ],
    });
  });
