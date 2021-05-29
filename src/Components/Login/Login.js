import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  // const [data,setdata] =useState({user:'',pass:''})

  const onsubmit = (e) => {
    e.preventDefault();
    validate();
  };
  const clicklogin = () => {
    // console.log(user, pass);
  };

  const validate = () => {
    if (pass.length < 8) {
      alert("password should be morethan 8 character");
    } else {
      axios
        .post("database", {
          username: user,
          password: pass,
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
        <h1>Login</h1>
        <form method="post" onSubmit={onsubmit}>
          <input
            type="text"
            placeholder="Username"
            required="required"
            onChange={(event) => setuser(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required="required"
            onChange={(event) => setpass(event.target.value)}
          />
          <button
            type="submit"
            onClick={clicklogin}
            className="btn btn-primary btn-block btn-large"
          >
            Let me in.
          </button>
        </form>
        <h6>Dont have an account yet ?</h6>
        <h6>
          <Link to="/register">Sign Up now</Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;
