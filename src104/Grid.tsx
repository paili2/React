import { CSSProperties } from "react";
import Button2 from "./Button2";

const Grid = () => {
  const gridstype: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "10px",
  };
  return (
    <section style={gridstype}>
      <Button2 backgroundColor="primary" borderRadius="Hard" />
      <Button2 backgroundColor="primary" borderRadius="Smooth" />
      <Button2 backgroundColor="primary" borderRadius="Circle" />
      <Button2 backgroundColor="hover" borderRadius="Hard" />
      <Button2 backgroundColor="hover" borderRadius="Smooth" />
      <Button2 backgroundColor="hover" borderRadius="Circle" />
      <Button2 backgroundColor="deactive" borderRadius="Hard" />
      <Button2 backgroundColor="deactive" borderRadius="Smooth" />
      <Button2 backgroundColor="deactive" borderRadius="Circle" />
    </section>
  );
};

export default Grid;
