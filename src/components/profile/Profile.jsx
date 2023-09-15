import { profileForm } from "../../data/form/FormFields";
import { AppForm } from "../form/AppForm";
import { profileData } from "../../data/profile/profile";
import { useState,useEffect } from "react";
import axios from "axios";
import { API } from "../../common/config";

function AppProfile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(`${API.url}/${window.localStorage.getItem("username")}`);
    setUser(res.data);
  };
  return <AppForm form={profileForm} loadedData={user} />;
}

export { AppProfile };
