import qs from "qs";
import { api } from "./api";
import { populateFields } from "@/utils";

export const getBooks = async () => {
  const fieldsToPopulate = "cover,authors.image,categories";
  const query = populateFields({ fieldsToPopulate });
  const response = await api.get(`/books?${query}`);
  const { data } = response.data;
  return data;
};

export const getBooksByCategories = async (categories) => {
  const query = qs.stringify({
    populate: "categories,authors,cover",
    filters: {
      categories: {
        name: {
          $in: categories,
        },
      },
    },
  });
  const response = await api.get(`/books?${query}`);
  console.log("resp", response);
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
