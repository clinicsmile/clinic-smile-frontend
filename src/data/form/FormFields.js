import { services } from "../../services/services";
const list = {};

list.documentTypes = async () => {
  return await services.Appselect("documentTypes");
};
list.genders = async () => {
  return await services.Appselect("genders");
};

list.rolList = async () => {
  return await services.Appselect("rolList");
};

list.specialties = async () => {
  return await services.Appselect("specialties");
};

list.academicLevels = async () => {
  return await services.Appselect("academicLevels");
};

list.bloodTypes = async () => {
  return await services.Appselect("bloodTypes");
};

const date18Validation = () => {
  let minDate = new Date();
  minDate.setFullYear(new Date().getFullYear() - 18);
  return minDate.toISOString().split("T")[0];
};

const rolField = async () => {
  return [
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
        items: await list.rolList(),
        onChangeAction: true,
      },
    },
  ];
};

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

const basicFields = async () => {
  return [
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
        items: await list.documentTypes(),
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
        min: false,
        max: true,
        maxValue: date18Validation(),
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
        items: await list.genders(),
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
};

const aditionalFieldsDoctor = async () => {
  return [
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
        items: await list.academicLevels(),
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
        items: await list.specialties(),
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
};

const aditionalFieldsPatient = async () => {
  return [
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
        items: await list.bloodTypes(),
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
};
const appointmentBasicFields = async () => {
  return [
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
      },
    },
  ];
};

const formFieldsProcedures = [
  {
    label: {
      name: "¿Por qué asistio a la consulta?",
      htmlFor: "asistencia",
    },
    textarea: {
      id: "asistencia",
      name: "asistencia",
      type: "text-area",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Consultó antes con algún otro profesional?",
      htmlFor: "consulta",
    },
    checkbox: {
      id: "consulta",
      name: "consulta",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-consulta",
          },
          check: {
            id: "SI-consulta",
            name: "SI-consulta",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-consulta",
          },
          check: {
            id: "NO-consulta",
            name: "NO-consulta",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Tomó algún medicamento?",
      htmlFor: "medicamento",
    },
    checkbox: {
      id: "medicamento",
      name: "medicamento",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-Medicamento",
          },
          check: {
            id: "SI-Medicamento",
            name: "SI-Medicamento",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-Medicamento",
          },
          check: {
            id: "NO-Medicamento",
            name: "NO-Medicamento",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Nombre de los medicamentos?",
      htmlFor: "medicamentos",
    },
    textarea: {
      id: "medicamentos",
      name: "medicamentos",
      type: "text-area",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Desde cuando?",
      htmlFor: "tiempo",
    },
    textarea: {
      id: "tiempo",
      name: "tiempo",
      type: "text-area",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Obtuvo resultados?",
      htmlFor: "resultados",
    },
    checkbox: {
      id: "resultados",
      name: "resultados",
      type: "checkbox",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-resultados",
          },
          check: {
            id: "SI-resultados",
            name: "SI-resultados",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-resultados",
          },
          check: {
            id: "NO-resultados",
            name: "NO-resultados",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Ha tenido dolor, de qué tipo?",
      htmlFor: "dolor",
    },
    checkbox: {
      id: "dolor",
      name: "dolor",
      type: "text",
      items: [
        {
          label: {
            name: "Suave",
            htmlFor: "Suave-dolor",
          },
          check: {
            id: "Suave-dolor",
            name: "Suave-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Moderado",
            htmlFor: "Moderado-dolor",
          },
          check: {
            id: "Moderado-dolor",
            name: "Moderado-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Intenso",
            htmlFor: "Intenso-dolor",
          },
          check: {
            id: "Intenso-dolor",
            name: "Intenso-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Temporario",
            htmlFor: "Temporario-dolor",
          },
          check: {
            id: "Temporario-dolor",
            name: "Temporario-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Intermitente",
            htmlFor: "Intermitente-dolor",
          },
          check: {
            id: "Intermitente-dolor",
            name: "Intermitente-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Continuo",
            htmlFor: "Continuo-dolor",
          },
          check: {
            id: "Continuo-dolor",
            name: "Continuo-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Espontáneo",
            htmlFor: "Espontáneo-dolor",
          },
          check: {
            id: "Espontáneo-dolor",
            name: "Espontáneo-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Provocado",
            htmlFor: "EspoProvocadontáneo-dolor",
          },
          check: {
            id: "Provocado-dolor",
            name: "Provocado-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Al frio",
            htmlFor: "AlFrio-dolor",
          },
          check: {
            id: "AlFrio-dolor",
            name: "AlFrio-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Al calor",
            htmlFor: "AlCalor-dolor",
          },
          check: {
            id: "AlCalor-dolor",
            name: "AlCalor-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Localizado",
            htmlFor: "Localizado-dolor",
          },
          check: {
            id: "Localizado-dolor",
            name: "Localizado-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Irradiado",
            htmlFor: "Irradiado-dolor",
          },
          check: {
            id: "Irradiado-dolor",
            name: "Irradiado-dolor",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Localizado, dónde?",
      htmlFor: "localizado",
    },
    input: {
      id: "localizado",
      name: "localizado",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Irradiado, dónde?",
      htmlFor: "Irradiado",
    },
    input: {
      id: "Irradiado",
      name: "Irradiado",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Puede calmarlo con algo?",
      htmlFor: "calmar",
    },
    textarea: {
      id: "calmar",
      name: "calmar",
      type: "text-area",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Sufrio algun golpe en los dientes?",
      htmlFor: "golpe",
    },
    checkbox: {
      id: "golpe",
      name: "golpe",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-golpe",
          },
          check: {
            id: "SI-golpe",
            name: "SI-golpe",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-golpe",
          },
          check: {
            id: "NO-golpe",
            name: "NO-golpe",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      disabled: false,
      placeholder: "",
    },
  },
  {
    label: {
      name: "¿Cuando?",
      htmlFor: "cuando",
    },
    textarea: {
      id: "cuando",
      name: "reason",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Cómo se produjo?",
      htmlFor: "golpe",
    },
    textarea: {
      id: "produjo",
      name: "produjo",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Se fracturó algun diente?",
      htmlFor: "fractura",
    },
    checkbox: {
      id: "fractura",
      name: "fractura",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-fractura",
          },
          check: {
            id: "SI-fractura",
            name: "SI-fractura",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-fractura",
          },
          check: {
            id: "NO-fractura",
            name: "NO-fractura",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Cuál?",
      htmlFor: "cual",
    },
    textarea: {
      id: "cual",
      name: "cual",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Recibió algún tratamiento?",
      htmlFor: "tratamiento",
    },
    textarea: {
      id: "tratamiento",
      name: "tratamiento",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Tiene dificultad para hablar?",
      htmlFor: "hablar",
    },
    checkbox: {
      id: "hablar",
      name: "hablar",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-hablar",
          },
          check: {
            id: "SI-hablar",
            name: "SI-hablar",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-hablar",
          },
          check: {
            id: "NO-hablar",
            name: "NO-hablar",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Tiene dificultad para masticar?",
      htmlFor: "masticar",
    },
    checkbox: {
      id: "masticar",
      name: "masticar",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-masticar",
          },
          check: {
            id: "SI-masticar",
            name: "SI-masticar",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-masticar",
          },
          check: {
            id: "NO-masticar",
            name: "NO-masticar",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Tiene dificultad para abrir la boca?",
      htmlFor: "boca",
    },
    checkbox: {
      id: "boca",
      name: "boca",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-boca",
          },
          check: {
            id: "SI-boca",
            name: "SI-boca",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-boca",
          },
          check: {
            id: "NO-boca",
            name: "NO-boca",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Tiene dificultad para tragar los alimentos?",
      htmlFor: "alimentos",
    },
    checkbox: {
      id: "alimentos",
      name: "alimentos",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-alimentos",
          },
          check: {
            id: "SI-alimentos",
            name: "SI-alimentos",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-alimentos",
          },
          check: {
            id: "NO-alimentos",
            name: "NO-alimentos",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Ha observado algo anormal en los labios?",
      htmlFor: "labios",
    },
    checkbox: {
      id: "labios",
      name: "labios",
      type: "checkbox",
      items: [
        {
          label: {
            name: "Lengua",
            htmlFor: "Lengua-labios",
          },
          check: {
            id: "Lengua-labios",
            name: "Lengua-labios",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Paladar",
            htmlFor: "Paladar-labios",
          },
          check: {
            id: "Paladar-labios",
            name: "Paladar-labios",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Piso de boca",
            htmlFor: "PisoDeBoca-labios",
          },
          check: {
            id: "PisoDeBoca-labios",
            name: "PisoDeBoca-labios",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "carrillos",
            htmlFor: "carrillos-labios",
          },
          check: {
            id: "carrillos-labios",
            name: "carrillos-labios",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "rebordes",
            htmlFor: "rebordes-labios",
          },
          check: {
            id: "rebordes-labios",
            name: "rebordes-labios",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "trigono",
            htmlFor: "trigono-labios",
          },
          check: {
            id: "trigono-labios",
            name: "trigono-labios",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "retromolar",
            htmlFor: "retromolar-labios",
          },
          check: {
            id: "retromolar-labios",
            name: "retromolar-labios",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      disabled: false,
    },
  },
  {
    label: {
      name: "Que tipo de lesiones presenta:",
      htmlFor: "lesiones",
    },
    checkbox: {
      id: "lesiones",
      name: "reason",
      type: "text",
      items: [
        {
          label: {
            name: "Manchas",
            htmlFor: "Manchas-lesiones",
          },
          check: {
            id: "Manchas-lesiones",
            name: "Manchas-lesiones",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Abultamiento de los tejidos",
            htmlFor: "Abultamiento-lesiones",
          },
          check: {
            id: "Abultamiento-lesiones",
            name: "Abultamiento-lesiones",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Ulceraciones",
            htmlFor: "Ulceraciones-lesiones",
          },
          check: {
            id: "Ulceraciones-lesiones",
            name: "Ulceraciones-lesiones",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Ampollas",
            htmlFor: "Ampollas-lesiones",
          },
          check: {
            id: "Ampollas-lesiones",
            name: "Ampollas-lesiones",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Otros?",
      htmlFor: "tratamiento",
    },
    textarea: {
      id: "tratamiento",
      name: "reason",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Le sangran las encias?",
      htmlFor: "sangreEn",
    },
    checkbox: {
      id: "sangreEn",
      name: "sangreEn",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-sangreEn",
          },
          check: {
            id: "SI-sangreEn",
            name: "SI-sangreEn",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-sangreEn",
          },
          check: {
            id: "NO-sangreEn",
            name: "NO-sangreEn",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Cuando?",
      htmlFor: "cuandosangre",
    },
    textarea: {
      id: "cuandosangre",
      name: "cuandosangre",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Sale pus de algún lugar de su boca?",
      htmlFor: "pusBoca",
    },
    checkbox: {
      id: "pusBoca",
      name: "pusBoca",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-pusBoca",
          },
          check: {
            id: "SI-pusBoca",
            name: "SI-pusBoca",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-pusBoca",
          },
          check: {
            id: "NO-pusBoca",
            name: "NO-pusBoca",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿De dónde?",
      htmlFor: "pusBocaDonde",
    },
    textarea: {
      id: "pusBocaDonde",
      name: "pusBocaDonde",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Tiene movilidad en sus dientes?",
      htmlFor: "movilidadDientes",
    },
    checkbox: {
      id: "movilidadDientes",
      name: "movilidadDientes",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-movilidadDientes",
          },
          check: {
            id: "SI-movilidadDientes",
            name: "SI-movilidadDientes",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-movilidadDientes",
          },
          check: {
            id: "NO-movilidadDientes",
            name: "NO-movilidadDientes",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Al morder siente altos los dientes?",
      htmlFor: "altosDientes",
    },
    checkbox: {
      id: "altosDientes",
      name: "altosDientes",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-altosDientes",
          },
          check: {
            id: "SI-altosDientes",
            name: "SI-altosDientes",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-altosDientes",
          },
          check: {
            id: "NO-altosDientes",
            name: "NO-altosDientes",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿A tenido la cara hinchada?",
      htmlFor: "caraHinchada",
    },
    checkbox: {
      id: "caraHinchada",
      name: "caraHinchada",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-caraHinchada",
          },
          check: {
            id: "SI-caraHinchada",
            name: "SI-caraHinchada",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-caraHinchada",
          },
          check: {
            id: "NO-caraHinchada",
            name: "NO-caraHinchada",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Se ha puesto algo?",
      htmlFor: "caraHinchadaPuesto",
    },
    checkbox: {
      id: "caraHinchadaPuesto",
      name: "caraHinchadaPuesto",
      type: "text",
      items: [
        {
          label: {
            name: "Hielo",
            htmlFor: "SI-caraHinchadaPuesto",
          },
          check: {
            id: "SI-caraHinchadaPuesto",
            name: "SI-caraHinchadaPuesto",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Calor",
            htmlFor: "NO-caraHinchadaPuesto",
          },
          check: {
            id: "NO-caraHinchadaPuesto",
            name: "NO-caraHinchadaPuesto",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Otros?",
      htmlFor: "caraHinchadaOtros",
    },
    textarea: {
      id: "caraHinchadaOtros",
      name: "caraHinchadaOtros",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Indice de placa?",
      htmlFor: "placa",
    },
    checkbox: {
      id: "placa",
      name: "placa",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-placa",
          },
          check: {
            id: "SI-placa",
            name: "SI-placa",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-placa",
          },
          check: {
            id: "NO-placa",
            name: "NO-placa",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "Estado de la higiene bucal:",
      htmlFor: "higiene",
    },
    checkbox: {
      id: "higiene",
      name: "higiene",
      type: "text",
      items: [
        {
          label: {
            name: "Muy bueno",
            htmlFor: "MuyBueno-higiene",
          },
          check: {
            id: "MuyBueno-higiene",
            name: "MuyBueno-higiene",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Bueno",
            htmlFor: "Bueno-higiene",
          },
          check: {
            id: "Bueno-higiene",
            name: "Bueno-higiene",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Deficiente",
            htmlFor: "Deficiente-higiene",
          },
          check: {
            id: "Deficiente-higiene",
            name: "Deficiente-higiene",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "Malo",
            htmlFor: "Malo-higiene",
          },
          check: {
            id: "Malo-higiene",
            name: "Malo-higiene",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      disabled: false,
    },
  },
  {
    label: {
      name: "Diagnostico presuntivo",
      htmlFor: "Diagnostico",
    },
    textarea: {
      id: "Diagnostico",
      name: "Diagnostico",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "Observaciones",
      htmlFor: "Observaciones",
    },
    textarea: {
      id: "Observaciones",
      name: "Observaciones",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "¿Necesita una plan de tratamiento?",
      htmlFor: "PlanTratamiento",
    },
    checkbox: {
      id: "PlanTratamiento",
      name: "PlanTratamiento",
      type: "text",
      items: [
        {
          label: {
            name: "SI",
            htmlFor: "SI-PlanTratamiento",
          },
          check: {
            id: "SI-PlanTratamiento",
            name: "SI-PlanTratamiento",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
        {
          label: {
            name: "NO",
            htmlFor: "NO-PlanTratamiento",
          },
          check: {
            id: "NO-PlanTratamiento",
            name: "NO-PlanTratamiento",
            type: "checkbox",
            required: false,
            placeholder: "",
            disabled: false,
          },
        },
      ],
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
  {
    label: {
      name: "Plan de tratamiento",
      htmlFor: "Plan",
    },
    textarea: {
      id: "Plan",
      name: "Plan",
      type: "text",
      required: false,
      placeholder: "",
      disabled: false,
    },
  },
];

const formFieldsConsultProcedures = [
  {
    label: {
      name: "Numero de documento  ",
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
];

export {
  authFields,
  basicFields,
  aditionalFieldsDoctor,
  rolField,
  aditionalFieldsPatient,
  appointmentBasicFields,
  formFieldsProcedures,
  formFieldsConsultProcedures,
};
