import { Input, Button, ButtonGroup } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TableComponent from "../../../shared/TableComponent";
import { useState } from "react";

function ListarRiesgos() {
  const columns = ["ID", "	NIVEL DE RIESGO", "DESCRIPCIÓN", "ACCIONES"];
  const [nivelRiesgo, setNivelRiesgo] = useState<string>("");

  const cleanIdInput = () => {
    setNivelRiesgo("");
  };
  return (
    <div
      className="h-screen flex flex-col justify-start items-center pt-10"
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
              placeholder=" Nivel Riesgo "
              onChange={(e) => setNivelRiesgo(e.target.value)}
              value={nivelRiesgo}
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
              <Link to={"/dashboard/riesgos/crear"}>
                <Button leftIcon={<IoMdAdd />} colorScheme="blue">
                  Nuevo
                </Button>
              </Link>
            </ButtonGroup>
          </div>
          <TableComponent columns={columns} data={[]} />
        </div>
      </div>
    </div>
  );
}

export default ListarRiesgos;
