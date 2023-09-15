
async function Logout() {

  window.localStorage.clear();
  location.href = "/login";
}

export default Logout;
