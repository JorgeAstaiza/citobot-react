import {
  Box,
  Button,
  Image,
  ListItem,
  OrderedList,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import WebcamComponent from "../../../shared/WebcamComponent";
import { useParams, useSearchParams } from "react-router-dom";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { ApiResponse } from "../../../shared/interfaces/api.response.interface";
import { getEmun } from "../../../api/emunRequest";
import { transformEnum } from "../../../shared/transformEmun";

type FormValues = {
  tam_contraste: string;
  tam_vph: string;
  tam_vph_no_info: number;
};

function CrearTamizaje() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const param = useParams();

  console.log(param);

  const queryContransteList: UseQueryResult<ApiResponse, Error> = useQuery({
    queryKey: ["constraseList"],
    queryFn: () => getEmun("tamizaje", "tam_contraste"),
  });

  const handleSubmiteForm: SubmitHandler<any> = (data) => {
    console.log(data);
  };
  return (
    <div
      className="flex flex-col  justify-start items-center pt-10"
      style={{
        background: "rgba(235, 237, 239 ,1)",
        width: "100%",
      }}
    >
      <div className="flex  w-4/5 justify-start">
        <Image
          boxSize="50px"
          objectFit="contain"
          src="../../src/assets/icono-nuevo-paciente.png"
          alt="nuevo paciente"
        />
      </div>
      <div className="flex flex-col bg-white w-4/5 rounded-md p-4">
        <form onSubmit={handleSubmit(handleSubmiteForm)}>
          <Box border="1px" borderColor="gray.100" shadow="base" mb="5">
            <Box p="3" bg="gray.100" border="1px" borderColor="gray.200">
              <p className="text-xl" style={{ fontWeight: "bold" }}>
                Paciente:
              </p>
            </Box>
            <Box
              pr="6"
              pl="6"
              pt="6"
              pb="1"
              maxWidth="100%"
              display="flex"
              flexDir="column"
              alignItems="normal"
              justifyContent="space-around"
              gap={6}
            >
              <Box display="flex" flexDir="column" shadow="base">
                <Box border="1px" borderColor="gray.100" p="2">
                  <p className="font-semibold text-xl">Instrucciones</p>
                </Box>
                <Box border="1px" borderColor="gray.100" p="2">
                  <OrderedList>
                    <ListItem>Selecciona un Contraste</ListItem>
                    <ListItem>Toma mínimo 1 o máximo 3 fotos</ListItem>
                    <ListItem>Selecciona la mejor foto</ListItem>
                    <ListItem>
                      Selecciona VPH + o VPH - si está habilitado
                    </ListItem>
                    <ListItem>Click en Guardar</ListItem>
                  </OrderedList>
                </Box>
              </Box>
              <Select
                placeholder="Seleccione contraste*"
                variant="flushed"
                w={300}
              >
                {queryContransteList.isSuccess && (
                  <>
                    {transformEnum(
                      queryContransteList.data.objetoRespuesta
                    ).map((item: string, index: number) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </>
                )}
              </Select>
              <WebcamComponent />
              <RadioGroup mb={5}>
                <Stack direction="column">
                  <p>Seleccionar VPH</p>
                  <Radio value="1">Sin VPH</Radio>
                  <Radio value="2">Positivo</Radio>
                  <Radio value="3">Negativo</Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Box>
          <Button
            colorScheme="blue"
            type="submit"
            width="100px"
            mb="5px"
            ml="5px"
          >
            Guardar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CrearTamizaje;
