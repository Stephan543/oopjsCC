// Constructor 
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    
}

// getSummary prototype method

Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// getAge

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year; // Gets todays date and full year
    return `It has been ${years} since the book was published`;
}

// Review / Change Year 
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate Object
const book1 = new Book("Book One", "John Doe", 2013);
const book2 = new Book("Book Two", "Jane Doe", 2016);

book1.revise(2021)

console.log(book1);
console.log(book2.getSummary());