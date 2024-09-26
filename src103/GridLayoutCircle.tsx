import { CSSProperties } from "react";
import Circle from "./Circle";

const GridLayoutCircle = () => {
  const gridstyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: "50px",
  };
  return (
    <section style={gridstyle}>
      {[
        "red",
        "blue",
        "green",
        "pink",
        "grey",
        "skyblue",
        "indigo",
        "purple",
        "orange",
      ].map((v) => (
        <Circle backgroundcolor={v} />
      ))}
    </section>
  );
};
