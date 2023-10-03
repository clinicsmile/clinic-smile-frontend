import { services } from "../../services/services";
function Logout() {
  document.cookie = document.cookie + ";max-age=0";
  if (window.localStorage.getItem("user")) {
    services.logOut(JSON.parse(window.localStorage.getItem("user")).username);
  }
  window.localStorage.clear();
  location.href = "/login";
}

export default Logout;
