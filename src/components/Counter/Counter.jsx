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
    <div className="counter-wrapper">
      <h4>Counter</h4>
      <div className="counter">
        <button className="button" onClick={handleDecrement}>
          -
        </button>
        <p>{counter}</p>
        <button className="button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
