import { SideBar } from "../../components/sidebar/SideBar";
function Home() {
    return (
        <>
      <div className=" flex w-sceen h-screen items-center bg-[#1783B0]">
        <div className="h-5/6 w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 h-5/6 m-6 bg-white rounded-3xl p-6">
        <h1 className="text-6xl h-full	w-full text-center text-[#1783B0]">Hola Usuario, Bienvenido a ClinicSmile</h1>
        </div>
      </div>
    </>
    );
}

export default Home;
