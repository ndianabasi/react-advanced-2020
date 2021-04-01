import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  //console.log(value, setValue);
  const handleClick = () => {
    if (text === "random title") {
      setText("new title");
    } else setText("random title");
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick} type="button">
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
