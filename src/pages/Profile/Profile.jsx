import { AppProfile } from "../../components/profile/Profile";
import { validate } from "../../middlewares/validateLogin";

function Profile() {
  if (validate) {
    return (
      <div className="h-screen flex">
        <div className="w-5/6 h-5/6 bg-white rounded-3xl m-auto overflow-auto shadow-black shadow-2xl">
          <div className="h-1/6 m-auto justify-center items-center flex">
            <h1 className="font-serif text-4xl grid-cols-1 border-b-2 border-b-[--primary] pb-3">
              Gestiona tu perfil
            </h1>
          </div>

          <div className=" m-auto p-6  overflow-y-scroll h-4/5 pb-3" >
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
