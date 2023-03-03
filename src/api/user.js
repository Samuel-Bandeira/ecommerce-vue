import { api } from "./api";
import qs from "qs";

export const getUser = async ({ userId }) => {
  console.log("in get user");
  const query = qs.stringify({
    filters: {
      id: {
        $eq: userId
      }
    }
  });

  let response = null;
  try {
    const { data } = await api.get(`users?${query}`);
    response = data[0];
  } catch (e) {
    console.log("ERROR");
  }

  console.log("res", response);
  return response;
};

export const getUserCart = async ({ userId }) => {
  //http://localhost:1337/api/carts?filters[users_permissions_user][username][$eq]=testing&populate=*
  const query = qs.stringify({
    populate: "*",
    filters: {
      users_permissions_user: {
        id: {
          $eq: userId
        }
      }
    }
  });

  let response = null;

  try {
    const { data } = await api.get(`carts?${query}`);
    response = data.data[0];
  } catch {
    console.log("error");
  }

  return response;
};
