import React, { useState, useRef, useEffect } from "react";
import "./Temp.css";
const Temp = () => {
  const [temp, setTemp] = useState(15);
  const display = useRef(null);

  useEffect(() => {
    if (temp > 20) {
      display.current.classList.add("red");
    } else {
      display.current.classList.remove("red");
    }
  }, [temp]);

  const handleIncrement = () => {
    setTemp((temp) => temp + 1);
  };
  const handleDecrement = () => {
    setTemp((temp) => temp - 1);
  };
  return (
    <div className="temp-main-cont">
      <div className="display-cont" ref={display}>
        <h2 className="temp-display">{temp} °C</h2>
      </div>
      <div className="button-handler">
        <button
          onClick={handleDecrement}
          className="temp-handler button-display"
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          className="temp-handler button-display"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Temp;
