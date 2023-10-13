import {
  LiaUserSolid,
  LiaUsersSolid,
  LiaCalendarDaySolid,
  LiaArchiveSolid,
  LiaSignOutAltSolid,
} from "react-icons/lia";

const infoMenu = [
  {
    path: "/profile",
    name: "Mi Perfil",
    icon: LiaUserSolid,
  },
  {
    path: "/users",
    name: "Usuarios",
    icon: LiaUsersSolid,
  },
  {
    path: "/appointments",
    name: "Citas",
    icon: LiaCalendarDaySolid,
  },
  {
    path: "/medicalRecords",
    name: "Historias clínicas",
    icon: LiaArchiveSolid,
  },

  {
    path: "/logout",
    name: "Cerrar Sesion",
    icon: LiaSignOutAltSolid,
  },
];
export { infoMenu };
