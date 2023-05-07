import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
import ".././App.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:4000/api/users");
        setUsers(response.data);
        console.log("from userlist ===> ", response.data);
        $(document).ready(() => {
          $("#usersTable").DataTable();
        });
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
// Name, Age/Sex, Mobile, Address, Govt ID, Guardian Details, Nationality
export default UserList;