import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:5000/api/auth/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <h2>Registered Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={index}>
              {/* <td>{u.lastName}</td> */}
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
