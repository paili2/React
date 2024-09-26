import { CSSProperties } from "react";

type ButtonProps = {
  backgroundColor: "primary" | "hover" | "deactive";
  borderRadius: "Hard" | "Smooth" | "Circle";
};

const Button2 = (props: ButtonProps) => {
  const backgroundColorMap = {
    primary: "red",
    hover: "pink",
    deactive: "blue",
  };
  const borderRadiusMap = {
    Hard: "0px",
    Smooth: "20px",
    Circle: "100px",
  };
  const Button2Style: CSSProperties = {
    backgroundColor: backgroundColorMap[props.backgroundColor],
    borderRadius: borderRadiusMap[props.borderRadius],
    color: "white",
    width: "100px",
    height: "100px",
  };
  return <button style={Button2Style}>button</button>;
};
export default Button2;
