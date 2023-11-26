import { useMutation } from "@tanstack/react-query";
import { Pacientes } from "../shared/interfaces/pacientes.interface";
import { Persona } from "../shared/interfaces/persona.interface";
import { useToast } from "@chakra-ui/react";
import { savePerson } from "../api/pacientesRequest";

function useSavePerson() {
  const toast = useToast();
  const savePersonQuery = useMutation({
    mutationFn: (person: Pacientes & Persona) => savePerson(person),
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
  return savePersonQuery;
}

export default useSavePerson;
