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
        <div className="flex w-sceen h-screen items-center">
          <div className="w-full h-4/5 m-6 bg-white rounded-3xl overflow-y-auto">
            <div className="flex">
              <div className="h-1/6 p-4 w-3/5 m-auto justify-center items-center flex">
                <span className="text-4xl">Citas odontológicas</span>
              </div>
              <div className="w-2/5 mx-auto">
                <CreateAppointment />
              </div>
            </div>
            <div className="justify-center mt-4 px-7">
              {RenderComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
