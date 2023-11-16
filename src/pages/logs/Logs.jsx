import { validate } from "../../middlewares/validateLogin";
import { Table, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";

const SpinnerComponent = () => {
  return (
    <div className="flex justify-center items-center m-4 ">
      <Spinner
        color="warning"
        size="lg"
        className="flex justify-center items-center "
      />
    </div>
  );
};

function Logs() {
  const [loadingPage, setLoadingPage] = useState(false);
  const [logs, setLongs] = useState([]);

  if (validate) {
    return (
      <div>
        <div className="h-screen flex">
          <div className="w-5/6 h-5/6 bg-white rounded-3xl text-center m-auto shadow-black shadow-2xl">
            <div className="m-auto p-6">
              <div className="h-1/6 m-auto justify-center items-center flex">
                <h1 className="font-serif text-4xl text-center grid-cols-1 border-b-2 border-b-[--primary] pb-3">
                  Logs
                </h1>
              </div>
              <div className="m-3">
                {loadingPage ? (
                  <SpinnerComponent />
                ) : (
                  <div className="px-3 responsive-div">
                    <Table className="text-center w-full">
                      <Table.Head>
                        <Table.HeadCell className="bg-[--primary] text-white">
                          Fecha
                        </Table.HeadCell>
                        <Table.HeadCell className="bg-[--primary] text-white">
                          Usuarios
                        </Table.HeadCell>
                        <Table.HeadCell className="bg-[--primary] text-white">
                          Acciones
                        </Table.HeadCell>
                        <Table.HeadCell className="bg-[--primary] text-white">
                          Detalles
                        </Table.HeadCell>
                      </Table.Head>

                      <Table.Body>
                        {logs.length > 0 ? (
                          logs.map((e) => (
                            <Table.Row
                              key={e.id}
                              className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center"
                            >
                              <Table.Cell>{e.date}</Table.Cell>
                              <Table.Cell>{e.name}</Table.Cell>
                            </Table.Row>
                          ))
                        ) : (
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
                            <Table.Cell colSpan={7}>Sin resultados</Table.Cell>
                          </Table.Row>
                        )}
                      </Table.Body>
                    </Table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    location.href = "/login";
  }
}

export default Logs;
