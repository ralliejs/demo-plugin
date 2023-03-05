import { createBlock } from "@rallie/block";

// const delay = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, seconds * 1000);
//   });
// };

export const demo = createBlock("ralliejs/demo-plugin")
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
    // await delay(5);
    core.methods.registerPluginInfo({
      title: "样例插件",
      description: "这是一个样例插件",
    });
    core.setState("通过直接改状态的方式拓展宿主应用(不推荐)", (state) => {
      state.slots.home = () => import("../components/Home");
      state.applications.push({
        name: "样例应用",
        icon: async () => {
          const { BlockOutlined } = await import("@ant-design/icons");
          return {
            default: BlockOutlined,
          };
        },
        locale: `${demo.name}:menu.root`,
        path: "demo",
        children: [
          {
            index: true,
            loader: () => import("../components/App"),
          },
          {
            name: "一级菜单",
            locale: `${demo.name}:menu.firstChild`,
            path: "level-1",
            loader: () => import("../components/App"),
          },
        ],
      });
    });
  });
