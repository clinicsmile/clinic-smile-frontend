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
    <>
      <div>
        <div className="flex w-sceen h-screen items-center">
          <div className="w-full h-4/5 m-6 bg-white rounded-3xl">
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
    </>
  );
}

// {
//   "documentTypeId": "1",
//   "document": "1060597134",
//   "name": "Andrés",
//   "lastName": "Maya",
//   "birthDate": "2023-10-21",
//   "genderId": "1",
//   "cellPhone": "3136962979",
//   "email": "andresmaya3113@gmail.com",
//   "address": "Cra 17a #72-33",
//   "reason": "Caries",
//   "specialtyId": "1",
//   "date": "2023-10-02",
//   "time": "13:10"
// }

// pendiente
// cancelado
// en proceso
// finalizada

// [
//   {
//       "id": 5,
//       "reason": "sdaedfa",
//       "date": "2023-10-12",
//       "time": "17:22:00",
//       "status": "Pendiente",
//       "createdAt": "2023-10-03T05:17:10.000Z",
//       "updatedAt": "2023-10-03T05:17:10.000Z",
//       "specialtyId": 3,
//       "doctorId": null,
//       "PersonDocument": "1004755531",
//       "Person": {
//           "document": "1004755531",
//           "name": "Daniel",
//           "lastName": "Otalora",
//           "cellPhone": "3016618738",
//           "email": "Dotalora24034@gamil.com",
//           "address": "adsade",
//           "birthDate": "2023-11-16",
//           "allergies": "mdaoikmd",
//           "diseases": "asondfmsof",
//           "createdAt": "2023-10-03T05:12:23.000Z",
//           "updatedAt": "2023-10-03T05:12:23.000Z",
//           "genderId": 1,
//           "documentTypeId": 2,
//           "rolId": 3,
//           "bloodTypeId": 7
//       },
//       "specialty": {
//           "id": 3,
//           "name": "Cirugía Oral y Maxilofacial",
//           "description": "La cirugía oral y maxilofacial se encarga de realizar procedimientos quirúrgicos en la boca, la mandíbula y la cara, como extracciones de dientes de terceros molares y cirugía reconstructiva.",
//           "createdAt": "2023-10-03T04:45:58.000Z",
//           "updatedAt": "2023-10-03T04:45:58.000Z"
//       },
//       "doctor": null
//   }
// ]

export default Appointments;
