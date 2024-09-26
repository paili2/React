import { CSSProperties, ReactNode } from "react";

type gridLayoutProps = {
  columnNumber: number;
  component: ReactNode;
};

const GridLayout = (props: gridLayoutProps) => {
  const gridLayoutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumber},1fr)`,
    gap: "30px",
  };
  return <section style={gridLayoutStyle}>{props.component}</section>;
};

export default GridLayout;
