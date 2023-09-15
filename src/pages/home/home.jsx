function Home() {
  if(window.localStorage.getItem('username') != null){
    return (
      <div className="flex w-sceen h-screen items-center">
        <div className="h-5/6 m-6 bg-white rounded-3xl p-6">
          <h1 className="text-6xl h-full	w-full text-center text-[#1783B0]">
            Hola {window.localStorage.getItem('username')}, Bienvenido a ClinicSmile
          </h1>
        </div>
      </div>
    );
  }else{
    location.href="/login";
  }
}

export default Home;
