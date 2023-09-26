import { basicFields } from "./FormFields";
import { services } from "../../services/services";

const list = {};
list.specialties = await services.Appselect("specialties");

export const createForm = {
  fields: [
    ...basicFields,
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
