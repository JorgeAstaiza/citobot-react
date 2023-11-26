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
import { Profession, User } from "../../../shared/interfaces/user.interface";
import useSavePerson from "../../../hooks/useSavePersonMutate";
import { Persona } from "../../../shared/interfaces/persona.interface";
import { Pacientes } from "../../../shared/interfaces/pacientes.interface";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getEmun } from "../../../api/emunRequest";
import { transformEnum } from "../../../shared/transformEmun";
import { getProfessions } from "../../../api/usuarioRequest";
import { ApiResponse } from "../../../shared/interfaces/api.response.interface";
import useSaveUser from "../../../hooks/useSaveUserMutate";

function CrearUsuario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User & Persona>();

  const [showPassword, setShowPassword] = useState(false);
  const savePersonQuery = useSavePerson();
  const saveUserQuery = useSaveUser();

  const queryProfessionsList = useQuery<ApiResponse>({
    queryKey: ["profesiones"],
    queryFn: getProfessions,
  });
  const queryRolList: UseQueryResult<ApiResponse, Error> = useQuery({
    queryKey: ["roles"],
    queryFn: () => getEmun("usuario", "usu_rol"),
  });
  const queryStateList: UseQueryResult<ApiResponse, Error> = useQuery({
    queryKey: ["estados"],
    queryFn: () => getEmun("usuario", "usu_estado"),
  });

  const handleSubmiteForm: SubmitHandler<User & Persona> = (data) => {
    const person: Persona & Pacientes = {
      per_gen_id: "1",
      per_identificacion: data.per_identificacion,
      per_otros_nombres: data.per_otros_nombres,
      per_primer_apellido: data.per_primer_apellido,
      per_primer_nombre: data.per_primer_nombre,
      per_segundo_apellido: data.per_segundo_apellido,
      per_tip_id: data.per_tip_id,
    };
    const user: User = {
      usu_clave: data.usu_clave,
      usu_email: data.usu_email,
      usu_estado: data.usu_estado,
      usu_per_identificacion: data.per_identificacion,
      usu_pro_id: 1,
      usu_rol: data.usu_rol,
      usu_usuario: data.usu_usuario,
    };

    savePersonQuery.mutate(person, {
      onSuccess: (data: ApiResponse) => {
        console.log("entra success ", data);
        saveUserQuery.mutate(user);
      },
    });
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="h-max pb-5 flex flex-col  justify-start items-center pt-10"
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
              flexDirection="column"
              alignItems="normal"
              justifyContent="space-around"
              gap={6}
              border="1px"
              borderColor="gray.100"
              shadow="base"
            >
              <Box maxWidth="100%" width="100%" display="flex" gap={6}>
                <FormControl isInvalid={!!errors.per_primer_nombre}>
                  <FormLabel htmlFor="per_primer_nombre">
                    Primer Nombre
                  </FormLabel>
                  <Input
                    placeholder="..."
                    id="per_primer_nombre"
                    {...register("per_primer_nombre", {
                      required: {
                        value: true,
                        message: "Nombre es obligatorio",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.per_primer_nombre && (
                      <span className="text-red-600">
                        {" "}
                        {errors.per_primer_nombre?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="per_otros_nombres">
                    Segundo Nombre
                  </FormLabel>
                  <Input
                    placeholder="..."
                    id="per_otros_nombres"
                    {...register("per_otros_nombres")}
                  />
                </FormControl>
              </Box>
              <Box maxWidth="100%" width="100%" display="flex" gap={6}>
                <FormControl isInvalid={!!errors.per_primer_apellido}>
                  <FormLabel htmlFor="per_primer_apellido">
                    Primer Apellido
                  </FormLabel>
                  <Input
                    placeholder="..."
                    id="per_primer_apellido"
                    {...register("per_primer_apellido", {
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
                    {errors.per_primer_apellido && (
                      <span className="text-red-600">
                        {" "}
                        {errors.per_primer_apellido?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="per_segundo_apellido">
                    Segundo Apellido
                  </FormLabel>
                  <Input
                    placeholder="..."
                    id="per_segundo_apellido"
                    {...register("per_segundo_apellido")}
                  />
                </FormControl>
              </Box>
              <Box w="100%" display="flex" gap={6}>
                <FormControl isInvalid={!!errors.per_tip_id}>
                  <FormLabel htmlFor="per_tip_id">
                    Tipo de Identificación
                  </FormLabel>
                  <Select
                    placeholder="Selecciona una opcion"
                    id="per_tip_id"
                    {...register("per_tip_id", {
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
                    {errors.per_tip_id && (
                      <span className="text-red-600">
                        {" "}
                        {errors.per_tip_id?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.per_identificacion}>
                  <FormLabel htmlFor="per_identificacion">
                    N° de Identificación
                  </FormLabel>
                  <Input
                    placeholder="..."
                    id="per_identificacion"
                    {...register("per_identificacion", {
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
                    {errors.per_identificacion && (
                      <span className="text-red-600">
                        {" "}
                        {errors.per_identificacion?.message}{" "}
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
              pt={6}
            >
              <Box
                pr="6"
                pl="6"
                maxWidth="100%"
                width="100%"
                display="flex"
                gap={6}
              >
                <FormControl isInvalid={!!errors.usu_rol}>
                  <FormLabel htmlFor="usu_rol">Rol</FormLabel>
                  <Select
                    placeholder="Selecciona una opcion"
                    id="usu_rol"
                    {...register("usu_rol", {
                      required: {
                        value: true,
                        message: "El rol es requerido",
                      },
                    })}
                  >
                    {queryRolList.isSuccess && (
                      <>
                        {transformEnum(queryRolList.data.objetoRespuesta).map(
                          (item: string, index: number) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          )
                        )}
                      </>
                    )}
                  </Select>
                  <FormErrorMessage>
                    {errors.usu_rol && (
                      <span className="text-red-600">
                        {" "}
                        {errors.usu_rol?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.usu_usuario}>
                  <FormLabel htmlFor="usu_usuario">Usuario</FormLabel>
                  <Input
                    placeholder="..."
                    id="usu_usuario"
                    {...register("usu_usuario", {
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
                    {errors.usu_usuario && (
                      <span className="text-red-600">
                        {" "}
                        {errors.usu_usuario?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.usu_clave}>
                  <FormLabel htmlFor="usu_clave"> Contraseña</FormLabel>
                  <InputGroup size="md">
                    <Input
                      placeholder="..."
                      id="usu_clave"
                      type={showPassword ? "text" : "usu_clave"}
                      {...register("usu_clave", {
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
                    {errors.usu_clave && (
                      <span className="text-red-600">
                        {" "}
                        {errors.usu_clave?.message}{" "}
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
                <FormControl isInvalid={!!errors.usu_email}>
                  <FormLabel htmlFor="usu_email">Correo</FormLabel>
                  <Input
                    placeholder="..."
                    id="usu_email"
                    {...register("usu_email", {
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
                    {errors.usu_email && (
                      <span className="text-red-600">
                        {" "}
                        {errors.usu_email?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.usu_pro_id}>
                  <FormLabel htmlFor="usu_pro_id">Profesión</FormLabel>
                  <Select
                    placeholder="Selecciona una opcion"
                    id="usu_pro_id"
                    {...register("usu_pro_id", {
                      required: {
                        value: true,
                        message: "La profesion es requerida",
                      },
                    })}
                  >
                    {queryProfessionsList.isSuccess && (
                      <>
                        console.log(queryProfessionsList.data);
                        {queryProfessionsList.data.objetoRespuesta.map(
                          (item: Profession) => (
                            <option key={item.pro_id} value={item.pro_id}>
                              {item.pro_nombre}
                            </option>
                          )
                        )}
                      </>
                    )}
                  </Select>
                  <FormErrorMessage>
                    {errors.usu_pro_id && (
                      <span className="text-red-600">
                        {" "}
                        {errors.usu_pro_id?.message}{" "}
                      </span>
                    )}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.usu_estado}>
                  <FormLabel htmlFor="usu_estado">Estado</FormLabel>
                  <Select
                    placeholder="Selecciona una opcion"
                    id="usu_estado"
                    {...register("usu_estado", {
                      required: {
                        value: true,
                        message: "El estado es requerido",
                      },
                    })}
                  >
                    {queryStateList.isSuccess && (
                      <>
                        {transformEnum(queryStateList.data.objetoRespuesta).map(
                          (item: string, index: number) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          )
                        )}
                      </>
                    )}
                  </Select>
                  <FormErrorMessage>
                    {errors.usu_estado && (
                      <span className="text-red-600">
                        {" "}
                        {errors.usu_estado?.message}{" "}
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
            isLoading={saveUserQuery.isPending}
          >
            Guardar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CrearUsuario;
