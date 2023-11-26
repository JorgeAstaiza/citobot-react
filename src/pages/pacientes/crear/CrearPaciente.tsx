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
import { Pacientes } from "../../../shared/interfaces/pacientes.interface";
import { Persona } from "../../../shared/interfaces/persona.interface";
import useSavePerson from "../../../hooks/useSavePersonMutate";
import useSavePaciente from "../../../hooks/useSavePacienteMutate";

function CrearPaciente() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pacientes & Persona>();

  const savePacienteQuery = useSavePaciente();
  const savePersonQuery = useSavePerson();

  const handleSubmiteForm: SubmitHandler<Pacientes & Persona> = async (
    data
  ) => {
    const person = { ...data, per_gen_id: "1" };
    delete person.pac_fecha_nacimiento;
    delete person.pac_per_identificacion;
    const paciente: Pacientes = {
      pac_anticonceptivos_orales: null,
      pac_celular: null,
      pac_contacto_alternativo: null,
      pac_correo: null,
      pac_diabetes: null,
      pac_direccion: null,
      pac_dispositivo_intrauterino: null,
      pac_estado_civil: null,
      pac_estrato: null,
      pac_fuma: null,
      pac_infecciones_ts: null,
      pac_menopausia: null,
      pac_nivel_educacion: null,
      pac_parejas_sexuales: null,
      pac_partos: null,
      pac_peso: null,
      pac_primera_mestruacion: null,
      pac_prueba_ADN_VPH: null,
      pac_regimen_salud: null,
      pac_relacion_condon: null,
      pac_situacion_laboral: null,
      pac_talla: null,
      pac_telefono: null,
      pac_telefono_contacto_alternativo: null,
      pac_tiempo_insercion_DIU: null,
      pac_ultima_citologia: null,
      pac_vacuna_vph: null,
      pac_eps_id: 1,
      pac_fecha_nacimiento: data.pac_fecha_nacimiento,
      pac_per_identificacion: data.per_identificacion,
    };
    savePersonQuery.mutate(person, {
      onSuccess: () => {
        savePacienteQuery.mutate(paciente);
      },
    });
  };

  return (
    <div
      className="h-screen flex flex-col  justify-start items-center pt-10 pb-5"
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
        <form onSubmit={handleSubmit(handleSubmiteForm)} autoComplete="off">
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
              flexDir="column"
              alignItems="normal"
              justifyContent="space-around"
              gap={6}
            >
              <Box maxWidth="100%" width="100%" display="flex" gap={5}>
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
              <Box maxWidth="100%" width="100%" display="flex" gap={5}>
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
            </Box>
            <Box width="51%" pr="6" pl="6" pt="4" pb="1">
              <FormControl isInvalid={!!errors.pac_fecha_nacimiento}>
                <FormLabel htmlFor="pac_fecha_nacimiento">
                  Fecha Nacimiento
                </FormLabel>
                <Input
                  id="pac_fecha_nacimiento"
                  placeholder="Select Date and Time"
                  size="md"
                  type="date"
                  {...register("pac_fecha_nacimiento", {
                    required: {
                      value: true,
                      message: "Fecha de nacimiento es obligatoria",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.pac_fecha_nacimiento && (
                    <span className="text-red-600">
                      {" "}
                      {errors.pac_fecha_nacimiento?.message}{" "}
                    </span>
                  )}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Box
              pr="6"
              pl="6"
              pb="10"
              pt="4"
              maxWidth="100%"
              width="100%"
              display="flex"
              gap={6}
            >
              <div className="w-full">
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
              </div>
              <div className="w-full">
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
              </div>
            </Box>
          </Box>
          <Button
            colorScheme="blue"
            type="submit"
            width="100px"
            mb="5px"
            ml="5px"
            isLoading={savePersonQuery.isPending}
          >
            Guardar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CrearPaciente;
