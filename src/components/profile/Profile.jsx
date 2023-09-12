import { profileForm } from "../../data/form/FormFields";
import { AppForm } from "../form/AppForm";
import { profileData } from "../../data/profile/profile";
function AppProfile() {
  return <AppForm form={profileForm} loadedData={profileData} />;
}

export { AppProfile };
