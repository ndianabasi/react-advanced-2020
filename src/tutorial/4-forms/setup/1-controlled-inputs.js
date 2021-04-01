import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const [people, setPeople] = useState([]);

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(firstName, email);
    if (firstName && email) {
      setPeople([...people, { firstName, email, id: new Date().getTime() }]);
      setFirstName("");
      setEmail("");
    }
  };

  return (
    <>
      <h1>controlled inputs</h1>
      <article style={{ marginTop: "2rem" }}>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input type="text" name="firstName" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
        {people.map(person => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
