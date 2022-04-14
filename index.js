const mongoose = require('mongoose');
const debug = require('debug')('app:db');

mongoose
  .connect('mongodb://localhost/bookstore')
  .then(() => debug('Connected to MongoDB...'))
  .catch((err) => debug('Could not connect to MongoDB...'.err));

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 255,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Judgment',
      'Survival',
      'Peace and war',
      'Love',
      'Heroism',
      'Good and evil',
      'Circle of life',
      'Suffering',
      'Deception',
      'Coming of age',
    ],
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: function (tagValue) {
        return tagValue && tagValue.length > 0;
      },
      message: 'A book should have at least one tag.',
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
});

const Book = mongoose.model('Book', bookSchema);

async function createBook() {
  const book = new Book({
    name: 'Tolkien: Maker of Middle-earth',
    category: 'Peace and war',
    author: 'J.R.R. Tolkien',
    tags: ['tolkien', 'lordoftherings'],
    isPublished: true,
    price: 49,
  });

  try {
    const result = await book.save();
    debug(result);
  } catch (error) {
    debug(error.message);
  }
}

async function getBook() {
  const books = await Book.find({
    author: 'J.R.R. Tolkien',
    isPublished: true,
    price: { $gte: 10, $lte: 20 },
  })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  debug(books);
}

async function updateBook(id) {
  const book = await Book.findById(id);
  if (!book) return;

  book.isPublished = true;
  book.price = 16;

  const result = await book.save();
  debug(result);
}

async function removeBook(id) {
  const result = await Book.deleteOne({ _id: id });
  debug(result);
}

createBook();
getBook();
updateBook('62572d1191f392da2031974e');
removeBook('625731cff4bbc0f724548334');
