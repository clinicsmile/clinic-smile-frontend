import { basicFields, appointmentBasicFields } from "./FormFields";
import { services } from "../../services/services";

const list = {};
list.specialties = await services.Appselect("specialties");

// TODO -> conectar con el api
list.doctors = [
  { option: { name: "Juan", value: 1 } },
  { option: { name: "Pedro", value: 2 } },
  { option: { name: "Maria", value: 3 } },
];

// TODO -> conectar con el api
list.status = [
  { option: { name: "Pendiente", value: 1 } },
  { option: { name: "Finalizada", value: 2 } },
  { option: { name: "Cancelada", value: 3 } },
];

// TODO -> conectar con el api
list.pacients = [
  { option: { name: "Andres maya", value: 1 } },
  { option: { name: "Daniel", value: 2 } },
  { option: { name: "Pepite Perez", value: 3 } },
];

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

export const doctorSelect = {
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
};

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

export const pacientSelect = {
  label: {
    name: "Paciente",
    htmlFor: "pacientId",
  },
  select: {
    id: "pacientId",
    name: "pacientId",
    type: "text",
    required: true,
    placeholder: "",
    disabled: false,
    items: list.pacients,
  },
};

export const createFormAdmin = {
  fields: [
    pacientSelect,
    ...appointmentBasicFields,
    doctorSelect,
    statusSelect,
  ],
  buttons: [
    {
      type: "primaryClass",
      title: "Crear Cita",
      action: "createAppointmentAction",
    },
  ],
};

export const createFormDoctor = {
  fields: [pacientSelect, ...appointmentBasicFields, statusSelect],
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
      title: "Crear Cita",
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
