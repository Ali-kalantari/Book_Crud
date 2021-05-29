import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Styles.css";
import back2 from "./../../images/book.jpg";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const islogin = true;

  useEffect(() => {
    axios.get("http://localhost:3000/notes")
    .then(res=> console.log(res.data))


    // fetch("http://localhost:3000/notes")
    // .then(res=> res.json())
    // .then((data) => console.log(data[0]));
  }, []);

  return (
    <>
      <Navbar />
      <section className="main-section">
        <div className="welcome">
          <h1>Welcome to my website</h1>
          {islogin === false ? (
            <div id="links">
              <Link className="link" to="/login">
                {" "}
                Login{" "}
              </Link>
              <Link className="link" to="/register">
                {" "}
                Register{" "}
              </Link>
            </div>
          ) : (
            <div className="dashboard">
              <Link id="add" to="add-book">
                Add a book{" "}
              </Link>
              <Link id="list" to="book-list">
                Show book list{" "}
              </Link>
              <Link id="logout" to="book-list">
                Log Out{" "}
              </Link>
            </div>
          )}
        </div>
        <div className="img">
          <img src={back2} alt="back" />
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default WelcomePage;
