import { post } from "../app/api";

const create = async (data) => {
  return await post("appointments/create", data);
};

const createNoAuth = async (data) => {
  return await post("appointments/create-no-auth", data);
};

const update = async (data) => {
  return await post("appointments/update", data);
};

export { create, update, createNoAuth };
