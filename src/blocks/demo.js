import { createBlock } from "@rallie/block";

export const demo = createBlock("ralliejs/demo-plugin")
  .initState({
    count: 0,
  })
  .relyOn(["core"])
  .onActivate(async () => {
    const {
      addI18nResources,
      registerSlot,
      registerPluginInfo,
      addApplication,
    } = demo.connect("core").methods;
    await addI18nResources({
      "zh-CN": () => import("../i18n/resources/zh-CN"),
      "en-US": () => import("../i18n/resources/en-US"),
    });
    registerSlot("home", () => import("../components/Home"));
    registerPluginInfo({
      title: "plugin.title",
      description: "plugin.description",
    });
    addApplication({
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
