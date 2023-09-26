import { get, post, put, Delete } from "../api/apiService";

const services = {};

services.Appselect = async (name) => {
  let response;
  let options = [];
  switch (name) {
    case "genders": {
      response = await get(`/gendersList`);
      options = response.map((element) => ({
        option: {
          name: element.name,
          value: element.id,
        },
      }));
      break;
    }
    case "documentTypes": {
      response = await get(`/documentTypeList`);
      options = response.map((element) => ({
        option: {
          name: element.name,
          value: element.id,
        },
      }));
      break;
    }
    case "bloodTypes": {
      response = await get(`/bloodTypeList`);
      options = response.map((element) => ({
        option: {
          name: element.acronym,
          value: element.id,
        },
      }));
      break;
    }
    case "academicLevels": {
      response = await get(`/academicLevelList`);
      options = response.map((element) => ({
        option: {
          name: element.name,
          value: element.id,
        },
      }));
      break;
    }
    case "specialties": {
      response = await get(`/specialtiesList`);
      options = response.map((element) => ({
        option: {
          name: element.name,
          value: element.id,
        },
      }));
      break;
    }
    case "rolList": {
      response = await get(`/rolList`);
      options = response.map((element) => ({
        option: {
          name: element.name,
          value: element.id,
        },
      }));
      break;
    }
  }
  return options;
};

services.usersList = async () => {
  try {
    return await get(`/users`);
  } catch (error) {
    throw error;
  }
};

services.getBrand = async (location) => {
  try {
    return await post(`/getBrand`, location);
  } catch (error) {
    throw error;
  }
};

services.register = async (formData) => {
  return await post(`/register`, formData);
};

services.edit = async (formData) => {
  return await put(`/user/${formData.document}`, formData);
};

services.login = async (formData) => {
  try {
    let response = await post(`/auth`, {
      authorization: `Basic ${btoa(
        formData.username + ":" + formData.password
      )}`,
    });
    if (response.ok) {
      document.cookie = `token=${response.token}; path=/; samesite=strict`;
      window.localStorage.setItem("user", JSON.stringify(response.user));
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

services.getCurrentProfile = async () => {
  return await get(
    `/user/${JSON.parse(window.localStorage.getItem("user")).PersonDocument}`
  );
};

services.updateProfile = async (formData) => {
  return await put(`/profile/${formData.document}`, formData);
};

services.deleteUser = async (formData) => {
  try {
    await Delete(`/user/${formData.document}`);
  } catch (error) {
    throw error;
  }
};

export { services };
