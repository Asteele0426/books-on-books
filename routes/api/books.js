const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

router.get('/', booksCtrl.index);

router.post('/new', booksCtrl.create);

router.delete('/:bookID', booksCtrl.delete);

module.exports = router;