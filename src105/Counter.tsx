// counter.tsx - 0 + 있음
// 10개 이상되면
// 버튼의 배경색깔이 빨간색으로 변하게 하셈

import { CSSProperties, useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const Plus = () => {
    setNum((prev) => prev + 1);
  };

  const Minus = () => {
    setNum((prev) => (prev == 0 ? 0 : prev - 1));
  };

  return (
    <div>
      <button onClick={Minus}>-</button>
      <button style={{ backgroundColor: num >= 10 ? "red" : "white" }}>
        {num}
      </button>
      <button onClick={Plus}>+</button>
    </div>
  );
};

export default Counter;
