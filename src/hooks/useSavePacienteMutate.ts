import { useMutation } from "@tanstack/react-query";
import { Pacientes } from "../shared/interfaces/pacientes.interface";
import { Persona } from "../shared/interfaces/persona.interface";
import { savePaciente } from "../api/pacientesRequest";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function useSavePaciente() {
  const toast = useToast();
  const navigate = useNavigate();

  const savePacienteQuery = useMutation({
    mutationFn: (paciente: (Pacientes & Persona) | undefined) =>
      savePaciente(paciente),
    onSuccess: (data) => {
      if (data.codigoRespuesta === 0) {
        toast({
          title: "Paciente creado",
          description: "El paciente fue creado exitosamente",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        navigate("/dashboard/pacientes/listar");
      } else {
        toast({
          title: "Error!",
          description:
            "Hubo un problema al crear el paciente, intentalo nuevamente",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Ocurrio un error al crear el paciente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });
  return savePacienteQuery;
}
export default useSavePaciente;
