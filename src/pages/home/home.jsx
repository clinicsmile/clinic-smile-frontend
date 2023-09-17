import { validate } from "../../middlewares/validateLogin";
function Home() {
  if (validate) {
    return (
      <div className="flex w-sceen h-screen items-center">
        <div className="h-5/6 m-6 bg-white rounded-3xl p-6 ">
          <div className="justify-center items-center flex w-full h-full">
            <h1 className="text-6xl h-fit	w-fit text-center text-[#1783B0]">
              Hola{" "}
              {JSON.parse(window.localStorage.getItem("user")).Person.name}
              , Bienvenido a ClinicSmile
            </h1>
          </div>
        </div>
      </div>
    );
  } else {
    location.href = "/login";
  }
}

export default Home;
