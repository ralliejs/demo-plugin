import { core } from "./blocks/core";
import { React, AsyncComponent } from "./lib";

export const bootstrap = () => {
  core.setState("add demo route", (state) => {
    state.routes.applications.push({
      name: "样例",
      path: "demo",
      element: <AsyncComponent loader={import("./components/App")} />,
    });
  });
};
