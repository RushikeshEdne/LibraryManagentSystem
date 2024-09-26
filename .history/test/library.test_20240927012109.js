const Library = require('../src/library'); // Import the library class





//1 .TEST FOR ADD BOOK IN LIBRARY

test('should add a new book to the library', () => {
  const library = new Library();
  const book = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
  
  library.addBook(book);
  
  expect(library.getBooks()).toContainEqual(book);
});


//2.TEST FOR BORROW BOOK FROM LIBRARY

test('should borrow a book from the library', () => {
    const library = new Library();
    const book = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
    library.addBook(book);
  
    library.borrowBook(book.id);
  
    expect(library.getBooks()).not.toContainEqual(book);
  });


// 3. TEST FOR RETURN BOOK


  test('should return a borrowed book to the library', () => {
    const library = new Library();
    const book = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
    
    library.addBook(book);
    library.borrowBook(book.id);
    library.returnBook(book);
  
    expect(library.getBooks()).toContainEqual(book);
  });




//TEST TO VIEW ALL AVAILABLE BOOK

  test('should view available books in the library', () => {
    const library = new Library();
    const book1 = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
    const book2 = { id: '2', title: 'Advanced JavaScript', author: 'Jane Doe', year: 2022 };
    
    library.addBook(book1);
    library.addBook(book2);
    
    expect(library.getBooks()).toContainEqual(book1);
    expect(library.getBooks()).toContainEqual(book2);
  });



  //4.TEST TO BOOK AVAILABILITY CHECK

  test('should not allow borrowing a book that is already borrowed', () => {
    const library = new Library();
    const book = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
    
    library.addBook(book);
    library.borrowBook(book.id);
    
    expect(() => library.borrowBook(book.id)).toThrow('Book not available');
  });
  



  //TEST TO VIEW BROWWER BOOK
  test('should show a list of borrowed books', () => {
    const library = new Library();
    const book1 = { id: '1', title: 'JavaScript Basics', author: 'John Doe', year: 2023 };
    const book2 = { id: '2', title: 'Advanced JavaScript', author: 'Jane Doe', year: 2022 };
    
    library.addBook(book1);
    library.addBook(book2);
    library.borrowBook(book1.id);
    
    expect(library.getBorrowedBooks()).toContainEqual(book1);
    expect(library.getBorrowedBooks()).not.toContainEqual(book2);
  });
  
  
  
  
