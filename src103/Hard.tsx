import { hover } from "@testing-library/user-event/dist/hover";
import { CSSProperties } from "react";

type Buttonprops = {
  backgroundcolor: "Hard" | "Smooth" | "Circle";
  borderadius: "Primary" | "Hover" | "Deactive";
};

const Button = (props: Buttonprops) => {
  const borderMap = {
    Hard: "0px",
    Smooth: "6px",
    Circle: "20px",
  };
};
