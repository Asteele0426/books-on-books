import { useState, useEffect, useRef } from 'react';
import * as booksAPI from '../../utilities/books-api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../BookListPage/BookListPage.css';
import '../App/App.css';
import { checkToken } from "../../utilities/users-service";

export default function BookForm({handleChange, handleSubmit, title, author, genre, book }) {
  return (
    
      <form id={book?._id}onSubmit={handleSubmit}>
        <table>
        <tr>
          <td><label for='title'>Title: </label></td><td><input onChange={handleChange} type="text" name="title" placeholder={title} /></td> 
          </tr>
          <tr>
            <td><label for='author'>Author: </label></td><td><input onChange={handleChange} type="text" name="author" placeholder={author} /></td>
            </tr>
          <tr>
          <td><label for='genre'>Genre: </label></td><td><input onChange={handleChange} type="text" name="genre" placeholder={genre} /> </td>
          </tr>
      </table>
      <Button type="submit">Update Book</Button>

      </form>
  )
}
