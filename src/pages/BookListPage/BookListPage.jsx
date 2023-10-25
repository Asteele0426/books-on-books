import { useState, useEffect, useRef } from 'react';
import * as booksAPI from '../../utilities/books-api';
import { checkToken } from "../../utilities/users-service";

export default function BookListPage() {
  const [books, setBooks] = useState([]);
  const[newBookForm, setNewBookForm] = useState({title:"", author:"", genre:""});

  async function getBooks() {
  // const books = await booksAPI.getAll();
  // const [books, setBooks] = useState([]);
  console.log(books)
  setBooks(books);
}




  
  // async function handleCheckToken() {
  //  const expDate = await checkToken()
  //  console.log(expDate)
  // }
  

  const handleChange=(e)=>{
    
    const {title, author, genre} = e.target
      setNewBookForm(prevState => ({...prevState,[title]:title, [author]:author, [genre]:genre  
    }))
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBook = {}
    const token = localStorage.getItem('token');
    const user = JSON.parse(atob(token.split('.')[1])).user
    newBook.user=user._id
    newBook.name=newBookForm.name
    console.log(newBook)
    booksAPI.newBook(newBook)
    getBooks()
  }
  return (
    <div>
          <h1>Add a Book</h1>

    {books.length===0?<div>No Books Yet</div>:
    <div>{books.map((book)=>{
      return(
        <div>{book.title}{book.author}{book.genre}</div>
      )
    })}</div>
    }
    
    <form onSubmit={handleSubmit}>
    <label >Title: </label>
    <input size="20" value={newBookForm.title} onChange={handleChange} name="title"></input><br />
    <label >Author: </label>
    <input size="15" value={newBookForm.author} onChange={handleChange} name="author"></input> <br />
    <label >Genre: </label>
    <input size="20" value={newBookForm.genre} onChange={handleChange} name="genre"></input> <br />
      <button>Submit</button>
    </form>
   </div>
  );
}



