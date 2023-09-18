function Logout() {
  window.localStorage.clear();
  document.cookie = document.cookie + ";max-age=0";
  location.href = "/login";
}

export default Logout;
