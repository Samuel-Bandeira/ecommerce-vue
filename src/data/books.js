/* eslint-disable no-unused-vars */
import { bookCover } from "@/assets/urlImages/books";
import { authorImage } from "@/assets/urlImages/authors";
import { v4 as uuidv4 } from "uuid";
/* eslint-disable no-unused-vars */
export class BookService {
  books = [
    {
      id: "7b52192f-eff4-4eeb-9ce8-efa7cddfb630",
      cover: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      title: "Verity",
      price: 25,
      authors: [
        {
          id: 1,
          name: "Collen Hoover",
          image: authorImage,
        },
      ],
    },
    {
      id: "05b7dc7a-99bc-4354-9f10-220adbe09c9b",
      cover: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      title: "Todas as suas (im)perfeições",
      price: 29,
      authors: [
        {
          id: 1,
          name: "Collen Hoover",
          image: authorImage,
        },
      ],
    },
    {
      id: "c800e9cc-4426-4bcf-a833-b59966bca291",
      cover: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      title: "Em risco",
      price: 24,
      authors: [
        {
          id: 3,
          name: "Patricia Cornwell",
          image: authorImage,
        },
      ],
    },
    {
      id: "7440def8-90a8-46c3-a940-52cb15be464a",
      cover: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      title: "Habitos atômicos",
      price: 43,
      authors: [
        {
          id: 2,
          name: "James Clear",
          image: authorImage,
        },
      ],
    },
    {
      id: "62af0ce4-d967-4372-8ccc-301ac935639b",
      cover: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      title: "Aurora boreal",
      price: 24,
      authors: [
        {
          id: 4,
          name: "Nora Roberts",
          image: authorImage,
        },
      ],
    },
    {
      id: "40834b7e-be49-4fc7-853c-daa5c779828f",
      cover: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      title: "Um sinal dos céus",
      price: 29,
      authors: [
        {
          id: 4,
          name: "Nora Roberts",
          image: authorImage,
        },
      ],
    },
    {
      id: "99b012bf-1fd4-4ede-8326-3df472539a97",
      cover: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      title: "A mentira",
      price: 27,
      authors: [
        {
          id: 4,
          name: "Nora Roberts",
          image: authorImage,
        },
      ],
    },
    {
      id: "a79bd5f4-a5ee-4e8d-bb62-79cea2a149f0",
      cover: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      title: "É assim que acaba",
      price: 30,
      authors: [
        {
          id: 1,
          name: "Collen Hoover",
          image: authorImage,
        },
      ],
    },
  ];

  authors = [
    {
      id: 1,
      name: "Collen Hoover",
      image: authorImage,
    },
    {
      id: 2,
      name: "James Clear",
      image: authorImage,
    },
    {
      id: 3,
      name: "Patricia Cornwell",
      image: authorImage,
    },
    {
      id: 4,
      name: "Nora Roberts",
      image: authorImage,
    },
  ];

  createBook({ bookToBeCreatedData }) {
    const authors = this.authors.filter((author) => {
      return bookToBeCreatedData.authors.indexOf(author.id) != -1;
    });

    bookToBeCreatedData.authors = authors;
    this.books.push({ id: uuidv4(), cover: bookCover, ...bookToBeCreatedData });
  }
  removeBook({ id }) {
    const index = this.books.findIndex((book) => book.id === id);
    this.books.splice(index, 1);
  }
  removeBooks({ books }) {
    const indexesToBeRemoved = books.map((book) => book.id);

    indexesToBeRemoved.forEach((index) => {
      this.removeBook({ id: index });
    });
  }
  updateBook({ bookToBeUpdatedData }) {
    const authors = this.authors.filter((author) => {
      return bookToBeUpdatedData.authors.indexOf(author.id) != -1;
    });

    bookToBeUpdatedData.authors = authors;

    const bookToBeUpdatedIndex = this.books.findIndex(
      (book) => book.id === bookToBeUpdatedData.id
    );

    this.books[bookToBeUpdatedIndex] = bookToBeUpdatedData;
  }
  findBook({ id }) {
    return this.books.find((book) => book.id === id);
  }
}
