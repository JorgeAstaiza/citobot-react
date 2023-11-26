import { Button, ButtonGroup, Input, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import TableComponent from "../../../shared/TableComponent";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../api/usuarioRequest";

function ListarUsuarios() {
  const columns = [
    "IDENTIFICACIÓN",
    "NOMBRES",
    "APELLIDOS",
    "ROL",
    "ESTADO",
    "ACCIONES",
  ];

  const [identificacion, setIdentificacion] = useState("");
  const query = useQuery({ queryKey: ["usuarios"], queryFn: getUsers });

  const cleanIdInput = () => {
    setIdentificacion("");
  };

  return (
    <div
      className="h-max flex flex-col justify-start items-center pt-10 pb-5"
      style={{
        background: "rgba(235, 237, 239 ,1)",
        width: "100%",
      }}
    >
      <div className="w-5/6  ">
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
          <div className="flex p-5 justify-between bg-gray-100 rounded-md">
            <Input
              htmlSize={40}
              width="auto"
              variant="flushed"
              placeholder=" Nº. Identificación o Correo Electrónico"
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
              <Link to={"/dashboard/usuarios/crear"}>
                <Button leftIcon={<IoMdAdd />} colorScheme="blue">
                  Nuevo
                </Button>
              </Link>
            </ButtonGroup>
          </div>
          {query.isSuccess && (
            <TableComponent
              columns={columns}
              data={query.data.objetoRespuesta}
              type="usuarios"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ListarUsuarios;
