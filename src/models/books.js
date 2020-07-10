const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 40
    },
    author: {
        type: String,
        required: true,
        maxlength: 30
    },
    releaseDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;