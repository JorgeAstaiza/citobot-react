import { useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { User } from "../shared/interfaces/user.interface";
import { saveUser } from "../api/usuarioRequest";
import { useNavigate } from "react-router-dom";

function useSaveUser() {
  const toast = useToast();
  const navigate = useNavigate();

  const saveUserQuery = useMutation({
    mutationFn: (usuario?: User | undefined) => saveUser(usuario),
    onSuccess: (data) => {
      if (data.codigoRespuesta === 0) {
        toast({
          title: "Usuario creado",
          description: "El usuario fue creado exitosamente",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        navigate("/dashboard/usuarios/listar");
      } else {
        toast({
          title: "Error!",
          description:
            "Hubo un problema al crear el usuario, intentalo nuevamente",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
    onError: () => {
      toast({
        title: "Error",
        description:
          "Ocurrio un error al crear el usuario, intentalo nuevamente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });
  return saveUserQuery;
}

export default useSaveUser;
