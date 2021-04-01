import React, { useState, useMemo } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const isDisabled = useMemo(() => value === 0, [value]);
  const isLimit = useMemo(() => value <= -10 || value >= 10, [value]);
  const isLowerLimit = useMemo(() => value <= -10, [value]);
  const isUpperLimit = useMemo(() => value >= 10, [value]);

  const complexIncrease = function () {
    setTimeout(() => {
      //setValue(value + 5);
      setValue(prevState => prevState + 5);
    }, 2000);
  };

  return (
    <>
      <h2>useState counter example</h2>
      <section style={{ margin: "4rem 0" }}>
        <h3>regular counter</h3>
        <h1 style={{ color: isLimit ? "red" : "unset" }}>{value}</h1>
        <button disabled={isLowerLimit} style={{ cursor: isLowerLimit ? "not-allowed" : "auto" }} className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button disabled={isDisabled} className={["btn"]} style={{ cursor: isDisabled ? "not-allowed" : "auto" }} onClick={() => setValue(0)}>
          reset
        </button>
        <button disabled={isUpperLimit} style={{ cursor: isUpperLimit ? "not-allowed" : "auto" }} className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h3>more complex counter</h3>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
