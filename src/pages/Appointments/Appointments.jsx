import { Tabs } from "flowbite-react";
import { HiOutlineClipboardCheck, HiClipboardList,HiOutlineClipboard, HiSortDescending } from "react-icons/hi";
import ListAppoimentsDoctor from "../../components/appoiments/ListAppoimentsDoctor";
import ListAppoimentsPatient from "../../components/appoiments/ListAppoimentsPatient";
import ListAppoimentsPending from "../../components/appoiments/ListAppoimentsPending";
import ListAppoimentsAll from "../../components/appoiments/ListAppoimentsAll";


function Appointments() {
  return (
    <>
      <div>
        <div className="flex w-sceen h-screen items-center">
          <div className="w-full h-4/5 m-6 bg-white rounded-3xl">
            <div className="h-1/6 m-auto justify-center items-center flex">
              <span className="text-4xl">Citas odontológicas</span>
            </div>
            <div className="justify-center px-7">
              <Tabs.Group aria-label="Default tabs" style="default" >
                <Tabs.Item active icon={HiOutlineClipboardCheck} title="Doctor" >
                  <ListAppoimentsDoctor />
                </Tabs.Item>
                <Tabs.Item icon={HiOutlineClipboard} title="Paciente">
                  <ListAppoimentsPatient />
                </Tabs.Item>
                <Tabs.Item icon={HiSortDescending} title="Administrador">
                  <ListAppoimentsAll/>
                </Tabs.Item>
                <Tabs.Item icon={HiClipboardList} title="Pendientes Doctor">
                  <ListAppoimentsPending />
                </Tabs.Item>
              </Tabs.Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointments;
