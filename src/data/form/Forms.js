import {
  basicFields,
  aditionalFieldsDoctor,
  authFields,
  rolField,
  aditionalFieldsPatient,
} from "./FormFields";

const Forms = {};

Forms.registerFormPatient = {
  fields: [...basicFields, ...authFields],
  buttons: [
    {
      type: "primaryClass",
      title: "Registrarme",
      action: "signupAction",
    },
  ],
};

Forms.registerFormDoctor = {
  fields: [...basicFields, ...authFields, ...aditionalFieldsDoctor],
  buttons: [
    {
      type: "primaryClass",
      title: "Registrarme",
      action: "signupAction",
    },
  ],
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
    fields: [...rolField]
  };
}

Forms.editDoctor = () => {
  return {
    fields: [
      // {
      //   label: {
      //     name: "Rol",
      //     htmlFor: "rolId",
      //   },
      //   select: {
      //     id: "rolId",
      //     name: "rolId",
      //     type: "text",
      //     required: true,
      //     placeholder: "",
      //     items: [
      //       {
      //         option: "Administrador",
      //       },
      //       {
      //         option: "Doctor",
      //       },
      //       {
      //         option: "Paciente",
      //       },
      //     ],
      //   },
      // },
      ...basicFields,
      ...aditionalFieldsDoctor,
    ],
    buttons: [
      {
        type: "primaryClass",
        title: "Actualizar",
        action: "signupAction",
      },
    ],
  };
};

export { Forms };
