import React, { useEffect, useState } from "react";
import Navbar from "./../Welcome/Navbar";
import "./User.css";
import avatar from "./../../images/avatar.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();
  console.log("params", params);
  const [user, setuser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${params.id}`)
      .then((res) => setuser(res.data));
    // .then((res) => console.log(user));
  }, []);

  return (
    <div className="user_container">
      <Navbar />

      <div className="user_info">
        <div className="img-container">
          <div className="img-holder">
            <img src={avatar} />
          </div>
        </div>
        <div className="name-container">
          <div className="name-holder">
            <span>{user.name}</span>
            <span>{user.post}</span>
          </div>
        </div>
        <div className="elseinfo-container">
          <div className="else-info-holder">
            <div className="else-info">
              <span></span>
              <p>&nbsp;UserName&nbsp;: &nbsp;</p> <p>{user.username}</p>
            </div>
            <div className="else-info">
              <span></span>
              <p>&nbsp;Email&nbsp;: &nbsp;</p> <p>{user.email}</p>
            </div>
            <div className="else-info">
              <span></span>
              <p>&nbsp;Age&nbsp;: &nbsp;</p> <p>{user.age}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
