import React,{useEffect,useState}from 'react';
import Navbar from "./../Welcome/Navbar";
import axios from 'axios';
import "./book_info.css";
import img from './../../images/hary.jpg';
import { useParams } from "react-router-dom";


const Book_info = () => {
    const params = useParams();

    const [book,setbook]=useState({})

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${params.id}`).then((res) => setbook(res.data));
      }, []);

    return ( <>
    <Navbar />
    <div className='book-info-container'>
        <div className='book-info-holder'>
            <div className='imgage-holder'>
                <img src={img} alt='pic' />
            </div>


            <div className='info-container'>
                <div className='info-holder'>
                   <div className='info'>  <p className='info1'>BookName &nbsp;:&nbsp; {book.name}</p> </div>
                  <div className='info'> <span></span> <p className='info1'>Autor &nbsp;:&nbsp; {book.author}</p> </div>
                  <div className='info'> <span></span> <p className='info1'>Topic &nbsp;:&nbsp;  {book.topic}</p> </div>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Book_info;