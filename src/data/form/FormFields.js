import { services } from "../../services/services";
const list = {};
list.documentTypes = await services.Appselect("documentTypes");
list.genders = await services.Appselect("genders");
list.rolList = await services.Appselect("rolList");

list.specialties = await services.Appselect("specialties");
list.academicLevels = await services.Appselect("academicLevels");

list.bloodTypes = await services.Appselect("bloodTypes");

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
      items: list.rolList,
      onChangeAction: true,
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
      pattern: "^(?=.*[A-Z])(?=.*[0-9]).{8,}$",
      title:
        "La contraseña debe contener al menos 8 caracteres, incluyendo al menos un número, una mayúscula y una minúscula",
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
      items: list.documentTypes,
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
      items: list.genders,
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
      htmlFor: "academicLevelId",
    },
    select: {
      id: "academicLevelId",
      name: "academicLevelId",
      type: "text",
      required: true,
      placeholder: "",
      disabled: false,
      items: list.academicLevels,
    },
  },
  {
    label: {
      name: "Título Universitario",
      htmlFor: "academicTitle",
    },
    input: {
      id: "academicTitle",
      name: "academicTitle",
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
      htmlFor: "specialtyId",
    },
    select: {
      id: "specialtyId",
      name: "specialtyId",
      type: "text",
      required: true,
      placeholder: "",
      disabled: false,
      items: list.specialties,
    },
  },
  {
    label: {
      name: "Tarjeta Profesional",
      htmlFor: "profesionalCardNumber",
    },
    input: {
      id: "profesionalCardNumber",
      name: "profesionalCardNumber",
      type: "text",
      required: true,
      placeholder: "",
      disabled: false,
    },
  },
];

const aditionalFieldsPatient = [
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
      items: list.bloodTypes,
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
];
const appointmentBasicFields = [
  {
    label: {
      name: "Motivo de la consulta",
      htmlFor: "reason",
    },
    textarea: {
      id: "reason",
      name: "reason",
      type: "text-area",
      required: true,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "Especialidad",
      htmlFor: "specialtyId",
    },
    select: {
      id: "specialtyId",
      name: "specialtyId",
      type: "text",
      required: true,
      placeholder: "",
      disabled: false,
      items: list.specialties,
    },
  },
  {
    label: {
      name: "Fecha de la consulta",
      htmlFor: "date",
    },
    date: {
      id: "date",
      name: "date",
      type: "date",
      required: true,
      placeholder: "",
      disabled: false,
      min: true,
      max: false,
    },
  },
  {
    label: {
      name: "Hora de la consulta",
      htmlFor: "time",
    },
    date: {
      id: "time",
      name: "time",
      type: "time",
      required: true,
      placeholder: "",
      disabled: false,
    },
  },
]

export {
  authFields,
  basicFields,
  aditionalFieldsDoctor,
  rolField,
  aditionalFieldsPatient,
  appointmentBasicFields
};