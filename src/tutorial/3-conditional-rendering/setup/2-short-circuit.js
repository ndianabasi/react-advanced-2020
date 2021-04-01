import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const Header = () => {
  return <h1 style={{ marginBottom: "4rem" }}>short circuit</h1>;
};

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  /* const firstValue = text || "hello world";
  const secondValue = text && "hello world"; */

  return (
    <>
      <Header />
      {/* <h2>{firstValue}</h2>
      <h2>{secondValue}</h2> */}
      <h2>{text || "john doe"}</h2>
      {isError && <h1>Error...</h1>}
      {isError ? <h1>There is an Error...</h1> : <p>There it is!</p>}

      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
    </>
  );
};

export default ShortCircuit;
