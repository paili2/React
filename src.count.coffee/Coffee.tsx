import { useState } from "react";
import Cafe from "./Cafe";

type coffeeProps = {
  amount: number;
  price: number;
};

const Coffee = () => {
  const [coffee, setCoffee] = useState({
    americano: { amount: 0, price: 1000 },
    latte: { amount: 0, price: 2000 },
    ade: { amount: 0, price: 3000 },
  });
  const changeApmericano = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        americano: {
          amount: prev.americano.amount + 1,
          price: prev.americano.price,
        },
      };
    });
  };
  const changeLatte = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        latte: { amount: prev.latte.amount + 1, price: prev.latte.price },
      };
    });
  };
  const changeAde = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        ade: { amount: prev.ade.amount + 1, price: prev.ade.price },
      };
    });
  };
  return (
    <div>
      <div>
        <Cafe
          click={changeApmericano}
          coffeeName="아메리카노"
          coffeeAmount={coffee.americano.amount}
        ></Cafe>
        <Cafe
          click={changeLatte}
          coffeeName="라떼"
          coffeeAmount={coffee.latte.amount}
        ></Cafe>
        <Cafe
          click={changeAde}
          coffeeName="에이드"
          coffeeAmount={coffee.ade.amount}
        ></Cafe>
      </div>
      <div>
        <span>
          총 갯수:
          {coffee.americano.amount + coffee.latte.amount + coffee.ade.amount}
        </span>
        <span>
          총 가격:
          {coffee.americano.amount * coffee.americano.price +
            coffee.latte.amount * coffee.latte.price +
            coffee.ade.amount * coffee.ade.price}
        </span>
      </div>
    </div>
  );
};

export default Coffee;
