import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Form = {
  firstName: string;
  middleName: string;
  firstLastName: string;
  middleLastName: string;
  IdType: "CC" | "TI";
  Id: string;
  usuario: string;
  rol: "ADMIN" | "DOCTOR";
  password: string;
  email: string;
  profession: any;
  state: any;
};

function CrearUsuario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmiteForm: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
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
          <Box mb="5">
            <Box p="3" bg="gray.100" border="1px" borderColor="gray.200">
              <p className="text-xl" style={{ fontWeight: "bold" }}>
                Datos Basicos
              </p>
            </Box>
            <Box
              pr="6"
              pl="6"
              pt="6"
              pb="10"
              maxWidth="100%"
              display="flex"
              alignItems="normal"
              justifyContent="space-around"
              gap={6}
              border="1px"
              borderColor="gray.100"
              shadow="base"
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
              </Box>
            </Box>

            <Box p="3" bg="gray.100" border="1px" borderColor="gray.200" mt="8">
              <p className="text-xl" style={{ fontWeight: "bold" }}>
                Datos Privados
              </p>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              border="1px"
              borderColor="gray.100"
              shadow="base"
              pb="6"
            >
              <Box
                pr="6"
                pl="6"
                maxWidth="100%"
                width="100%"
                display="flex"
                gap={6}
              >
                <FormControl isInvalid={errors.rol}>
                  <FormLabel htmlFor="rol">Rol</FormLabel>
                  <Select
                    placeholder="Selecciona una opcion"
                    id="rol"
                    {...register("rol", {
                      required: {
                        value: true,
                        message: "El rol es requerido",
                      },
                    })}
                  >
                    <option value="CC">C.C</option>
                    <option value="TI">T.I</option>
                  </Select>
                  <FormErrorMessage>
                    {errors.rol && (
                      <span className="text-red-600">
                        {" "}
                        {errors.rol?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.usuario}>
                  <FormLabel htmlFor="usuario">Usuario</FormLabel>
                  <Input
                    placeholder="..."
                    id="usuario"
                    {...register("usuario", {
                      required: {
                        value: true,
                        message: "El usuario es obligatorio",
                      },
                      maxLength: {
                        value: 10,
                        message: "El usuario debe tener maximo 10 caracteres",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.usuario && (
                      <span className="text-red-600">
                        {" "}
                        {errors.usuario?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <FormLabel htmlFor="password"> Contraseña</FormLabel>
                  <InputGroup size="md">
                    <Input
                      placeholder="..."
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: {
                          value: true,
                          message: "contraseña es obligatoria",
                        },
                        minLength: {
                          value: 2,
                          message:
                            "El apellido debe tener al menos 2 caracteres",
                        },
                      })}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleShowPasswordClick}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password && (
                      <span className="text-red-600">
                        {" "}
                        {errors.password?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box
                pr="6"
                pl="6"
                maxWidth="100%"
                width="100%"
                display="flex"
                gap={6}
              >
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Correo</FormLabel>
                  <Input
                    placeholder="..."
                    id="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "El correo es obligatorio",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
                        message: "Correo invalido",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.email && (
                      <span className="text-red-600">
                        {" "}
                        {errors.email?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.profession}>
                  <FormLabel htmlFor="profession">Profesión</FormLabel>
                  <Select
                    placeholder="Selecciona una opcion"
                    id="profession"
                    {...register("profession", {
                      required: {
                        value: true,
                        message: "La profesion es requerida",
                      },
                    })}
                  >
                    <option value="CC">C.C</option>
                    <option value="TI">T.I</option>
                  </Select>
                  <FormErrorMessage>
                    {errors.profession && (
                      <span className="text-red-600">
                        {" "}
                        {errors.profession?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.state}>
                  <FormLabel htmlFor="state">Profesión</FormLabel>
                  <Select
                    placeholder="Selecciona una opcion"
                    id="state"
                    {...register("state", {
                      required: {
                        value: true,
                        message: "El estado es requerido",
                      },
                    })}
                  >
                    <option value="CC">C.C</option>
                    <option value="TI">T.I</option>
                  </Select>
                  <FormErrorMessage>
                    {errors.state && (
                      <span className="text-red-600">
                        {" "}
                        {errors.state?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
              </Box>
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

export default CrearUsuario;
