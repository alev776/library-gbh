const express = require('express');
const router = new express();
const Book = require('../models/books');
const Page = require('../models/pages');

// /api/book/246356jnj3546jbj/pages || /api/book/246356jnj3546jbj/pages?limit=3
router.get('/api/book/:id/pages', async(req ,res) => {
    try {
        const book = await Book.findById(req.params.id);

        const pages = await Page.find({ bookId: book._id }).limit(parseInt(req.query.limit));

        res.send(pages);
    } catch (error) {
        res.status(404).send(error)
    }
});

// /api/book/246356jnj3546jbj/page/nombre/json || /api/book/246356jnj3546jbj/page/nombre/html
router.get('/api/book/:id/page/:name/:formato', async(req, res) => {
    try {

        const name = req.params.name;
        const bookId = req.params.id;

        const page = await Page.findOne({ bookId, name});

        if (req.params.formato === 'html') {
            res.send(`<h2>${page.name}</h2><div>${page.pageContent}</div>`);
        } else if (req.params.formato === 'json') {
            res.send(page);
        }

    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;
