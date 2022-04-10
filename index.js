const mongoose = require('mongoose');
const debug = require('debug')('app:db');

mongoose.connect('mongodb://localhost/bookstore')
    .then(() => debug('Connected to MongoDB...'))
    .catch(err => debug('Could not connect to MongoDB...'. err));

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Book = mongoose.model('Book', bookSchema);
async function createBook(){
    const book = new Book({
        name: 'The Hobbit',
        author: 'J.R.R. Tolkien’s',
        tags: ['tolkien', 'lordoftherings'],
        isPublished: true
    });
    
    const result = await book.save();
    debug(result);
};

createBook();
