import React, { useState } from "react";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  const [trigger, setTrigger] = useState(0);
  const [input, setInput] = useState(1000);
  const [duration, setDuration] = useState(1000);

  const handleClick = () => {
    setTrigger((prev) => prev + 1);
    setDuration(input);
  };
  return (
    <div className="app-container">
      <div className="app">
        <Counter trigger={trigger} count={1200} duration={duration} />
        <Counter trigger={trigger} count={2430} duration={duration} />
        <Counter trigger={trigger} count={20} duration={duration} />
      </div>
      <div className="duration">
        <label htmlFor="duration">Duration of count:</label>
        <input
          type="number"
          onChange={({ currentTarget }) => setInput(currentTarget.value * 1000)}
          placeholder="1 sec min"
          min="1"
        />
      </div>
      <button onClick={handleClick}>Start</button>
    </div>
  );
}
