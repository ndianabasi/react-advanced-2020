import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current.textContent);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  console.log(refContainer);
  return (
    <>
      <h1>useRef</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input ref={refContainer} type="text" name="" id="" />
          <button type="submit">submit</button>
        </div>
      </form>

      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
