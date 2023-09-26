import { Table } from "flowbite-react";

function Appointments() {
  return (
    <>
      <div>
      <div className="flex w-sceen h-screen items-center">
        <div className="w-full h-4/5 m-6 bg-white rounded-3xl">
          <div className="h-1/6 m-auto justify-center items-center flex">
            <span className="text-4xl">Citas odontológicas</span>
          </div>
          <div>
            <Table>
              <Table.Head className="text-center">
                <Table.HeadCell>Odontologo</Table.HeadCell>
                <Table.HeadCell>Paciente</Table.HeadCell>
                <Table.HeadCell>Estado</Table.HeadCell>
                <Table.HeadCell>Acciones</Table.HeadCell>
              </Table.Head>
            </Table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Appointments;
