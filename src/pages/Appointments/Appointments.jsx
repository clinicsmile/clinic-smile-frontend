import { Tabs } from "flowbite-react";
import {
  HiOutlineClipboardCheck,
  HiClipboardList,
  HiOutlineClipboard,
  HiSortDescending,
} from "react-icons/hi";
import ListAppoimentsDoctor from "../../components/appoiments/ListAppoimentsDoctor";
import ListAppoimentsPatient from "../../components/appoiments/ListAppoimentsPatient";
import ListAppoimentsPending from "../../components/appoiments/ListAppoimentsPending";
import ListAppoimentsAll from "../../components/appoiments/ListAppoimentsAll";
import { CreateAppointment } from "../../components/appointments";

function Appointments() {

  const RenderComponent = () => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    let components = {
      0: <ListAppoimentsPatient />,
      1: <ListAppoimentsAll />,
      2: (
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item active icon={HiOutlineClipboardCheck} title="Citas Asignadas">
            <ListAppoimentsDoctor />
          </Tabs.Item>
          <Tabs.Item icon={HiClipboardList} title="Citas Pendientes">
            <ListAppoimentsPending />
          </Tabs.Item>
        </Tabs.Group>
      ),
      3: <ListAppoimentsPatient />,
    };
    return components[user.Person?.rolId || 0]
  }

  return (
    <div>
      <div>
        <div className="flex w-sceen h-screen items-center ">
          <div className="w-5/6 h-5/6  bg-white rounded-3xl text-center m-auto overflow-y-auto shadow-black shadow-2xl ">
            <div className="flex grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div className="h-1/6 p-4 w-3/5 m-auto justify-center items-center flex">
                <h1 className="font-serif text-4xl text-center grid-cols-1 border-b-2 border-b-[--primary] pb-3">
                  Citas Odontológicas
                </h1>
              </div>
              <div className="w-2/5 mx-auto  ">
                <CreateAppointment />
              </div>
            </div>
            <div className="justify-center mt-4 px-7 overflow-y-scroll h-4/5 pb-3">
              {RenderComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
