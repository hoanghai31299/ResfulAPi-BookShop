const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookSchema = new Schema({
    name: String,
    author: String,
    description: String,
    price: Number,
    language: String
});

let Book = mongoose.model('Book', bookSchema, 'books')

module.exports = Book;