// import { useState, useEffect, useRef } from 'react';
// import * as booksAPI from '../../utilities/books-api';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import '../BookListPage/BookListPage.css';
// import { checkToken } from "../../utilities/users-service";
// import BookForm from '../EditBookPage/EditBookPage'

// export default function BookListPage() {
//   const [books, setBooks] = useState([]);
//   const[newBookForm, setNewBookForm] = useState({title:"", author:"", genre:""});

  
// }
// useEffect (function() {
//   async function getBooks() {
//     const books = await booksAPI.getAll();
//     // const [books, setBooks] = useState([]);
//     console.log(books)
//     setBooks(books);
//   }
//   getBooks();
// }, []);



  
//   // async function handleCheckToken() {
//   //  const expDate = await checkToken()
//   //  console.log(expDate)
//   // }
  

  // const handleChange=(e)=>{
    
  //   const {name, value} = e.target
  //     setNewBookForm(prevState => ({...prevState,[name]:value  
  //   }))
  //   }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const updateBook = updateBook(title, author, genre)
  //   const token = localStorage.getItem('token');
  //   const user = JSON.parse(atob(token.split('.')[1])).user
  //   updateBook.user=user._id
  //   updateBook.title=newBookForm.title
  //   updateBook.author=newBookForm.author
  //   updateBook.genre=newBookForm.genre
  //   console.log(updateBook)
  //   booksAPI.updateBook(updateBook)
  //   getBooks()
  // }

//   const handleDelete = (id) => {
//     console.log(id)
//   booksAPI.deleteBook(id)
//   getBooks()
//   }

//   return (
//     <div>
//           <h1>My Books</h1>
//           {/* <h3>Edit Books</h3> */}
//     {books.length===0?<div>No Books Yet</div>:
//     <div align="center">{books.map((book)=>{
//       return(
//         <Card class="update" style={{ width: '18rem' }}>
//       <ListGroup variant="flush">
//         <ListGroup.Item>
//         <div align="center">
//         <BookForm handleSubmit={handleSubmit} title={book.title} author={book.author} genre={book.genre}/>
//         <Button class="delete-button" onClick={()=>handleDelete(book._id)}>Delete</Button><hr width="50%"></hr></div>
//         </ListGroup.Item>
//        </ListGroup>
//        </Card>
//       )
//     })}</div>
//     }
//     &nbsp; &nbsp; &nbsp; &nbsp;
   
//    </div>
//   );
// }



