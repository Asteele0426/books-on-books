const Book = require('../../models/book');

module.exports = {
    index,
    create,
    delete: deleteBook,
    updateBook: updateBook,
};

async function deleteBook(req, res) {
    try {
        const bookID = req.params.bookID;
console.log(bookID)
        await Book.findByIdAndDelete(bookID);

        res.json({ message: 'Book deleted successfully' });

    } catch (error) {
        console.error('Error deleting book', error);
        res.status(500).json({ error: 'Failed to delete a book' });
    }
}

async function create(req, res) {
    try {
        const book = req.body;
        const newBook = await Book.create(book);
        res.json(newBook);
    } catch (error) {
        console.error('Error creating book', error);
        res.status(500).json({ error: 'Failed to create a new book' });
    }
}

async function updateBook(req, res) {
    try {
        const book = await Book.findById(req.params.id)
        book.title = req.body.title
        book.author = req.body.author
        book.genre = req.body.genre
        await book.save()
        res.status(200).json(note)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


async function index(req, res) {
    try {
        const userID = req.user._id;
        const books = await Book.find({ user: userID });
        res.json(books);
    } catch (error) {
        console.error('Error fetching books', error);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
}