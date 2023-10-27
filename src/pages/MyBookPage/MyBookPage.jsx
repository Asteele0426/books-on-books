import { useState, useEffect, useRef } from 'react';
import * as booksAPI from '../../utilities/books-api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../BookListPage/BookListPage.css';
import { checkToken } from "../../utilities/users-service";

export default function BookListPage() {
  const [books, setBooks] = useState([]);
  const[newBookForm, setNewBookForm] = useState({title:"", author:"", genre:""});

  async function getBooks() {
  const books = await booksAPI.getAll();
  // const [books, setBooks] = useState([]);
  console.log(books)
  setBooks(books);
}
useEffect (function() {
  getBooks();
}, []);



  
  // async function handleCheckToken() {
  //  const expDate = await checkToken()
  //  console.log(expDate)
  // }
  

  const handleChange=(e)=>{
    
    const {name, value} = e.target
      setNewBookForm(prevState => ({...prevState,[name]:value  
    }))
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBook = {}
    const token = localStorage.getItem('token');
    const user = JSON.parse(atob(token.split('.')[1])).user
    newBook.user=user._id
    newBook.title=newBookForm.title
    newBook.author=newBookForm.author
    newBook.genre=newBookForm.genre
    console.log(newBook)
    booksAPI.newBook(newBook)
    getBooks()
  }

  const handleDelete = (id) => {
    console.log(id)
  booksAPI.deleteBook(id)
  getBooks()
  }

  return (
    <div>
          <h1>My Books</h1>

    {books.length===0?<div>No Books Yet</div>:
    <div>{books.map((book)=>{
      return(
        <div>{book.title}{book.author}{book.genre}<button onClick={()=>handleDelete(book._id)}>Delete</button></div>
      )
    })}</div>
    }
    &nbsp; &nbsp; &nbsp; &nbsp;
   
   </div>
  );
}



