import { CSSProperties } from "react";

type CircleProps = { backgroundcolor: string };

const Circle = (props: CircleProps) => {
  const CircleStyle: CSSProperties = {
    backgroundColor: props.backgroundcolor,
    borderRadius: "9999px",
    width: "50px",
    height: "50px",
    border: "none",
  };
  return <div style={CircleStyle}></div>;
};

export default Circle;
