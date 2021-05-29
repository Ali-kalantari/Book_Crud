import React, { useState, useEffect } from "react";
import "./booklist.css";
import nn from "./../../images/book.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Booklist = () => {
  const [list, setlist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((res) => setlist(res.data))
      console.log(list)
  }, []);
  return (
    <div className="book-list-container">
      <h1>List Of Books</h1>
      <table className="table-header">
        <tr>
          <th>Book name</th>
          <th>Author</th>
          <th>Descreption</th>
          <th>image</th>
        </tr>

        {list.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>
                <Link to={`/book-list/${item.id}`}>{item.name}</Link>
              </td>
              <td>{item.author}</td>
              <td>{item.descreption}</td>
              <td id="image">
                {" "}
                <img src={nn} />{" "}
              </td>
            </tr>
          );
        })}

        {/* <tr>
          <td><Link>Alfreds Futterkiste</Link></td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td id='image'><img src={nn} /></td>
        </tr> */}
      </table>
    </div>
  );
};

export default Booklist;
