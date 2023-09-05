import { SideBar } from "../sidebar/SideBar";
import { Profile } from "../../components/profile/Profile";
function LayOut() {
  return (
    <>
      <div className=" flex w-sceen h-screen items-center bg-[#1783B0]">
        <div className="h-5/6 w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 h-5/6 m-6 bg-white rounded-3xl p-6">
          <Profile />
        </div>
      </div>
    </>
  );
}

export { LayOut };
