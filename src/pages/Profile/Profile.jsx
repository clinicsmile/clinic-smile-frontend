import { AppProfile } from "../../components/profile/Profile";
function Profile() {
  return (
    <div className="flex w-sceen h-screen items-center">
      <div className="w-full h-5/6 m-6 bg-white rounded-3xl p-6">
        <span className="text-4xl mb-20">Gestiona tu perfil</span>
        <AppProfile />
      </div>
    </div>
  );
}

export default Profile;
