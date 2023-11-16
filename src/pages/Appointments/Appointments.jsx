import { Tabs } from "flowbite-react";
import { HiOutlineClipboardCheck, HiClipboardList } from "react-icons/hi";
import "../../index.css";
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
        <Tabs.Group
          aria-label="Default tabs"
          style="default"
          className="border-[--primary]"
        >
          <Tabs.Item
            active
            icon={HiOutlineClipboardCheck}
            title="Citas Asignadas"
          >
            <ListAppoimentsDoctor />
          </Tabs.Item>
          <Tabs.Item icon={HiClipboardList} title="Citas Pendientes">
            <ListAppoimentsPending />
          </Tabs.Item>
        </Tabs.Group>
      ),
      3: <ListAppoimentsPatient />,
    };
    return components[user.Person?.rolId || 0];
  };

  return (
    <div>
      <div className="flex w-sceen h-screen items-center ">
        <div className="w-5/6 h-5/6  bg-white rounded-3xl text-center m-auto shadow-black shadow-2xl ">
          <div className="p-6 m-auto">
            <div className="p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
              <div className="m-auto my-3 ">
                <h1 className="font-serif text-4xl text-center grid-cols-1 border-b-2 border-b-[--primary] pb-3">
                  Citas Odontológicas
                </h1>
              </div>

              <div className="m-auto">
                <CreateAppointment onComplete={() => location.reload()} />
              </div>
            </div>
            <div className="px-3 m-3 responsive-div">{RenderComponent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
