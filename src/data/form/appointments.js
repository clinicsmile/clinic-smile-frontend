import { basicFields, appointmentBasicFields } from "./FormFields";
import { services } from "../../services/services";

const list = {};
list.specialties = await services.Appselect("specialties");

// TODO -> conectar con el api
list.doctors = await services.Appselect("doctors");

// TODO -> conectar con el api
list.status = [
  { option: { name: "Pendiente", value: 1 } },
  { option: { name: "Finalizada", value: 2 } },
  { option: { name: "Cancelada", value: 3 } },
];

// TODO -> conectar con el api
list.patients = await services.Appselect("patients");


const transformBasicFields = () => {
  const inputTypes = ["date", "select", "input", "textarea"];
  let copyBasicFields = JSON.parse(JSON.stringify(basicFields));
  copyBasicFields.forEach((field) => {
    const fieldType = Object.keys(field)[1];
    if (inputTypes.includes(fieldType)) {
      field[fieldType].disabled = true;
    }
  });
  return copyBasicFields;
};

export const doctorSelect = 
[{
  label: {
    name: "Odontólogo",
    htmlFor: "doctorId",
  },
  select: {
    id: "doctorId",
    name: "doctorId",
    type: "text",
    required: true,
    placeholder: "",
    disabled: false,
    items: list.doctors,
  },
}];

export const statusSelect = {
  label: {
    name: "Estado",
    htmlFor: "statusId",
  },
  select: {
    id: "statusId",
    name: "statusId",
    type: "text",
    required: true,
    placeholder: "",
    disabled: false,
    items: list.status,
  },
};

export const patientSelect = [{
  label: {
    name: "Paciente",
    htmlFor: "PersonDocument",
  },
  select: {
    id: "PersonDocument",
    name: "PersonDocument",
    type: "text",
    required: true,
    placeholder: "",
    disabled: false,
    items: list.patients,
  },
}];

export const createFormAdmin = {
  fields: [
    ...patientSelect,
    ...appointmentBasicFields,
    ...doctorSelect
  ],
  buttons: [
    {
      type: "primaryClass",
      title: "Aceptar",
      action: "createAppointmentAction",
    },
  ],
};

export const createFormDoctor = {
  fields: [...patientSelect, ...appointmentBasicFields, statusSelect],
  buttons: [
    {
      type: "primaryClass",
      title: "Crear Cita",
      action: "createAppointmentAction",
    },
  ],
};

// formulario para pacientes autenticados
export const createFormPacientAuth = {
  fields: [...transformBasicFields(), ...appointmentBasicFields],
  buttons: [
    {
      type: "primaryClass",
      title: "Aceptar",
      action: "createAppointmentAction",
    },
  ],
};

// formulario para pacientes no autenticados
export const createNoAuthForm = {
  fields: [...basicFields, ...appointmentBasicFields],
  buttons: [
    {
      type: "primaryClass",
      title: "Crear Cita",
      action: "createAppointmentAction",
    },
  ],
};

export const editForm = {
  fields: [
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
  ],
  buttons: [
    {
      type: "primaryClass",
      title: "Editar Cita",
      action: "editAppointmentAction",
    },
  ],
};
