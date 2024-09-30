import { useState } from "react";
import Fruit from "./Fruit";

const Test = () => {
  const [fruits, setFruits] = useState({
    apple: { amout: 0, price: 1000 },
    banana: { amout: 0, price: 1500 },
    orange: { amout: 0, price: 2000 },
  });

  const ChangeApple = () => {
    setFruits((prev) => {
      return { ...prev, apple: { amout: prev.apple.amout + 1, price: 1000 } };
    });
  };
  const ChangeBanana = () => {
    setFruits((prev) => {
      return { ...prev, banana: { amout: prev.banana.amout + 1, price: 1500 } };
    });
  };

  const ChangeOrange = () => {
    setFruits((prev) => {
      return { ...prev, orange: { amout: prev.orange.amout + 1, price: 2000 } };
    });
  };

  return (
    <div>
      <Fruit
        click={ChangeApple}
        fruitName={"사과"}
        fruitAmount={fruits.apple.amout}
      ></Fruit>
      <Fruit
        click={ChangeBanana}
        fruitName={"바나나"}
        fruitAmount={fruits.banana.amout}
      ></Fruit>
      <Fruit
        click={ChangeOrange}
        fruitName={"오렌지"}
        fruitAmount={fruits.orange.amout}
      ></Fruit>
      <div>
        <span>
          총 갯수:{" "}
          {fruits.apple.amout + fruits.banana.amout + fruits.orange.amout}
        </span>
        <span>
          총 가격{""}
          {fruits.apple.amout * fruits.apple.price +
            fruits.banana.amout * fruits.banana.price +
            fruits.orange.amout * fruits.orange.price}
        </span>
      </div>
    </div>
  );
};

export default Test;
