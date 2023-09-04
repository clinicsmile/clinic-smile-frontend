import { SideBar } from "../../components/sidebar/SideBar";
import { AppProfile } from "../../components/profile/Profile";
import { Table, Button } from "flowbite-react";
let personas = [
  {
    document: "12345",
    name: "Juan",
    lastname: "Pérez",
    cellphone: "555-123-4567",
    email: "juan.perez@example.com",
  },
  {
    document: "67890",
    name: "María",
    lastname: "González",
    cellphone: "555-987-6543",
    email: "maria.gonzalez@example.com",
  },
  {
    document: "13579",
    name: "Carlos",
    lastname: "Rodríguez",
    cellphone: "555-567-8901",
    email: "carlos.rodriguez@example.com",
  },
  {
    document: "24680",
    name: "Ana",
    lastname: "López",
    cellphone: "555-234-5678",
    email: "ana.lopez@example.com",
  },
  {
    document: "54321",
    name: "Luis",
    lastname: "Martínez",
    cellphone: "555-876-5432",
    email: "luis.martinez@example.com",
  },
  {
    document: "98765",
    name: "Laura",
    lastname: "Hernández",
    cellphone: "555-345-6789",
    email: "laura.hernandez@example.com",
  },
  {
    document: "10101",
    name: "Diego",
    lastname: "Torres",
    cellphone: "555-678-9012",
    email: "diego.torres@example.com",
  },
  {
    document: "20202",
    name: "Sofía",
    lastname: "Díaz",
    cellphone: "555-456-7890",
    email: "sofia.diaz@example.com",
  },
  {
    document: "30303",
    name: "Pedro",
    lastname: "Sánchez",
    cellphone: "555-789-0123",
    email: "pedro.sanchez@example.com",
  },
  {
    document: "40404",
    name: "Elena",
    lastname: "Ramírez",
    cellphone: "555-678-9012",
    email: "elena.ramirez@example.com",
  },
];

function Users() {
  return (
    <>
      <div className=" flex w-sceen h-screen items-center bg-[#1783B0]">
        <div className="h-5/6 w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 h-5/6 m-6 bg-white rounded-3xl p-6">
          <div>
            <h1 className="text-3xl text-center my-3">GESTION DE USUARIOS</h1>
          </div>
          <div>
            <Table>
              <Table.Head className="text-center">
                <Table.HeadCell>Documento</Table.HeadCell>
                <Table.HeadCell>Nombre</Table.HeadCell>
                <Table.HeadCell>Apellido</Table.HeadCell>
                <Table.HeadCell>Celular</Table.HeadCell>
                <Table.HeadCell>Correo</Table.HeadCell>
                <Table.HeadCell>Acciones</Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">
                {personas.map((e) => (
                  <Table.Row
                    key={e.document}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center"
                  >
                    <Table.Cell>{e.document}</Table.Cell>
                    <Table.Cell>{e.name}</Table.Cell>
                    <Table.Cell>{e.lastname}</Table.Cell>
                    <Table.Cell>{e.cellphone}</Table.Cell>
                    <Table.Cell>{e.email}</Table.Cell>
                    <Table.Cell>
                      <div className="flex text-center justify-center">
                        <Button size="xs" pill color="warning" className="mx-2">
                          Editar
                        </Button>
                        <Button size="xs" pill color="failure" className="mx-2">
                          Eliminar
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
