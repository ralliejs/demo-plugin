import { Button, App } from "antd";
import homeImage from "../assets/home.svg";

// core的上下文直接从props注入
export default function Home(props) {
  const { modal } = App.useApp();
  return (
    <div
      style={{
        height: "80vh",
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Button
        type="primary"
        onClick={() => {
          modal.info({
            title: "Hello",
            content: props.text,
          });
        }}
      >
        {props.text}
      </Button>
    </div>
  );
}
