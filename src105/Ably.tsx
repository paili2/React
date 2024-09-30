import { CSSProperties, useState } from "react";

export type AblyProps = { name: string; price: number };

const Ably = (props: AblyProps) => {
  const box: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px solid grey",
    width: "500px",
  };
  const [num, setNum] = useState(1);

  const plusClick = () => {
    setNum((prev) => prev + 1);
  };
  const minusClick = () => {
    setNum((prev) => (prev == 1 ? 1 : prev - 1));
  };

  return (
    <div style={box}>
      <div>
        <button onClick={minusClick}>-</button>
        <span>{num}</span>
        <button onClick={plusClick}>+</button>
      </div>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <span>{props.price * num}</span>
      </div>
    </div>
  );
};

export default Ably;
