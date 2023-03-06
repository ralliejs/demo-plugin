import React from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import { useBlockState } from "@rallie/react";
import "./App.css";
import { demo } from "../blocks/demo";
import { Button } from "antd";
import { useTranslation } from "../i18n";

function App() {
  const count = useBlockState(demo, (state) => state.count);
  const { t } = useTranslation();
  const incrementCount = () => {
    demo.setState("incrementCount", (state) => {
      state.count++;
    });
  };
  return (
    <div id="demo" className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={incrementCount}>
          count is {count}
        </Button>
      </div>
      <p className="read-the-docs">{t("app.hint")}</p>
    </div>
  );
}

export default App;
