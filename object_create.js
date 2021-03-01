// Object of Prototypes
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year; // Gets todays date and full year
    return `It has been ${years} since the book was published`;
  },
};

// Create Object

// const book1 = Object.create(bookProtos);
// book1.title = 'Booke One';
// book1.author = 'John Doe';
// book1.year = '2013';

const book1 = Object.create(bookProtos, {
    title: {value: 'Book One'},
    author: {value: 'John Doe'},
    year: {value: 2013}
});


console.log(book1)
