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

  useEffect(()=>{
    async function getAllBooks(){
        const books= await booksAPI.getAll()
        console.log(books)
        setBooks(books)
    }
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
   
  }


   return (
    <div>
    {books.map(book=>(
       <div key={book._id}> 
       <p>{book.title}</p>
       <BookForm book={book} handleSubmit={handleSubmit} handleChange={handleChange}/>
       </div>
    ))}
    </div>
  )
}