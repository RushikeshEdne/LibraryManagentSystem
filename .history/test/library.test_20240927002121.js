const Library = require('../src/library'); // Import the library class

test('should add a new book to the library', () => {
  const library = new Library();
  const book = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
  
  library.addBook(book);
  
  expect(library.getBooks()).toContainEqual(book);
});
