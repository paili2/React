import { useState } from "react";
import Fruit from "./Fruit";

const Coffee = () => {
  const [coffee, setCoffee] = useState({
    americano: { amout: 0, price: 1000 },
    latte: { amout: 0, price: 1500 },
    ade: { amout: 0, price: 2000 },
  });

  const ChangeAmericano = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        americano: { amout: prev.americano.amout + 1, price: 1000 },
      };
    });
  };
  const ChangeLatte = () => {
    setCoffee((prev) => {
      return { ...prev, latte: { amout: prev.latte.amout + 1, price: 1500 } };
    });
  };

  const ChangeAde = () => {
    setCoffee((prev) => {
      return { ...prev, ade: { amout: prev.ade.amout + 1, price: 2000 } };
    });
  };

  return (
    <div>
      <Fruit
        click={ChangeAmericano}
        fruitName={"아메리카노"}
        fruitAmount={coffee.americano.amout}
      ></Fruit>
      <Fruit
        click={ChangeLatte}
        fruitName={"라떼"}
        fruitAmount={coffee.latte.amout}
      ></Fruit>
      <Fruit
        click={ChangeAde}
        fruitName={"에이드"}
        fruitAmount={coffee.ade.amout}
      ></Fruit>
      <div>
        <span>
          총 갯수:{" "}
          {coffee.americano.amout + coffee.latte.amout + coffee.ade.amout}
        </span>
        <span>
          총 가격{""}
          {coffee.americano.amout * coffee.americano.price +
            coffee.latte.amout * coffee.latte.price +
            coffee.ade.amout * coffee.ade.price}
        </span>
      </div>
    </div>
  );
};

export default Coffee;
