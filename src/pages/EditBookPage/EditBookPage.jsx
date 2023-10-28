import { useState, useEffect, useRef } from 'react';
import * as booksAPI from '../../utilities/books-api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../BookListPage/BookListPage.css';
import { checkToken } from "../../utilities/users-service";

export default function BookForm({handleChange, handleSubmit, title, author, genre, book }) {
  return (
      <form id={book?._id}onSubmit={handleSubmit}>
        
          <label for='title'>Title: </label><input onChange={handleChange} type="text" name="title" placeholder={title} /> <br />
          <label for='author'>Author: </label><input onChange={handleChange} type="text" name="author" placeholder={author} /><br />
          <label for='genre'>Genre: </label><input onChange={handleChange} type="text" name="genre" placeholder={genre} /> <br />
         
          <Button type="submit">Update Book</Button>
      </form>
  )
}
