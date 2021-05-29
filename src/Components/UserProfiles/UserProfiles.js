import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserProfiles = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/users`).then((res) => setusers(res.data));
  }, []);

  return (
    <>
      <ul>
        {users.map((item, index) => {
          return (
            <li key={item.id}>
              <Link to={`/user-info/${item.id}`}>{item.username}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserProfiles;
