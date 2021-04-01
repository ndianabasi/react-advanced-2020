import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const emptyPerson = { firstName: "", email: "", age: 0, id: null };

const ControlledInputs = () => {
  const [person, setPerson] = useState(emptyPerson);
  const [people, setPeople] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (person && person.age && person.firstName && person.email) {
      setPeople(people => {
        return [...people, person];
      });
      setPerson(emptyPerson);
    } else {
      console.log("empty values");
    }
  };

  const handleChange = e => {
    let value = e.target.value;
    const field = e.target.name;
    if (field === "age" && Number(value) < 0) {
      value = Number(value) * -1;
    }
    setPerson({ ...person, [field]: value, id: new Date().getTime().toString() });
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange} />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" value={person.email} onChange={handleChange} />
          </div>

          <div className="form-control">
            <label htmlFor="email">Age : </label>
            <input type="number" id="age" name="age" value={person.age} onChange={handleChange} />
          </div>

          <button type="submit" className="btn">
            add person
          </button>
          <button type="button" className="btn" onClick={() => setPerson(emptyPerson)}>
            reset person
          </button>
        </form>

        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>
                {firstName} ({age})
              </h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
