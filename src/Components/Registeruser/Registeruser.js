import React, { useState } from "react";
import axios from "axios";
import "./register.css";

const Registeruser = () => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [passconfirm, setpassconfirm] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");

  // const [data,setdata] =useState({user:'',pass:''})

  const onsubmit = (e) => {
    e.preventDefault();
    validate();
  };
  const clickregister = () => {
    // console.log(user, pass , email,gender);
  };

  const validate = () => {
    if (pass.length < 8) {
      alert("password should be morethan 8 character");
    }
    if (pass !== passconfirm) {
      alert("pass words are not equal");
    }
    if (pass && user && email && gender) {
      axios
        .post("database", {
          username: user,
          password: pass,
          email: email,
          gender: gender,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="body">
      <div className="login">
        <h1>Register</h1>
        <form method="post" onSubmit={onsubmit}>
          <input
            type="text"
            placeholder="Username"
            required="required"
            onChange={(event) => setuser(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required="required"
            onChange={(event) => setemail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required="required"
            onChange={(event) => setpass(event.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required="required"
            onChange={(event) => setpassconfirm(event.target.value)}
          />
          <div onChange={(e) => setgender(e.target.value)}>
            Male
            <input type="radio" value="Male" name="gender" /> Female
            <input type="radio" value="Female" name="gender" />
          </div>
          <button
            type="submit"
            onClick={clickregister}
            className="btn btn-primary btn-block btn-large"
          >
            Let me in.
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registeruser;
