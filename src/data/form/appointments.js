import { basicFields, appointmentBasicFields } from "./FormFields";
import { services } from "../../services/services";

const list = {};
list.specialties = async () => {
  await services.Appselect("specialties");
};

// TODO -> conectar con el api
list.doctors = async () => {
  return await services.Appselect("doctors");
};

// TODO -> conectar con el api
list.status = [
  { option: { name: "Pendiente", value: 1 } },
  { option: { name: "Finalizada", value: 2 } },
  { option: { name: "Cancelada", value: 3 } },
];

// TODO -> conectar con el api
list.patients = async () => {
  return await services.Appselect("patients");
};

const transformBasicFields = async () => {
  const inputTypes = ["date", "select", "input", "textarea"];
  let copyBasicFields = JSON.parse(JSON.stringify(await basicFields()));
  copyBasicFields.forEach((field) => {
    const fieldType = Object.keys(field)[1];
    if (inputTypes.includes(fieldType)) {
      field[fieldType].disabled = true;
    }
  });
  return copyBasicFields;
};

export const doctorSelect = async () => {
  return [
    {
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
        items: await list.doctors(),
      },
    },
  ];
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

export const patientSelect = async () => {
  return [
    {
      label: {
        name: "Paciente",
        htmlFor: "PersonId",
      },
      select: {
        id: "PersonId",
        name: "PersonId",
        type: "text",
        required: true,
        placeholder: "",
        disabled: false,
        items: await list.patients(),
      },
    },
  ];
};

export const createFormAdmin = async () => {
  const basic = await appointmentBasicFields();
  const patient = await patientSelect();
  const doctors = await doctorSelect();
  return {
    fields: [...patient, ...basic, ...doctors],
    buttons: [
      {
        type: "primaryClass",
        title: "Aceptar",
        action: "createAppointmentAction",
      },
    ],
  };
};

export const createFormDoctor = async () => {
  const basic = await appointmentBasicFields();
  const patient = await patientSelect();
  return {
    fields: [...patient, ...basic, statusSelect],
    buttons: [
      {
        type: "primaryClass",
        title: "Crear Cita",
        action: "createAppointmentAction",
      },
    ],
  };
};

// formulario para pacientes autenticados
export const createFormPacientAuth = async () => {
  const basic = await appointmentBasicFields();
  const transform = await transformBasicFields();
  return {
    fields: [...transform, ...basic],
    buttons: [
      {
        type: "primaryClass",
        title: "Aceptar",
        action: "createAppointmentAction",
      },
    ],
  };
};

// formulario para pacientes no autenticados
export const createNoAuthForm = async () => {
  const apoimentbasic = await appointmentBasicFields();
  const basic = await basicFields();
  return {
    fields: [...basic, ...apoimentbasic],
    buttons: [
      {
        type: "primaryClass",
        title: "Crear Cita",
        action: "createAppointmentAction",
      },
    ],
  };
};

export const editForm = async () => {
  return {
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
          items: await list.specialties(),
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
          pattern: "(0[7-9]|1[0-6]):[0-5][0-9]"
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
};
