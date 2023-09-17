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
    case "academicLevels": {
      response = await axios.get(`${API.url}/academicLevelList`);
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
    case "specialties": {
      response = await axios.get(`${API.url}/specialtiesList`);
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
    case "rolList": {
      response = await axios.get(`${API.url}/rolList`);
      response = response.data;
      response.forEach((element) => {
        options.push({
          option: {
            name: element.name,
            value: element.id,
          },
        });
      });
      console.log(response);
      break;
    }
  }
  return options;
};
const rolField = [
  {
    label: {
      name: "Rol",
      htmlFor: "rolId",
    },
    select: {
      id: "rolId",
      name: "rolId",
      type: "text",
      required: true,
      placeholder: "",
      items: await selectList("rolList"),
    },
  },
];

const authFields = [
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
];

const basicFields = [
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
      disabled: false,
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
      disabled: false,
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
      disabled: false,
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
      disabled: false,
    },
  },
  {
    label: {
      name: "Fecha de Nacimiento",
      htmlFor: "birthDate",
    },
    date: {
      id: "birthDate",
      name: "birthDate",
      type: "date",
      required: true,
      placeholder: "",
      disabled: false,
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
      disabled: false,
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
      disabled: false,
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
      disabled: false,
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
      disabled: false,
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
      disabled: false,
    },
  },
  {
    label: {
      name: "Correo",
      htmlFor: "email",
    },
    input: {
      id: "email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "",
      disabled: false,
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
      disabled: false,
    },
  },
];

const aditionalFieldsDoctor = [
  {
    label: {
      name: "Nivel Academino",
      htmlFor: "academicLevel",
    },
    select: {
      id: "academicLevel",
      name: "academicLevel",
      type: "text",
      required: true,
      placeholder: "",
      disabled: false,
      items: await selectList("academicLevels"),
    },
  },
  {
    label: {
      name: "Título Universitario",
      htmlFor: "collegeDegree",
    },
    input: {
      id: "collegeDegree",
      name: "collegeDegree",
      type: "text",
      required: true,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "Universidad",
      htmlFor: "university",
    },
    input: {
      id: "university",
      name: "university",
      type: "text",
      required: true,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "Especialidad",
      htmlFor: "specialty",
    },
    select: {
      id: "specialty",
      name: "specialty",
      type: "text",
      required: true,
      placeholder: "",
      disabled: false,
      items: await selectList("specialties"),
    },
  },
  {
    label: {
      name: "Tarjeta Profesional",
      htmlFor: "professionalCard",
    },
    input: {
      id: "professionalCard",
      name: "professionalCard",
      type: "text",
      required: true,
      placeholder: "",
      disabled: false,
    },
  },
];

export { authFields, basicFields, aditionalFieldsDoctor, rolField };
