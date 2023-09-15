
import { get } from "../app/api";

const signIn = async (data) => {
  return await get("Auth", data);
};

export default signIn;


// async function signIn(formData) {
//   try {
//     let response = await axios.get("http://192.168.1.102:5000/Auth", {
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Basic ${btoa(
//           formData.username + ":" + formData.password
//         )}`,
//       },
//     });
//     console.log(response);
//     if (response.data.ok) {
//       document.cookie = `token=${response.data.token}; max-age=${
//         60 * 3
//       }; path=/; samesite=strict`;
//       window.localStorage.setItem('user', user);
//       console.log(response.data);
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// }