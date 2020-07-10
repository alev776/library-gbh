const express = require('express');
require('./db/mongoose');
const books = require('./routes/books');
const pages = require('./routes/pages');

const app = express();
app.use(express.json());
app.use(books);
app.use(pages);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
