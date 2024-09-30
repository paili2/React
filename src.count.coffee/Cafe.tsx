type CoffeeProps = {
  coffeeName: string;
  coffeeAmount: number;
  click: () => void;
};

const Cafe = (props: CoffeeProps) => {
  return (
    <span onClick={props.click}>
      {" "}
      {props.coffeeName}: {props.coffeeAmount}{" "}
    </span>
  );
};

export default Cafe;
