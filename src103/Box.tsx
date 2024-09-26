// box 배경색: pink, ornage, skyblue, red
// 사이즈: samll,medium,large -> 50*50, 100*100, 200*200

import { CSSProperties } from "react";

type BoxStyle = {
  backgroundcolor: "pink" | "orange" | "skyblue" | "red";
  size: "small" | "medium" | "large";
};

const Box = (props: BoxStyle) => {
  const sizeMap = {
    small: "50px",
    medium: "100px",
    large: "200px",
  };
  const BoxStyle1: CSSProperties = {
    backgroundColor: props.backgroundcolor,
    width: sizeMap[props.size],
    height: sizeMap[props.size],
  };

  return <div style={BoxStyle1}></div>;
};

export default Box;
