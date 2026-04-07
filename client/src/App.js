import React, { useState, useEffect } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = async () => {

    await fetch("http://localhost:5000/api/addUser", {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ name, email })

    });

    loadUsers();
  };

  const loadUsers = async () => {

    const res = await fetch("http://localhost:5000/api/users");
    const data = await res.json();

    setUsers(data);
  };

  useEffect(() => {

    loadUsers();

  }, []);

  return (

    <div style={{ padding: "50px" }}>

      <h2>User Registration</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={addUser}>Submit</button>

      <h3>Users</h3>

      <ul>

        {users.map((u, i) => (

          <li key={i}>
            {u.name} - {u.email}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;