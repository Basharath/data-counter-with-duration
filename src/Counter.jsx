import React, { useCallback, useEffect, useState } from "react";
import "./styles.css";

export default function Counter({ count, trigger, duration }) {
  const [number, setNumber] = useState(0);

  const increment = useCallback(() => {
    const counter = () => {
      setNumber(0);
      let n = count;
      let length = duration;
      let start = Date.now();
      let end = start + length;
      let interval = length / n;
      const sInt = setInterval(() => {
        let time = Date.now();
        if (time < end) {
          let count = Math.floor((time - start) / interval);
          setNumber(count);
        } else {
          setNumber(n);
          clearInterval(sInt);
        }
      }, interval);
    };

    counter();
  }, [count, duration]);

  useEffect(() => {
    if (trigger) {
      increment();
    }
  }, [trigger, increment]);

  return (
    <div className="counter-container">
      <div className="counter">
        <h2>Data counter</h2>
        <div className="number">{number}</div>
      </div>
    </div>
  );
}
