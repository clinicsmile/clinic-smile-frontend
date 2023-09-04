const registerForm = {
  fields: [
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
        placeholder: "",
      },
    },
    {
      label: { name: "Correo", htmlFor: "email" },
      input: {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "",
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
      },
    },
    {
      label: {
        name: "Fecha de Nacimiento",
        htmlFor: "birthdate",
      },
      input: {
        id: "birthdate",
        name: "birthdate",
        type: "date",
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

const profileForm ={
  fields: [
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
        placeholder: "",
      },
    },
    {
      label: { name: "Correo", htmlFor: "email" },
      input: {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "",
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
      },
    },
    {
      label: {
        name: "Fecha de Nacimiento",
        htmlFor: "birthdate",
      },
      input: {
        id: "birthdate",
        name: "birthdate",
        type: "date",
        required: true,
        placeholder: "",
      },
    }
  ],
  buttons: [
    {
      type: "primaryClass",
      title: "Actualizar",
      action: "signupAction",
    },
  ],
}

export { login, registerForm,profileForm };
