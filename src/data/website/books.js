const books = [
  {
    id: 1,
    title: "IT : The Thing 1",
    description:
      "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.",
    price: 45.5,
    cover:
      "https://m.media-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg",
    authors: [
      {
        name: "Stephen King",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
      }
    ],
    translators: [
      {
        name: "Duarte"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Horror"
      }
    ],
    edition_year: 2017,
    publishing_company: "Editora Schwarcz SA",
    language: "portuguese",
    page_number: 312,
    type_of_cover: "paperback",
    ISBN: "9788547000240"
  },
  {
    id: 2,
    title: "IT : The Thing 2",
    description:
      "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.",
    price: 45.5,
    cover:
      "https://m.media-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg",
    authors: [
      {
        name: "Stephen King",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Horror"
      }
    ]
  },
  {
    id: 3,
    title: "IT : The Thing 3",
    description:
      "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.",
    price: 45.5,
    cover:
      "https://m.media-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg",
    authors: [
      {
        name: "Stephen King",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Horror"
      }
    ]
  },
  {
    id: 4,
    title: "IT : The Thing 3",
    description:
      "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.",
    price: 45.5,
    cover:
      "https://m.media-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg",
    authors: [
      {
        name: "Stephen King",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Horror"
      }
    ]
  },
  {
    id: 5,
    title: "IT : The Thing 3",
    description:
      "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.",
    price: 45.5,
    cover:
      "https://m.media-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg",
    authors: [
      {
        name: "Stephen King",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Horror"
      }
    ]
  },
  {
    id: 6,
    title: "IT : The Thing 3",
    description:
      "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.",
    price: 45.5,
    cover:
      "https://m.media-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg",
    authors: [
      {
        name: "Stephen King",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Horror"
      }
    ]
  },
  {
    id: 7,
    title: "IT : The Thing 3",
    description:
      "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.",
    price: 45.5,
    cover:
      "https://m.media-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg",
    authors: [
      {
        name: "Stephen King",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Horror"
      }
    ]
  },
  {
    id: 8,
    title: "IT : The Thing 3",
    description:
      "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.",
    price: 45.5,
    cover:
      "https://m.media-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg",
    authors: [
      {
        name: "Stephen King",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Horror"
      }
    ]
  }
];

export const getBooks = () => {
  return books;
};

export const getBook = ({ id }) => {
  const book = books.filter((book) => book.id === id);
  console.log("book", book);
  return book[0];
};
