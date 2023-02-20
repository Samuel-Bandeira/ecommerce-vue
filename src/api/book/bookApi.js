import axios from "axios";
import qs from "qs";
const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getBooks = async () => {
  const response = await api.get("/books", {
    params: {
      populate: ["cover", "authors", "categories"],
    },
  });
  const { data } = response.data;
  return data;
};

export const getBooksByCategories = async (categories) => {
  //hello
  const query = qs.stringify({
    populate: "categories,authors",
    filters: {
      categories: {
        name: {
          $in: categories,
        },
      },
    },
  });

  console.log(query, categories);

  const response = await api.get(`/books?${query}`);
  const { data } = response.data;
  return data;
};

export const getBook = async ({ id }) => {
  const response = await api.get(`/books/${id}`, {
    params: {
      populate: ["cover", "authors.image", "categories"],
    },
  });
  const { data } = response.data;
  return data;
};

export const getBooksCategories = async () => {
  const response = await api.get("/categories", {});
  const { data } = response.data;
  return data;
};
