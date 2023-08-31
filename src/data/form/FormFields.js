const registerForm = {
  fields: [
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
        placeholder: "Nombre del paciente",
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
        placeholder: "Apellido del paciente",
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
        placeholder: "Celular",
      },
    },
    {
      label: { name: "Correo", htmlFor: "email" },
      input: {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "Correo electrónico",
      },
    },
    {
      label: { name: "Contraseña", htmlFor: "password" },
      input: {
        id: "password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "Contraseña",
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
        placeholder: "Usuario",
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
        placeholder: "Contraseña",
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
      submit: true
    },
  ],
};

export { login, registerForm };
