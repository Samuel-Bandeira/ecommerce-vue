/* eslint-disable no-unused-vars */
import { bookCover } from "@/assets/urlImages/books";
import { authorImage } from "@/assets/urlImages/authors";
import { v4 as uuidv4 } from "uuid";
import { seedBooks } from "./seed";
/* eslint-disable no-unused-vars */
export class BookService {
  // books = localStorage.getItem("books")
  //   ? JSON.parse(localStorage.getItem("books"))
  //   : [];

  // books = seedBooks();
  books = [];
  authors = [
    {
      id: uuidv4(),
      name: "Author A",
    },
    {
      id: uuidv4(),
      name: "Author B",
    },
    {
      id: uuidv4(),
      name: "Author C",
    },
    {
      id: uuidv4(),
      name: "Author D",
    },
  ];
  createBook({ payload }) {
    payload.authors.forEach((author) => {
      author.image = authorImage;
    });
    console.log("aaa", { id: uuidv4(), cover: bookCover, ...payload });
    this.books.push({ id: uuidv4(), cover: bookCover, ...payload });
    // localStorage.setItem("books", JSON.stringify(this.books));
  }
  removeBook({ id }) {
    const index = this.books.findIndex((book) => book.id === id);
    this.books.splice(index, 1);
  }
  updateBook({ payload }) {
    payload.authors.forEach((author) => {
      author.image = authorImage;
    });
    const index = this.books.findIndex((book) => book.id === payload.id);
    this.books[index] = payload;
    // localStorage.setItem("books", JSON.stringify(this.books));
  }
  findBook({ id }) {
    return this.books.find((book) => book.id === id);
  }
}
