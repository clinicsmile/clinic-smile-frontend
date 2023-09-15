import axios from "axios";
import { API } from "../../common/config";

const selectList = async (name) => {
  let response;
  let options = [];
  switch (name) {
    case "genders": {
      response = await axios.get(`${API.url}/gendersList`);
      response = response.data;
      response.forEach((element) => {
        options.push({
          option: {
            name: element.name,
            value: element.id,
          },
        });
      });
      break;
    }
    case "documentTypes": {
      response = await axios.get(`${API.url}/documentTypeList`);
      response = response.data;
      response.forEach((element) => {
        options.push({
          option: {
            name: element.name,
            value: element.id,
          },
        });
      });
      break;
    }
    case "bloodTypes": {
      response = await axios.get(`${API.url}/bloodTypeList`);
      response = response.data;
      response.forEach((element) => {
        options.push({
          option: {
            name: element.acronym,
            value: element.id,
          },
        });
      });
      break;
    }
  }
  return options;
};

const registerFormPatient = {
  fields: [
    {
      label: {
        name: "Tipo de Documento",
        htmlFor: "documentTypeId",
      },
      select: {
        id: "documentTypeId",
        name: "documentTypeId",
        type: "text",
        required: true,
        placeholder: "",
        items: await selectList("documentTypes"),
      },
    },
    {
      label: {
        name: "Documento",
        htmlFor: "document",
      },
      input: {
        id: "document",
        name: "document",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Nombre",
        htmlFor: "name",
      },
      input: {
        id: "name",
        name: "name",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Apellido",
        htmlFor: "lastName",
      },
      input: {
        id: "lastName",
        name: "lastName",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Fecha de Nacimiento",
        htmlFor: "birthDate",
      },
      input: {
        id: "birthDate",
        name: "birthDate",
        type: "date",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Genero",
        htmlFor: "genderId",
      },
      select: {
        id: "genderId",
        name: "genderId",
        type: "text",
        required: true,
        placeholder: "",
        items: await selectList("genders"),
      },
    },
    {
      label: {
        name: "Tipo de sangre",
        htmlFor: "bloodTypeId",
      },
      select: {
        id: "bloodTypeId",
        name: "bloodTypeId",
        type: "text",
        required: true,
        placeholder: "",
        items: await selectList("bloodTypes"),
      },
    },
    {
      label: {
        name: "Alergias",
        htmlFor: "allergies",
      },
      textarea: {
        id: "allergies",
        name: "allergies",
        type: "text-area",
        required: false,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Enfermedades",
        htmlFor: "diseases",
      },
      textarea: {
        id: "diseases",
        name: "diseases",
        type: "text-area",
        required: false,
        placeholder: "",
      },
    },

    {
      label: {
        name: "Celular o Telefono",
        htmlFor: "cellPhone",
      },
      input: {
        id: "cellPhone",
        name: "cellPhone",
        type: "tel",
        required: true,
        placeholder: "",
        pattern: "[3]{1}[0-4]{2}[0-9]{3}[0-9]{4}|[3]{1}[0-9]{2}[0-9]{4}",
      },
    },
    {
      label: { name: "Correo", htmlFor: "email" },
      input: {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Direccion",
        htmlFor: "address",
      },
      input: {
        id: "address",
        name: "address",
        type: "text",
        required: true,
        placeholder: "",
      },
    },

    {
      label: {
        name: "Nombre de Usuario",
        htmlFor: "username",
      },
      input: {
        id: "username",
        name: "username",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: { name: "Contraseña", htmlFor: "password" },
      input: {
        id: "password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "",
        pattern: "^.*$",
        title:
          "La contraseña debe contener al menos 8 caracteres, incluyendo al menos un número, una mayúscula y una minúscula.",
      },
    },
  ],
  buttons: [
    {
      type: "primaryClass",
      title: "Registrarme",
      action: "signupAction",
    },
  ],
};

const registerFormDoctor = {
  fields: [
    {
      label: {
        name: "Tipo de Documento",
        htmlFor: "documentTypeId",
      },
      select: {
        id: "documentTypeId",
        name: "documentTypeId",
        type: "text",
        required: true,
        placeholder: "",
        items: await selectList("documentTypes"),
      },
    },
    {
      label: {
        name: "Documento",
        htmlFor: "document",
      },
      input: {
        id: "document",
        name: "document",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Nombre",
        htmlFor: "name",
      },
      input: {
        id: "name",
        name: "name",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Apellido",
        htmlFor: "lastName",
      },
      input: {
        id: "lastName",
        name: "lastName",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Celular",
        htmlFor: "cellPhone",
      },
      input: {
        id: "cellPhone",
        name: "cellPhone",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: { name: "Correo", htmlFor: "email" },
      input: {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Direccion",
        htmlFor: "address",
      },
      input: {
        id: "address",
        name: "address",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Fecha de Nacimiento",
        htmlFor: "birthDate",
      },
      input: {
        id: "birthDate",
        name: "birthDate",
        type: "date",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Genero",
        htmlFor: "genderId",
      },
      select: {
        id: "genderId",
        name: "genderId",
        type: "text",
        required: true,
        placeholder: "",
        items: await selectList("genders"),
      },
    },
    {
      label: {
        name: "Nombre de Usuario",
        htmlFor: "username",
      },
      input: {
        id: "username",
        name: "username",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: { name: "Contraseña", htmlFor: "password" },
      input: {
        id: "password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "",
      },
    },
  ],
  buttons: [
    {
      type: "primaryClass",
      title: "Registrarme",
      action: "signupAction",
    },
  ],
};

const login = {
  fields: [
    {
      label: {
        name: "Usuario",
        htmlFor: "username",
      },
      input: {
        id: "username",
        name: "username",
        type: "text",
        required: true,
        placeholder: "",
        validations: {
          required: {
            value: true,
            message: "El usuario es requerido",
          },
        },
      },
    },
    {
      label: {
        name: "Contraseña",
        htmlFor: "password",
      },
      input: {
        id: "password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "",
        validations: {
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
          minLength: {
            value: 5,
            message: "Longitud mínima de 5",
          },
        },
      },
    },
  ],
  buttons: [
    {
      type: "primaryClass",
      title: "Iniciar sesión",
      action: "loginAction",
      submit: true,
    },
  ],
};

const profileForm = {
  fields: [
    {
      label: {
        name: "Documento",
        htmlFor: "document",
      },
      input: {
        id: "document",
        name: "document",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Nombre",
        htmlFor: "name",
      },
      input: {
        id: "name",
        name: "name",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Apellido",
        htmlFor: "lastname",
      },
      input: {
        id: "lastname",
        name: "lastname",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Celular",
        htmlFor: "cellphone",
      },
      input: {
        id: "cellphone",
        name: "cellphone",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: { name: "Correo", htmlFor: "email" },
      input: {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Direccion",
        htmlFor: "address",
      },
      input: {
        id: "address",
        name: "address",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Fecha de Nacimiento",
        htmlFor: "birthdate",
      },
      input: {
        id: "birthdate",
        name: "birthdate",
        type: "date",
        required: true,
        placeholder: "",
      },
    },
  ],
  buttons: [
    {
      type: "primaryClass",
      title: "Actualizar",
      action: "signupAction",
    },
  ],
};

const EditProfile = {
  fields: [
    {
      label: {
        name: "Documento",
        htmlFor: "document",
      },
      input: {
        id: "document",
        name: "document",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Nombre",
        htmlFor: "name",
      },
      input: {
        id: "name",
        name: "name",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Apellido",
        htmlFor: "lastName",
      },
      input: {
        id: "lastName",
        name: "lastName",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Celular",
        htmlFor: "cellPhone",
      },
      input: {
        id: "cellPhone",
        name: "cellPhone",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: { name: "Correo", htmlFor: "email" },
      input: {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Direccion",
        htmlFor: "address",
      },
      input: {
        id: "address",
        name: "address",
        type: "text",
        required: true,
        placeholder: "",
      },
    },
    {
      label: {
        name: "Fecha de Nacimiento",
        htmlFor: "birthDate",
      },
      input: {
        id: "birthDate",
        name: "birthDate",
        type: "date",
        required: true,
        placeholder: "",
      },
    },
  ],

  buttons: [
    {
      type: "primaryClass",
      title: "Actualizar",
      action: "signupAction",
    },
  ],
  select: [
    {
      label: {
        name: "Rol",
        htmlFor: "rol",
      },
      field: {
        id: "rol",
        name: "rol",
        type: "text",
        required: true,
        placeholder: "",
        items: [
          {
            option: "Administrador",
          },
          {
            option: "Doctor",
          },
          {
            option: "Paciente",
          },
        ],
      },
    },
  ],
};

export {
  login,
  registerFormPatient,
  registerFormDoctor,
  profileForm,
  EditProfile,
};
