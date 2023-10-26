const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user' },
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);