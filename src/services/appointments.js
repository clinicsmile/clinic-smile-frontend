import { post, put} from "../api/apiService";

const create = async (data) => {
  return await post("appoiments", data);
};

const createNoAuth = async (data) => {
  return await post("appointments/create-no-auth", data);
};

const update = async (data, id) => {
  return await put(`appoiment/${id}`, data);
};

export { create, update, createNoAuth };
