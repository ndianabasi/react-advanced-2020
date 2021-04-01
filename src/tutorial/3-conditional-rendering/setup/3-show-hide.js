import React, { useState, useEffect } from "react";

const Header = () => {
  return <h1 style={{ marginBottom: "4rem" }}>show/hide</h1>;
};

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />

      <button className="btn" onClick={() => setShow(!show)}>
        Toggle visibility
      </button>

      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = function () {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size: {window.innerWidth}</h2>
    </div>
  );
};

export default ShowHide;
