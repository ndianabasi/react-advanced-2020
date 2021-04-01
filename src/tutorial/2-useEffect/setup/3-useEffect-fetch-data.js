import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async function () {
    setLoading(true);
    const users = await fetch(url)
      .then(data => data.json())
      .then(users => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        return users;
      });
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const Loading = () => {
    return <p>Loading...</p>;
  };

  return (
    <>
      <h1>fetch data</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ul className="users">
            {users.map(user => {
              const { id, login, avatar_url, html_url } = user;
              return (
                <li key={id}>
                  <img src={avatar_url} alt={login} />
                  <div>
                    <h4>{login}</h4>
                    <a href={html_url}>Profile</a>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default UseEffectFetchData;
