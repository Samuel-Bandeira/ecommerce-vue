import axios from "axios";
import qs from "qs";
import { populateFields } from "@/utils";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

export const getBooks = async () => {
  const fieldsToPopulate = "cover,authors,categories";
  const query = populateFields({ fieldsToPopulate });
  const response = await api.get(`/books?${query}`);
  const { data } = response.data;
  return data;
};

export const getBooksByCategories = async (categories) => {
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
  const response = await api.get(`/books?${query}`);
  const { data } = response.data;
  return data;
};

export const getBook = async ({ id }) => {
  const fieldsToPopulate = "cover, authors.image, categories";
  const query = populateFields({ fieldsToPopulate });
  const response = await api.get(`/books/${id}?${query}`);
  const { data } = response.data;
  return data;
};

export const getBooksCategories = async () => {
  const response = await api.get("/categories");
  const { data } = response.data;
  return data;
};
