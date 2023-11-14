import { AppProfile } from "../../components/profile/Profile";
import { validate } from "../../middlewares/validateLogin";

function Profile() {
  if (validate) {
    return (
      <div className="flex w-sceen h-screen items-center">
        <div className="w-full h-4/5 m-6 bg-white rounded-3xl shadow-black shadow-2xl">
          <div className="h-1/6 m-auto justify-center items-center flex">
            <h1 className="font-serif text-4xl text-center grid-cols-1 border-b-2 border-b-[--primary] pb-3">
                    Gestiona tu perfil
            </h1>
          </div>
          <div className="overflow-y-scroll h-4/5 pb-3">
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
