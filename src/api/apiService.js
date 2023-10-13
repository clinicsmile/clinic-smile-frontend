import fetch from "../libs/axios";

let setToken = (user) => {
  fetch.defaults.headers.common["Authorization"] = user
    ? `Bearer ${cookie.replace("token=", "")}`
    : "";
};

const post = async (endPoint, req) => {
  return await execHttpMethod("post", endPoint, req);
};

const get = async (endPoint, req) => {
  return await execHttpMethod("get", endPoint, req);
};

const put = async (endPoint, req) => {
  return await execHttpMethod("put", endPoint, req);
};

const Delete = async (endPoint, req) => {``
  return await execHttpMethod("delete", endPoint, req);
};

const execHttpMethod = async (method, endPoint, params) => {
  params = method == "post" || "put" ? params : { params };
  setToken();
  try {
    const { data } = await fetch[method](endPoint, params);
    return data;
  } catch (error) {
    console.log(error.data);
    throw error;
  }
};

export { post, get, put, Delete };
