const Library = require('../src/library'); // Import the library class

test('should add a new book to the library', () => {
  const library = new Library();
  const book = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
  
  library.addBook(book);
  
  expect(library.getBooks()).toContainEqual(book);
});




test('should borrow a book from the library', () => {
    const library = new Library();
    const book = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
    library.addBook(book);
  
    library.borrowBook(book.id);
  
    expect(library.getBooks()).not.toContainEqual(book);
  });


//   Write Test for Returning Books
//   Now, let’s test the returnBook method:

  test('should return a borrowed book to the library', () => {
    const library = new Library();
    const book = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
    
    library.addBook(book);
    library.borrowBook(book.id);
    library.returnBook(book);
  
    expect(library.getBooks()).toContainEqual(book);
  });
  
  
