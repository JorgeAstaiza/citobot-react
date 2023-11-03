import { Form, SubmitHandler, useForm } from "react-hook-form";
import "./Login.css";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import { useMutation } from "@tanstack/react-query";
import { getUsuarioByEmail } from "../../api/loginRequest";
import { useLogin } from "../../hooks/useLoginFirebase";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userInactived, setUserInactived] = useState<boolean>(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginError, setLoginError, loginWithFirebase } = useLogin();

  const userInfo = useMutation({
    mutationFn: (userEmail: string) => getUsuarioByEmail(userEmail),
    onSuccess: (data) => {
      if (data.objetoRespuesta[0].usu_estado === "Activo") {
        loginWithFirebase(email, password);
      } else {
        setUserInactived(true);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmiteForm: SubmitHandler<Form> = ({ email, password }) => {
    setEmail(email);
    setPassword(password);
    userInfo.mutate(email);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex items-center h-screen">
      <div className="container-login">
        <div
          style={{
            background: "linear-gradient(to left,#00838f,#013f4f)",
            width: "100%",
            height: "170px",
          }}
        ></div>
        <div className="flex flex-col items-center justify-center m-auto w-8/12">
          <h2 className="text-black mb-10 font-bold text-4xl flex">
            <p className="text-slate-500 mr-2">Bienvenido a</p> Citobot
          </h2>
          {loginError && (
            <Alert status="error" mb={3}>
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>
                Usuario o contraseña incorrecta
              </AlertDescription>
            </Alert>
          )}
          {userInactived && (
            <Alert status="error" mb={3}>
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>
                Usuario inactivo, usa otro usuario
              </AlertDescription>
            </Alert>
          )}
          <form className="w-full" onSubmit={handleSubmit(handleSubmiteForm)}>
            <FormControl
              className="flex flex-col w-full justify-center"
              isInvalid={!!(errors.email || errors.password)}
              isRequired
            >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  id="email"
                  className="rounded-md p-1"
                  placeholder="Correo *"
                  onKeyDown={() => (loginError ? setLoginError(false) : null)}
                  onKeyUp={() =>
                    userInactived ? setUserInactived(false) : null
                  }
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email es requerido",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                      message: "Correo invalido",
                    },
                  })}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.email && (
                  <span className="text-red-600">
                    {" "}
                    {errors.email?.message}{" "}
                  </span>
                )}
              </FormErrorMessage>

              <InputGroup size="md" className="mt-4">
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña *"
                  onKeyDown={() => (loginError ? setLoginError(false) : null)}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "contraseña es requerida",
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
                    {errors.password?.message}
                  </span>
                )}
              </FormErrorMessage>

              <div className="m-auto mt-8">
                <button
                  type="submit"
                  className="text-white rounded-md w-36 py-2 font-semibold"
                  style={{
                    background: "linear-gradient(to left,#00838f,#013f4f)",
                  }}
                >
                  Iniciar Sesion
                </button>
              </div>
            </FormControl>
          </form>
          <p className="mt-5">
            <Link className="text-blue-500 " to={"/forgot-password"}>
              ¿No recuerdas tú contraseña?
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
