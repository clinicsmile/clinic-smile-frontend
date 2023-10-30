import { post } from "../app/api";

const getBrand = async (data) => {
  try {
    return await post("clinics/get", data);
  } catch (error) {
    window.localStorage.clear();
    throw error;
  }
};

export default getBrand;
