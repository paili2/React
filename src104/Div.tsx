import { CSSProperties } from "react";

type propstype = {
  backgroundColor: "red" | "blue" | "yellow";
};
const Div = (props: propstype) => {
  const colorstyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    borderRadius: "999px",
    width: "100px",
    height: "100px",
    border: "none",
  };
  return <div style={colorstyle} />;
};
export default Div;
