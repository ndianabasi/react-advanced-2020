import React, { useState, useEffect } from "react";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});
  const [requestedUser, setRequestedUser] = useState("");
  const url = `https://api.github.com/users/${requestedUser ? requestedUser : "QuincyLarson"}`;

  const Header = () => {
    return <h1 style={{ marginBottom: "4rem" }}>multiple returns</h1>;
  };

  const ResetButton = () => {
    return (
      <button
        className="btn"
        onClick={() => {
          setRequestedUser("");
          setIsError(false);
        }}>
        Reset
      </button>
    );
  };

  const doError = () => {
    setIsError(true);
    setIsLoading(false);
    setUser({});
  };

  const getUser = url => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(user => {
          console.log("user obtained within useEffect");
          console.log(user);
          if (!user.login) {
            doError();
            reject(user);
            return;
          }
          setUser(user);
          setIsLoading(false);
          setRequestedUser(user.login);
          resolve(user);
        })
        .catch(error => {
          console.log("useEffect error");
          console.log(error);
          doError();
          reject(error);
        });
    });
  };

  useEffect(() => {
    console.log("useEffect starting");
    getUser(url);
  }, [requestedUser]);

  if (isLoading) {
    return (
      <React.Fragment>
        <Header />
        <div>
          <h2>Loading...</h2>
        </div>
      </React.Fragment>
    );
  } else if (isError) {
    return (
      <React.Fragment>
        <Header />
        <div>
          <h2>Error...</h2>
        </div>
        <ResetButton />
      </React.Fragment>
    );
  } else {
    return (
      <>
        <Header />
        <h2>{user.login}</h2>
        <img style={{ width: "150px", borderRadius: "75px" }} src={user.avatar_url} alt={user.login} />
        <form style={{ marginTop: "4rem" }}>
          <label htmlFor="user">Enter username: </label>
          <input type="text" id="user" onChange={e => setRequestedUser(e.target.value)} />
        </form>
      </>
    );
  }
};

export default MultipleReturns;
