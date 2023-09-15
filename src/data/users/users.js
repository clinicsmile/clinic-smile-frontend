import axios from "axios";
import { API } from "../../common/config";

const usersData = async ()=>{
  let datos = await axios.get(`${API.url}/Users`);
  console.log(datos.data);
  return datos.data;
}

export { usersData };
