import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter === 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <button className="counter__minus-sign" onClick={handleDecrement}>
        -
      </button>
      <p>{counter}</p>
      <button className="counter__plus-sign" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};
export default Counter;
