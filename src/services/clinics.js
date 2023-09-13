import { post } from "../app/api";

const getBrand = async (data) => {
  return await post("clinics/get", data);
};

export default getBrand;
