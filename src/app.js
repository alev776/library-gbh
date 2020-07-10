const express = require('express');
require('./db/mongoose');
const books = require('./routes/books');
const pages = require('./routes/pages');

const app = express();
app.use(express.json());
app.use(books);
app.use(pages);

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
