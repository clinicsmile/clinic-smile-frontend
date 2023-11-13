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

Forms.registerFormAdmin = async () => {
  const basic = await basicFields();
  return {
    fields: [...basic, ...authFields],
    buttons: [
      {
        type: "primaryClass",
        title: "Registrarme",
        action: "signupAction",
      },
    ],
  };
};
Forms.registerFormPatient = async () => {
  const basic = await basicFields();
  const aditional = await aditionalFieldsPatient();
  return {
    fields: [...basic, ...aditional, ...authFields],
    buttons: [
      {
        type: "primaryClass",
        title: "Registrarme",
        action: "signupAction",
      },
    ],
  };
};

Forms.registerFormDoctor = async () => {
  const basic = await basicFields();
  const aditional = await aditionalFieldsDoctor();
  return {
    fields: [...basic, ...aditional, ...authFields],
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

Forms.editProfilePatient = async () => {
  const basic = await basicFields();
  basic[0].select.disabled = true;
  basic[1].input.disabled = true;

  return {
    fields: [...basic],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "signupAction",
      },
    ],
  };
};

Forms.editProfileDoctor = async () => {
  const basic = await basicFields();
  const aditional = await aditionalFieldsDoctor();
  basic[0].select.disabled = true;
  basic[1].input.disabled = true;
  aditional[0].select.disabled = true;
  aditional[1].input.disabled = true;
  aditional[2].input.disabled = true;
  aditional[3].select.disabled = true;
  aditional[4].input.disabled = true;
  return {
    fields: [...basic, ...aditional],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "signupAction",
      },
    ],
  };
};

Forms.editPatient = async () => {
  const basic = await basicFields();
  const aditional = await aditionalFieldsPatient();
  return {
    fields: [...basic, ...aditional],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "signupAction",
      },
    ],
  };
};

Forms.editAdmin = async () => {
  const basic = await basicFields();
  return {
    fields: [...basic],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "",
      },
    ],
  };
};

Forms.rolField = async () => {
  const data = await rolField();
  console.log(data);
  data[0].select.items.unshift({ option: { name: "Seleccione un rol", value: null } });
  return {
    fields: [...data],
  };
};

Forms.editDoctor = async () => {
  const basic = await basicFields();
  const aditional = await aditionalFieldsDoctor();
  return {
    fields: [...basic, ...aditional],
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

Forms.createAppoimentProcedure = async () => {
  const fields = await appointmentBasicFields();
  return {
    fields: [...fields],
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
