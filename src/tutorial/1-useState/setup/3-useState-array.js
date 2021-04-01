import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = function (id) {
    setPeople(oldPeople => oldPeople.filter(person => person.id !== id));
  };

  return (
    <>
      <h2>useState array example</h2>
      <ul>
        {people.map(person => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button className="btn" onClick={() => removeItem(id)}>
                Remove
              </button>
            </div>
          );
        })}
      </ul>

      <button className="btn" onClick={() => setPeople([])}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
