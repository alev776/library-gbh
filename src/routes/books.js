const express = require('express');
const router = new express.Router();
const Book = require('../models/books');
const Page = require('../models/pages');

// /api/book
router.post('/api/book', async(req, res) => {
    const book = new Book(req.body);

    try {
        await book.save();

        const pages = Page.addBookId(req.body.pages, book._id);
        const page = await Page.create(pages);

        res.status(201).send({book, page});
    } catch (error) {
        res.status(400).send(error);
    }

});

// /api/books || /api/books?limit=1
router.get('/api/books', async(req, res) => {
    try {
        const books = await Book.find({}).limit(parseInt(req.query.limit));

        res.send(books);
    } catch (error) {
        res.status(400).send(error);
    }
});

// api/book/248952489huidfh72
router.get('/api/book/:id', async(req, res) => {
    const _id = req.params.id;

    try {
        const book = await Book.findOne({_id});

        res.send(book)
    } catch (error) {
        res.status(404).send(error);
    }
});


module.exports = router;