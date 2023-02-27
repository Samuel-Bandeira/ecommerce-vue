import { v4 as uuidv4 } from "uuid";
import { bookCover } from "@/assets/urlImages/books";
import { authorImage } from "@/assets/urlImages/authors";
export const seedBooks = () => {
  return [
    {
      id: uuidv4(),
      cover: bookCover,
      title: "Percy Jackson e o Mar de Monstros",
      price: "11",
      authors: [
        {
          id: "78b627e1-994a-448e-8a09-3f4963f4c42d",
          name: "Author B",
          image: authorImage,
        },
        {
          id: "80dbc106-d54c-46cc-805b-1dc92ca39e4a",
          name: "Author A",
          image: authorImage,
        },
      ],
    },
    {
      id: uuidv4(),
      cover: bookCover,
      title: "Harry Potter e a Pedra Filosofal",
      price: "11",
      authors: [
        {
          id: "78b627e1-994a-448e-8a09-3f4963f4c42d",
          name: "Author B",
          image: authorImage,
        },
      ],
    },
    {
      id: uuidv4(),
      cover: bookCover,
      title: "Percy Jackson",
      price: "11",
      authors: [
        {
          id: "78b627e1-994a-448e-8a09-3f4963f4c42d",
          name: "Author B",
          image: authorImage,
        },
        {
          id: "80dbc106-d54c-46cc-805b-1dc92ca39e4a",
          name: "Author A",
          image: authorImage,
        },
      ],
    },
    {
      id: uuidv4(),
      cover: bookCover,
      title: "Percy Jackson",
      price: "11",
      authors: [
        {
          id: "78b627e1-994a-448e-8a09-3f4963f4c42d",
          name: "Author C",
          image: authorImage,
        },
      ],
    },
    {
      id: uuidv4(),
      cover: bookCover,
      title: "Percy Jackson",
      price: "11",
      authors: [
        {
          id: "78b627e1-994a-448e-8a09-3f4963f4c42d",
          name: "Author C",
          image: authorImage,
        },
      ],
    },
    {
      id: uuidv4(),
      cover: bookCover,
      title: "Percy Jackson",
      price: "11",
      authors: [
        {
          id: "78b627e1-994a-448e-8a09-3f4963f4c42d",
          name: "Author B",
          image: authorImage,
        },
        {
          id: "80dbc106-d54c-46cc-805b-1dc92ca39e4a",
          name: "Author A",
          image: authorImage,
        },
      ],
    },
    {
      id: uuidv4(),
      cover: bookCover,
      title: "Percy Jackson",
      price: "11",
      authors: [
        {
          id: "78b627e1-994a-448e-8a09-3f4963f4c42d",
          name: "Author B",
          image: authorImage,
        },
        {
          id: "80dbc106-d54c-46cc-805b-1dc92ca39e4a",
          name: "Author A",
          image: authorImage,
        },
      ],
    },
    {
      id: uuidv4(),
      cover: bookCover,
      title: "Percy Jackson",
      price: "11",
      authors: [
        {
          id: "78b627e1-994a-448e-8a09-3f4963f4c42d",
          name: "Author C",
          image: authorImage,
        },
      ],
    },
    {
      id: uuidv4(),
      cover: bookCover,
      title: "Percy Jackson",
      price: "11",
      authors: [
        {
          id: "78b627e1-994a-448e-8a09-3f4963f4c42d",
          name: "Author B",
          image: authorImage,
        },
        {
          id: "80dbc106-d54c-46cc-805b-1dc92ca39e4a",
          name: "Author A",
          image: authorImage,
        },
      ],
    },
  ];
};
