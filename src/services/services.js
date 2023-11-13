import { get, post, put, Delete, postMultipart } from "../api/apiService";
import { Logout } from "../pages";
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

    case "patients": {
      response = await get(`/patients`);
      options = response.map((element) => ({
        option: {
          name: `${element.name} ${element.lastName}`,
          value: element.document,
        },
      }));
      break;
    }

    case "doctors": {
      response = await get(`/doctors`);
      options = response.map((element) => ({
        option: {
          name: `${element?.Person?.name} ${element?.Person?.lastName}`,
          value: element.id,
        },
      }));
      break;
    }
  }
  return options;
};

services.usersList = async ({ rolId = 0 }) => {
  try {
    return await get(`/users/${rolId}`);
  } catch (error) {
    console.log(error);
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.getBrand = async (location) => {
  try {
    return await post(`/getBrand`, location);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.register = async (formData) => {
  try {
    return await post(`/register`, formData);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.edit = async (formData) => {
  try {
    return await put(`/user/${formData.id}`, formData);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.login = async (formData, newSession) => {
  try {
    let response = await post(`/auth`, {
      newSession: newSession,
      authorization: `Basic ${btoa(
        formData.username + ":" + formData.password
      )}`,
    });
    if (response.ok) {
      window.localStorage.setItem("token", response.token);
      // document.cookie = `token=${response.token}; path=/; samesite=strict`;
      window.localStorage.setItem("user", JSON.stringify(response.user));
      console.log(response);
      return true;
    }
  } catch (error) {
    return error.response.status;
  }
};

services.logOut = async (username) => {
  try {
    await post("/logOut", { username: username });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};

services.getCurrentProfile = async () => {
  try {
    return await get(
      `/user/${JSON.parse(window.localStorage.getItem("user")).PersonId}`
    );
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.updateProfile = async (formData) => {
  try {
    return await put(`/profile/${formData.document}`, formData);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.deleteUser = async (formData) => {
  try {
    await Delete(`/user/${formData.id}`);
  } catch (error) {
    window.localStorage.clear();
    throw error;
  }
};

services.getDoctorAppoiments = async () => {
  try {
    return await get(
      `/appoiments/doctor/${JSON.parse(window.localStorage.getItem("user")).id}`
    );
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.getPatientAppoiments = async () => {
  try {
    return await get(
      `/appoiments/paciente/${
        JSON.parse(window.localStorage.getItem("user")).PersonDocument
      }`
    );
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.getAllAppoiments = async () => {
  try {
    return await get(`/appoiments`);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.getPendingAppoiments = async () => {
  try {
    return await get(`/appoimentsPending`);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.getDoctors = async () => {
  try {
    return await get("/doctors");
  } catch (error) {
    window.localStorage.clear();
    throw error;
  }
};

services.assignDoctor = async (id, Doctor, estado) => {
  try {
    return await put(`/appoiment/${id}`, { doctorId: Doctor, status: estado });
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.cancelAppoiment = async (formData) => {
  try {
    return await put(`/cancelAppoiment/${formData.id}`);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.registerProcedure = async (formdata) => {
  console.log("services FormData", formdata);
  try {
    return await post("/registerProcedure", formdata);
  } catch (error) {
    console.log(error);
    // window.localStorage.clear();
    // Logout();
    // throw error;
  }
};

services.uploadImageProcedure = async (formdata) => {
  console.log("services FormData", formdata);
  try {
    return await post("/uploadImage", formdata);
  } catch (error) {
    console.log(error);
    // window.localStorage.clear();
    // Logout();
    // throw error;
  }
};

services.consultPatientProcedures = async (data) => {
  try {
    return await get(`toListAllRegister/${data.document}`);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

services.reactivateUser = async (formData) => {
  try {
    return await put(`/reactivateUser/${formData.document}`);
  } catch (error) {
    window.localStorage.clear();
    Logout();
    throw error;
  }
};

export { services };
