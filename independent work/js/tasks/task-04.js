"use strict";

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

// function read(obj) {
//   let result;
//   let message;

//   for (const book of obj) {
//     if (book.readingStatus === true) {
//       result = "прочитана";
//     } else if (book.readingStatus === false) {
//       result = "не прочитана";
//     }
//     console.log(
//       (message = `книга ${book.title} автора ${book.author} - ${result} `)
//     );
//   }

//   return message;
// }

// read(library);

function read(obj) {
  for (const book of obj) {
    if (book.readingStatus === true) {
      console.log(`книга ${book.title} автора ${book.author} прочітана `);
    } else if (book.readingStatus === false) {
      console.log(`книга ${book.title} автора ${book.author} не прочітана `);
    }
  }

  // return message;
}

read(library);
