import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = function () {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("clean up");
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);
  return (
    <>
      <h1>useEffect cleanup</h1>
      <h2>window</h2>
      <h3>{size} PX</h3>
    </>
  );
};

export default UseEffectCleanup;
