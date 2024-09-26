import { CSSProperties } from "react";

type Buttonprops = {
  backgroundColor: string;
  borderRadius: string;
  width: string;
  height: string;
};

const Button = (props: Buttonprops) => {
  const Buttonstyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    borderRadius: props.borderRadius,
    width: props.width,
    height: props.height,
  };
  return <button style={Buttonstyle}>1</button>;
};

export default Button;
