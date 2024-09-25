import { CSSProperties } from "react";

type propstype1 = {
  backgroundcolor: "red" | "blue" | "orange" | "green";
  width: string;
  height: string;
  text: string;
};

const Box = (props: propstype1) => {
  const boxstyle: CSSProperties = {
    backgroundColor: props.backgroundcolor,
    width: props.width,
    height: props.height,
  };
  return <div style={boxstyle}>{props.text}</div>;
};

export default Box;
