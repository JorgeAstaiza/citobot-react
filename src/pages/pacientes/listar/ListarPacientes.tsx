import { Input, Button, ButtonGroup } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./ListarPacientes.css";
import { useState } from "react";
import TableComponent from "../../../shared/TableComponent";
import { useQuery } from "@tanstack/react-query";
import { getPacientes } from "../../../api/pacientesRequest";
import { cardio } from "ldrs";

function ListarPacientes() {
  const columns = ["IDENTIFICACIÓN", "NOMBRES", "APELLIDOS", "ACCIONES"];
  const [identificacion, setIdentificacion] = useState("");
  const query = useQuery({ queryKey: ["pacientes"], queryFn: getPacientes });
  cardio.register("l-cardio");
  const cleanIdInput = () => {
    setIdentificacion("");
  };
  return (
    <div
      className="h-screen flex flex-col justify-start items-center pt-10 pb-5"
      style={{
        background: "rgba(235, 237, 239 ,1)",
        width: "100%",
      }}
    >
      <div className="w-5/6">
        <Image
          boxSize="50px"
          objectFit="contain"
          src="../../src/assets/icono-nuevo-paciente.png"
          alt="nuevo paciente"
        />
        <div
          className="rounded-md"
          style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.4)" }}
        >
          {query.isLoading && (
            <div className="flex justify-center">
              <l-cardio
                size="300"
                stroke="4"
                speed="2"
                color="black"
              ></l-cardio>
            </div>
          )}
          {query.isSuccess && (
            <>
              <div className="flex p-5 justify-between bg-gray-100 rounded-md">
                <Input
                  htmlSize={40}
                  width="auto"
                  variant="flushed"
                  placeholder=" Nº. Identificación "
                  onChange={(e) => setIdentificacion(e.target.value)}
                  value={identificacion}
                />
                <ButtonGroup variant="solid" spacing="2">
                  <Button
                    leftIcon={<RxCross2 />}
                    colorScheme="telegram"
                    variant="outline"
                    onClick={cleanIdInput}
                  >
                    Limpiar
                  </Button>
                  <Link to={"/dashboard/pacientes/crear"}>
                    <Button leftIcon={<IoMdAdd />} colorScheme="blue">
                      Nuevo
                    </Button>
                  </Link>
                </ButtonGroup>
              </div>
              <TableComponent
                columns={columns}
                data={query.data.objetoRespuesta}
                type="pacientes"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListarPacientes;
