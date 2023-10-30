import { Logout } from "../pages";
import { post, put } from "../api/apiService";

const create = async (data) => {
  try {
    return await post("appoiments", data);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw new error();
  }
};

const createNoAuth = async (data) => {
  try {
    return await post("appointments/create-no-auth", data);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw new error();
  }
};

const update = async (data, id) => {
  try {
    return await put(`appoiment/${id}`, data);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw new error();
  }
};

export { create, update, createNoAuth };
