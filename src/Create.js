import React, { useState } from "react";
import baseUrl from "./baseUrl";
import { useNavigate } from "react-router-dom";

function Create() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveData = (e) => {
    e.preventDefault();
  
    fetch(`${baseUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  

  return (
    <div className="App">
      <h1>Create</h1>

      <input
        placeholder="name"
        onChange={handleChange}
        name="name"
        value={user.name}
      />
      <input
        placeholder="last name"
        onChange={handleChange}
        name="lastName"
        value={user.lastName}
      />

      <button onClick={saveData}>Save to MongoDB</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Create;
