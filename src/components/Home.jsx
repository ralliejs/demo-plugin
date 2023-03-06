import { Button, App } from "antd";

// core的上下文直接从props注入
export default function Home(props) {
  const { modal } = App.useApp();
  return (
    <div>
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
