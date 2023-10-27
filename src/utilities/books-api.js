import sendRequest from "./send-request";
const BASE_URL = '/api/books';

export async function getAll() {
  return sendRequest(BASE_URL);

}

export async function deleteBook(bookId) {
  return sendRequest(`${BASE_URL}/${bookId}`, "DELETE")
  }

export async function newBook(bookData){
    return sendRequest(`${BASE_URL}/new`, "POST", bookData);
  }

// This function is never actually used in SEI CAFE,
// it's only provided here to remind you to follow
// RESTful routing, etc.
export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}