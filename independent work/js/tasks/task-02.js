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

function read(obj) {
  let result;
  let title;
  let author;
  let readingStatus;
  let message;

  for (const book of obj) {
    title = book.title;
    author = book.author;
    readingStatus = book.readingStatus;

    if (readingStatus === true) {
      result = "прочитана";
    } else if (readingStatus === false) {
      result = "не прочитана";
    }
    console.log((message = `книга ${title} автора ${author} - ${result} `));
  }

  return message;
}

read(library);
