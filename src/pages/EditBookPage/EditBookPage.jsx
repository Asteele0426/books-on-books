import { useState, useEffect, useRef } from 'react';
import * as booksAPI from '../../utilities/books-api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../BookListPage/BookListPage.css';
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
    &nbsp; &nbsp; &nbsp; &nbsp;
   <div className="addBook" >
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="bookForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={newBookForm.title} onChange={handleChange} name="title" placeholder="jump"/> 
      </Form.Group>
    <Form.Group className="mb-3" controlId="bookForm.ControlInput2">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" value={newBookForm.author} onChange={handleChange} name="author" placeholder="gauntlet"/> 
      </Form.Group>
    <Form.Group className="mb-3" controlId="bookForm.ControlInput3">
        <Form.Label>Genre</Form.Label>
        <Form.Control type="text" value={newBookForm.genre} onChange={handleChange} name="genre" placeholder="pants"/> 
      </Form.Group>
      <Button type="sumbit">Submit</Button>
    </Form>
    </div>
    {/* <form className="bookForm" onSubmit={handleSubmit}>
    <label htmlFor="title" >Title: </label>
    <input id="title" size="20" value={newBookForm.title} onChange={handleChange} name="title"></input><br />
    <label htmlFor="author" >Author: </label>
    <input size="20" id="author" value={newBookForm.author} onChange={handleChange} name="author"></input> <br />
    <label htmlFor ="genre" >Genre: </label>
    <input size="20" id="genre" value={newBookForm.genre} onChange={handleChange} name="genre"></input> <br />
      <button>Submit</button>
    </form> */}
   </div>
  );
}



