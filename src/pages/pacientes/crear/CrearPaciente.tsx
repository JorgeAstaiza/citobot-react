import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type Form = {
  firstName: string;
  middleName: string;
  firstLastName: string;
  middleLastName: string;
  birthDate: Date;
  IdType: "CC" | "TI";
  Id: string;
};

function CrearPaciente() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const handleSubmiteForm: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  return (
    <div
      className="h-screen flex flex-col  justify-start items-center pt-10"
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
                Datos Basicos
              </p>
            </Box>
            <Box
              pr="6"
              pl="6"
              pt="6"
              pb="1"
              maxWidth="100%"
              display="flex"
              alignItems="normal"
              justifyContent="space-around"
              gap={6}
            >
              <Box maxWidth="100%" width="100%">
                <FormControl isInvalid={errors.firstName}>
                  <FormLabel htmlFor="firstName">Primer Nombre</FormLabel>
                  <Input
                    placeholder="..."
                    id="firstName"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "Nombre es obligatorio",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.firstName && (
                      <span className="text-red-600">
                        {" "}
                        {errors.firstName?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.firstLastName}>
                  <FormLabel htmlFor="firstLastName">Primer Apellido</FormLabel>
                  <Input
                    placeholder="..."
                    id="firstLastName"
                    {...register("firstLastName", {
                      required: {
                        value: true,
                        message: "Apellido es obligatorio",
                      },
                      minLength: {
                        value: 2,
                        message: "El apellido debe tener al menos 2 caracteres",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.firstLastName && (
                      <span className="text-red-600">
                        {" "}
                        {errors.firstLastName?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.birthDate}>
                  <FormLabel htmlFor="birthDate">Fecha Nacimiento</FormLabel>
                  <Input
                    id="birthDate"
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    {...register("birthDate", {
                      required: {
                        value: true,
                        message: "Fecha de nacimiento es obligatoria",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.birthDate && (
                      <span className="text-red-600">
                        {" "}
                        {errors.birthDate?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box maxWidth="100%" width="100%">
                <FormLabel htmlFor="middleName">Segundo Nombre</FormLabel>
                <Input
                  placeholder="..."
                  id="middleName"
                  {...register("middleName")}
                />

                <FormLabel htmlFor="middleLastName">Segundo Apellido</FormLabel>
                <Input
                  placeholder="..."
                  id="middleLastName"
                  {...register("middleLastName")}
                />
              </Box>
            </Box>
            <Box
              pr="6"
              pl="6"
              pb="10"
              maxWidth="100%"
              width="100%"
              display="flex"
              gap={6}
            >
              <div className="w-full">
                <FormControl isInvalid={errors.IdType}>
                  <FormLabel htmlFor="IdType">Tipo de Identificación</FormLabel>
                  <Select
                    placeholder="Selecciona una opcion"
                    id="IdType"
                    {...register("IdType", {
                      required: {
                        value: true,
                        message: "El tipo de identificación es requerido",
                      },
                    })}
                  >
                    <option value="CC">C.C</option>
                    <option value="TI">T.I</option>
                  </Select>
                  <FormErrorMessage>
                    {errors.IdType && (
                      <span className="text-red-600">
                        {" "}
                        {errors.IdType?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
              </div>
              <div className="w-full">
                <FormControl isInvalid={errors.Id}>
                  <FormLabel htmlFor="Id">N° de Identificación</FormLabel>
                  <Input
                    placeholder="..."
                    id="Id"
                    {...register("Id", {
                      required: {
                        value: true,
                        message: "Numero de identificación es obligatorio",
                      },
                      minLength: {
                        value: 3,
                        message:
                          "El numero de identificación debe tener al menos 3 caracteres",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message:
                          "El numero de identificación debe tener solo numeros ",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.Id && (
                      <span className="text-red-600">
                        {" "}
                        {errors.Id?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
              </div>
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

export default CrearPaciente;
