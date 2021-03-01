// const s1 = "Some sTring !"; //primitive type NOT Object

// console.log(typeof s1);

// const s2 = new String('Hello'); // create new object instance of a string

// console.log(typeof(s2))

// console.log(window);

// window.alert(1); // property with a method

// Window is not necessary bc of DOM model

// console.log(navigator.appVersion); // object w/ a property


// Object Literal
const book1 = {
    title: "Book 2",
    author: "John Doe",
    year: 2013,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

const book2 = {
    title: "Book 2",
    author: "Jane Doe",
    year: 2016,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};


// console.log(book2.getSummary());

console.log(Object.values(book2)); // Getting all the values of the object in an array

console.log(Object.keys(book2)); // Getting all the keys of the object in an array