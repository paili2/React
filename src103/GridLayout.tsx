import { CSSProperties } from "react";
import ButtonComponent from "./ButtonComponent";

type GridLayoutProps = {
  repeatNumber: number;
};

const GridLayout = (props: GridLayoutProps) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.repeatNumber},1fr)`,
    gap: "30px",
  };

  return (
    <section style={gridStyle}>
      <ButtonComponent backgroundColor="Primary" borderRadius="Hard" />
      <ButtonComponent backgroundColor="Primary" borderRadius="Smooth" />
      <ButtonComponent backgroundColor="Primary" borderRadius="Circle" />
      <ButtonComponent backgroundColor="Hover" borderRadius="Hard" />
      <ButtonComponent backgroundColor="Hover" borderRadius="Smooth" />
      <ButtonComponent backgroundColor="Hover" borderRadius="Circle" />
      <ButtonComponent backgroundColor="Deactive" borderRadius="Hard" />
      <ButtonComponent backgroundColor="Deactive" borderRadius="Smooth" />
      <ButtonComponent backgroundColor="Deactive" borderRadius="Circle" />
    </section>
  );
};
export default GridLayout;
