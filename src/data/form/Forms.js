import {
  basicFields,
  aditionalFieldsDoctor,
  authFields,
  rolField,
  aditionalFieldsPatient,
  formFieldsProcedures,
  formFieldsConsultProcedures,
  appointmentBasicFields,
} from "./FormFields";

const Forms = {};

Forms.registerFormAdmin = () => {
  return {
    fields: [...basicFields, ...authFields],
    buttons: [
      {
        type: "primaryClass",
        title: "Registrarme",
        action: "signupAction",
      },
    ],
  };
};
Forms.registerFormPatient = () => {
  return {
    fields: [...basicFields, ...aditionalFieldsPatient, ...authFields],
    buttons: [
      {
        type: "primaryClass",
        title: "Registrarme",
        action: "signupAction",
      },
    ],
  };
};

Forms.registerFormDoctor = () => {
  return {
    fields: [...basicFields, ...aditionalFieldsDoctor, ...authFields],
    buttons: [
      {
        type: "primaryClass",
        title: "Registrarme",
        action: "signupAction",
      },
    ],
  };
};

Forms.login = {
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

Forms.editProfilePatient = () => {
  basicFields[0].select.disabled = true;
  basicFields[1].input.disabled = true;

  return {
    fields: [...basicFields],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "signupAction",
      },
    ],
  };
};

Forms.editProfileDoctor = () => {
  basicFields[0].select.disabled = true;
  basicFields[1].input.disabled = true;
  aditionalFieldsDoctor[0].select.disabled = true;
  aditionalFieldsDoctor[1].input.disabled = true;
  aditionalFieldsDoctor[2].input.disabled = true;
  aditionalFieldsDoctor[3].select.disabled = true;
  aditionalFieldsDoctor[4].input.disabled = true;
  return {
    fields: [...basicFields, ...aditionalFieldsDoctor],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "signupAction",
      },
    ],
  };
};

Forms.editPatient = () => {
  return {
    fields: [...basicFields, ...aditionalFieldsPatient],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "signupAction",
      },
    ],
  };
};

Forms.editAdmin = () => {
  return {
    fields: [...basicFields],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "",
      },
    ],
  };
};

Forms.rolField = () => {
  return {
    fields: [...rolField],
  };
};

Forms.editDoctor = () => {
  return {
    fields: [...basicFields, ...aditionalFieldsDoctor],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "signupAction",
      },
    ],
  };
};

Forms.CreateProcedure = () => {
  const modifiedForm = formFieldsProcedures;
  modifiedForm.forEach((e) => {
    if (e.input) {
      e.input.readOnly = false;
      e.input.value = "";
    }
    if (e.textarea) {
      e.textarea.readOnly = false;
      e.textarea.value = "";
    }
    if (e.checkbox) {
      e.checkbox.items.forEach((f) => {
        f.check.readOnly = false;
        f.check.checked = false;
      });
    }
  });
  return {
    fields: [...modifiedForm],
    buttons: [
      {
        type: "primaryClass",
        title: "Registrar",
        action: "signupAction",
      },
    ],
  };
};

Forms.consultProcedures = () => {
  return {
    fields: [...formFieldsConsultProcedures],
    buttons: [
      {
        type: "primaryClass",
        title: "Consultar",
        action: "signupAction",
      },
    ],
  };
};

Forms.viewProcedures = () => {
  const modifiedForm = formFieldsProcedures;
  modifiedForm.forEach((e) => {
    if (e.input) {
      e.input.readOnly = true;
    }
    if (e.textarea) {
      e.textarea.readOnly = true;
    }
    if (e.checkbox) {
      e.checkbox.items.forEach((f) => {
        f.check.readOnly = true;
      });
    }
  });
  return { fields: [...modifiedForm] };
};

Forms.createAppoimentProcedure = () => {
  return {
    fields: [...appointmentBasicFields],
    buttons: [
      {
        type: "primaryClass",
        title: "Crear Cita",
        action: "editAppointmentAction",
      },
    ],
  };
};

export { Forms };
