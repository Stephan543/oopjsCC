class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year; // Gets todays date and full year
    return `It has been ${years} since the book was published`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore(){
      return 'Chapters';
  }
}

// Instantiate Object
const book1 = new Book("Book One", "John Doe", 2013);
book1.revise(2021)

console.log(Book.topBookStore())
console.log(book1);
