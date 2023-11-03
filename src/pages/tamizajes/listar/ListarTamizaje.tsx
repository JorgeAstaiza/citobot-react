import {
  Button,
  ButtonGroup,
  Input,
  Image,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import TableComponent from "../../../shared/TableComponent";

function ListarTamizaje() {
  const columns = [
    "IDENTIFICACIÓN",
    "NOMBRES",
    "APELLIDOS",
    "ROL",
    "ESTADO",
    "ACCIONES",
  ];

  const [identificacion, setIdentificacion] = useState("");
  const [idType, setIdType] = useState("");
  const [date, setDate] = useState("");

  const cleanIdInput = () => {
    setIdentificacion("");
    setDate("");
    setIdType("");
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
            <Stack
              display="flex"
              flexDirection="row"
              spacing={3}
              justifyContent="space-around"
            >
              <Input
                htmlSize={40}
                variant="flushed"
                placeholder=" Nº. Identificación"
                onChange={(e) => setIdentificacion(e.target.value)}
                value={identificacion}
              />
              <Select
                variant="flushed"
                placeholder="Tipo de identificacion"
                onChange={(e) => setIdType(e.target.value)}
                value={idType}
              >
                <option value="CC">C.C</option>
                <option value="TI">T.I</option>
              </Select>
              <Input
                htmlSize={40}
                variant="flushed"
                type="date"
                placeholder=" Rango: Desde | Hasta"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Stack>
            <ButtonGroup variant="solid" spacing="2">
              <Button
                leftIcon={<RxCross2 />}
                colorScheme="telegram"
                variant="outline"
                onClick={cleanIdInput}
              >
                Limpiar
              </Button>
            </ButtonGroup>
          </div>
          <TableComponent columns={columns} data={[]} />
        </div>
      </div>
    </div>
  );
}

export default ListarTamizaje;
