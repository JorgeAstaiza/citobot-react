import { createBrowserRouter } from "react-router-dom";

import Configuracion from "../pages/configuracion/Configuracion.tsx";
import Login from "../pages/login/Login.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import HomeDashboard from "../pages/home/HomeDashboard.tsx";
import ListarPacientes from "../pages/pacientes/listar/ListarPacientes.tsx";
import CrearPaciente from "../pages/pacientes/crear/CrearPaciente.tsx";
import ListarUsuarios from "../pages/usuarios/listar/ListarUsuarios.tsx";
import CrearUsuario from "../pages/usuarios/crear/CrearUsuario.tsx";
import ListarTamizaje from "../pages/tamizajes/listar/ListarTamizaje.tsx";
import CrearTamizaje from "../pages/tamizajes/crear/CrearTamizaje.tsx";
import ListarRiesgos from "../pages/riesgos/listar/ListarRiesgos.tsx";
import CrearRiesgo from "../pages/riesgos/crear/CrearRiesgo.tsx";
import Register from "../pages/register/Register.tsx";

//crear rutas para el router
export const router = createBrowserRouter([
  {
    path: "/", //ruta principal
    element: <Login />, //elemento que se va a renderizar
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <HomeDashboard />,
      },
      {
        path: "pacientes/listar",
        element: <ListarPacientes />,
      },
      {
        path: "pacientes/crear",
        element: <CrearPaciente />,
      },
      {
        path: "usuarios/listar",
        element: <ListarUsuarios />,
      },
      {
        path: "usuarios/crear",
        element: <CrearUsuario />,
      },
      {
        path: "tamizaje/listar",
        element: <ListarTamizaje />,
      },
      {
        path: "tamizaje/crear",
        element: <CrearTamizaje />,
      },
      {
        path: "riesgos/listar",
        element: <ListarRiesgos />,
      },
      {
        path: "riesgos/crear",
        element: <CrearRiesgo />,
      },
      {
        path: "configuracion",
        element: <Configuracion />,
      },
    ],
  },
]);
