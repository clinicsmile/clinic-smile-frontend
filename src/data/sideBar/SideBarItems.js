import {
  LiaUserSolid,
  LiaUsersSolid,
  LiaCalendarDaySolid,
  LiaArchiveSolid,
  LiaSignOutAltSolid,
  LiaComment,
} from "react-icons/lia";
import { CiSettings } from "react-icons/ci";

const infoMenu = () => {
  const rol = JSON.parse(window.localStorage.getItem("user")).Person.rolId;
  switch (rol) {
    case 1: {
      return [
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
          path: "/config",
          name: "Configuración",
          icon: CiSettings,
        },
        {
          path: "/logs",
          name: "Logs",
          icon: LiaComment,
        },
        {
          path: "/logout",
          name: "Cerrar Sesion",
          icon: LiaSignOutAltSolid,
        },        
      ];
    }
    case 2: {
      return [
        {
          path: "/profile",
          name: "Mi Perfil",
          icon: LiaUserSolid,
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
    }
    case 3: {
      return [
        {
          path: "/profile",
          name: "Mi Perfil",
          icon: LiaUserSolid,
        },
        {
          path: "/appointments",
          name: "Citas",
          icon: LiaCalendarDaySolid,
        },
        {
          path: "/logout",
          name: "Cerrar Sesion",
          icon: LiaSignOutAltSolid,
        },
      ];
      break;
    }
  }
};
export { infoMenu };
