import React, { useState } from "react";
import axios from 'axios';
import "./addbook.css";
import { useHistory } from 'react-router-dom'


const Addbook = () => {
  const [data, setdata] = useState({ name: "", author: "", descreption: "" });
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const history =useHistory()
  const handlechange = (e) => {
    const value = e.target.value;
    setdata({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleclick = () => {
    // console.log(data.name, data.author, data.descreption);
    // console.log(selectedFile);
    if(data.name&&data.author&& data.descreption){
      axios.post('http://localhost:3000/books' ,{
        "name" : data.name,
        "author":data.author,
        "descreption" : data.descreption,
        "topic": "a topic"
      }).then(res=> console.log(res))
      .catch(err => console.log(err))
      .then(()=>history.push('/'))
    }

  };
  const handlesubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };
  return (
    <>
      <div className="addbook-background">
        <div className="addbook-container">
          <h2>Add New Book</h2>
          <form onSubmit={handlesubmit}>
            <label>Book Name :</label>
            <input
              onChange={handlechange}
              value={data.name}
              name="name"
              type="text"
            />
            <label>Author :</label>
            <input
              onChange={handlechange}
              value={data.author}
              name="author"
              type="text"
            />
            <label>Descreption :</label>
            <br />
            <textarea
              onChange={handlechange}
              name="descreption"
              value={data.descreption}
            />
            <br />

            <label>choose a picture fro book:</label>
            <input
              onChange={changeHandler}
              type="file"
              class="custom-file-input"
            ></input>
            <br />
            <button onClick={handleclick}>Add</button>
          </form>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Addbook;
