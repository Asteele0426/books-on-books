import { useState, useEffect, useRef } from 'react';
import * as booksAPI from '../../utilities/books-api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../BookListPage/BookListPage.css';
import { checkToken } from "../../utilities/users-service";

export default function BookForm({ handleSubmit, title, author, genre }) {
  return (
      <form onSubmit={handleSubmit}>
        
          <label for='title'>Title: </label><input type="text" name="title" placeholder={title} /> <br />
          <label for='author'>Author: </label><input type="text" name="author" placeholder={author} /><br />
          <label for='genre'>Genre: </label><input type="text" name="genre" placeholder={genre} /> <br />
         
          <button type="submit">Update Book</button>
      </form>
  )
}
