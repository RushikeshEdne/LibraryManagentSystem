class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    getBooks() {
      return this.books;
    }



    borrowBook(bookId) {
        const index = this.books.findIndex(book => book.id === bookId);
        if (index === -1) throw new Error('Book not available');
        
        this.books.splice(index, 1);
    }


    returnBook(book) {
  this.books.push(book);
}

      
  }
  
  module.exports = Library;
  