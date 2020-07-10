const mongoose = require('mongoose');

const pagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pageContent: {
        type: String,
        required: true
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Book'
    }
});

pagesSchema.statics.addBookId = (arr, _id) => {
    let rv = arr;
    for (let i = 0; i < arr.length; ++i) {
        rv[i].bookId = _id;
    }
    return rv;
}

const Page = mongoose.model('Page', pagesSchema);

module.exports = Page;