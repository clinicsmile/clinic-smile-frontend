import { services } from "../../services/services";
function Logout() {
  const Logout = async () => {
    await services.logOut(
      JSON.parse(window.localStorage.getItem("user")).username
    );
  };
  if (window.localStorage.getItem("user")) {
    Logout();
  }
  window.localStorage.clear();
  location.href = "/";
}

export default Logout;
