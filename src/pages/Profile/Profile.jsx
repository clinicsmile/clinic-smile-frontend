import { AppProfile } from "../../components/profile/Profile";

function Profile() {
  if (window.localStorage.getItem("username") != null) {
    return (
      <div className="flex w-sceen h-screen items-center">
        <div className="w-full h-4/5 m-6 bg-white rounded-3xl">
          <div className="h-1/6 m-auto justify-center items-center flex">
            <span className="text-4xl">Gestiona tu perfil</span>
          </div>
          <div className="overflow-y-scroll h-5/6 pb-3">
            <AppProfile />
          </div>
        </div>
      </div>
    );
  } else {
    location.href = "/login";
  }
}

export default Profile;
