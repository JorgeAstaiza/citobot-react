import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import ContainerBox from "../../../shared/ContainerBox";

type Form = {
  message: string;
  description: string;
};

function CrearRiesgo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const handleSubmiteForm: SubmitHandler<Form> = (data) => {
    console.log(data);
  };
  return (
    <ContainerBox>
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
            <FormControl isInvalid={errors.message}>
              <FormLabel htmlFor="message">Mensaje *</FormLabel>
              <Input
                placeholder="..."
                id="message"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Mensaje es obligatorio",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.message && (
                  <span className="text-red-600">
                    {" "}
                    {errors.message?.message}{" "}
                  </span>
                )}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.description}>
              <FormLabel htmlFor="description">Descripcion *</FormLabel>
              <Input
                placeholder="..."
                id="description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Descripcion es obligatorio",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.description && (
                  <span className="text-red-600">
                    {" "}
                    {errors.description?.message}{" "}
                  </span>
                )}
              </FormErrorMessage>
            </FormControl>
          </Box>

          <Button colorScheme="blue" type="submit" width="100px" m={3}>
            Guardar
          </Button>
        </Box>
      </form>
    </ContainerBox>
  );
}

export default CrearRiesgo;
