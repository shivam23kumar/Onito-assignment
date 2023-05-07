// This code is a React component that displays a table of user information using data fetched from an API endpoint. 

import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
import ".././App.css";

function UserList() {
  const [users, setUsers] = useState([]);
// Declares a state variable for storing the user data, initialized with an empty array.
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:4000/api/users");
        setUsers(response.data);
        // Fetches user data from the API endpoint and updates the state variable with the response data.
        console.log("from userlist ===> ", response.data);
        $(document).ready(() => {
          $("#usersTable").DataTable();
        });
        // Initializes a DataTables plugin on the table element after the component has mounted.
      } catch (err) {
        console.log(err);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <table id="usersTable" className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Govt. ID</th>
            <th>Guardian</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.sex}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td>{user.govtId}</td>
              <td>{user.guardian}</td>
              <td>{user.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;
// Exports the UserList component for use in other parts of the application.