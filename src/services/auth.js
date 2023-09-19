import { post } from "../app/api";

const signIn = async (data) => {
  return await post("Auth", data);
};
export default signIn;
