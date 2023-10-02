import { Table, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ListAppoimentsDoctor from "../../components/appoiments/ListAppoimentsDoctor";
import ListAppoimentsPatient from "../../components/appoiments/ListAppoimentsPatient";
// import ListAppoimentsPending from "../../components/appoiments/ListAppoimentsPending";
// import ListAppoimentsAll from "../../components/appoiments/ListAppoimentsAll";


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
              <Tabs.Group aria-label="Default tabs" style="default">
                <Tabs.Item active icon={HiUserCircle} title="Doctor">
                  <ListAppoimentsDoctor />
                </Tabs.Item>
                <Tabs.Item icon={MdDashboard} title="Paciente">
                  <ListAppoimentsPatient />
                </Tabs.Item>
                <Tabs.Item icon={HiAdjustments} title="Administrador">
                  {/* <ListAppoimentsAll/> */}
                </Tabs.Item>
                <Tabs.Item icon={HiAdjustments} title="Pendientes Doctor">
                  {/* <ListAppoimentsPending /> */}
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
