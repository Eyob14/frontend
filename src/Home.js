import React, { useState, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import baseUrl from "./baseUrl";
function Home() {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`${baseUrl}/get-users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>READ</h1>

      {users &&
        users.length > 0 &&
        users.map((user) => {
          return (
            <div>
              <h3>
                {user.name} {user.lastName}
              </h3>
            </div>
          );
        })}

      <button onClick={() => navigate("/create")}>Create</button>
    </div>
  );
}

export default Home;
