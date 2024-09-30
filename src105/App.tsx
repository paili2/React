import React, { useState } from "react";
import Button from "./Button";
import Counter from "./Counter";
import Ably from "./Ably";
import Test from "./Test";
import Cafe from "./Cafe";
import Coffee from "./Coffee";

function App() {
  const [total, setTotal] = useState(2);

  return (
    <div>
      {/* <Ably name="아이보리" price={15500}></Ably>
      <Ably name="그레이" price={20000}></Ably>
      <Test></Test> */}
      <Coffee></Coffee>
    </div>
  );
}

export default App;
