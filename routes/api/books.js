const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

router.get('/', booksCtrl.index);
router.post('/new', booksCtrl.create);
router.delete('/:bookID', booksCtrl.delete);
router.patch('/:id', booksCtrl.updateBook); //patch

module.exports = router;