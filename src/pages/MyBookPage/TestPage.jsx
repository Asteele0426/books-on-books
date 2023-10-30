import { useState, useEffect, useRef } from 'react';
import * as booksAPI from '../../utilities/books-api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../BookListPage/BookListPage.css';
import { checkToken } from "../../utilities/users-service";
import BookForm from '../EditBookPage/EditBookPage'


export default function TestPage({user}){
    const [books, setBooks] = useState([]);
  const[newBookForm, setNewBookForm] = useState({title:"", author:"", genre:""});

  async function getAllBooks(){
    const books= await booksAPI.getAll()
    console.log(books)
    setBooks(books)
}
  const handleDelete = (id) => {
    console.log(id)
  booksAPI.deleteBook(id)
  getAllBooks()
  }


  useEffect(()=>{
   
   getAllBooks()
  },[])


  const handleChange=(e)=>{
    
    const {name, value} = e.target
    console.log('testing name and value', name, value)
      setNewBookForm(prevState => ({...prevState,[name]:value  
    }))
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newBookForm)
    const updateBook = booksAPI.updateBook(newBookForm, e.target.id)
    console.log(updateBook)
    getAllBooks()
    
   
  }


   return (
    <div align="center">
        <br/>
        <h1>My Books</h1>
        <br/>
    {books.map(book=>(
        <Card class="update" style={{ width: '18rem' }}>
        <ListGroup variant="flush">
        <ListGroup.Item>
       <div key={book._id} align="center"> 
       <p><b><font size="+3">{book.title}</font></b><br/>
       <i>{book.author}</i><br/>
        <u>{book.genre}</u></p>
       <BookForm book={book} handleSubmit={handleSubmit} handleChange={handleChange}/>
       <Button class="delete-button" onClick={()=>handleDelete(book._id)}>Delete</Button><hr width="50%"></hr></div>
    </ListGroup.Item>
    </ListGroup>
     </Card>
    ))}
    </div>
  )
}