import { Link, NavLink } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import "./Navbar.css";
import { SettingsIcon } from "@chakra-ui/icons";
function Navbar() {
  return (
    <div className="menu-container ">
      <div className="flex justify-center mt-5">
        <Image
          borderRadius="full"
          boxSize="120px"
          src="../../src/assets/simbolo-solo.png"
          alt="Citobot"
        />
      </div>
      <div className="container-items-menu">
        <Link className="py-3 px-7 flex mt-3" to={"/pacientes"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-dashboard mr-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M13.45 11.55l2.05 -2.05"></path>
            <path d="M6.4 20a9 9 0 1 1 11.2 0z"></path>
          </svg>
          Panel Administrativo
        </Link>
        <p className="px-7 mt-5 mb-3">MENU</p>
        <ul className="flex flex-col ">
          <NavLink
            className="py-3 px-7 flex mt-3"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "grey",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            to={"/dashboard/pacientes/listar"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-users mr-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>{" "}
            Pacientes
          </NavLink>
          <Link className="py-3 px-7 flex" to={"/dashboard/usuarios/listar"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-file-database mr-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12.75m-4 0a4 1.75 0 1 0 8 0a4 1.75 0 1 0 -8 0"></path>
              <path d="M8 12.5v3.75c0 .966 1.79 1.75 4 1.75s4 -.784 4 -1.75v-3.75"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
            </svg>
            Usuarios
          </Link>
          <Link className="py-3 px-7 flex" to={"/dashboard/tamizaje/listar"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-puzzle mr-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
            </svg>
            Tamizaje
          </Link>
          <Link className="py-3 px-7 flex" to={"/dashboard/riesgos/listar"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bell-cog mr-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 17h-8a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v.5"></path>
              <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M19.001 15.5v1.5"></path>
              <path d="M19.001 21v1.5"></path>
              <path d="M22.032 17.25l-1.299 .75"></path>
              <path d="M17.27 20l-1.3 .75"></path>
              <path d="M15.97 17.25l1.3 .75"></path>
              <path d="M20.733 20l1.3 .75"></path>
              <path d="M9 17v1a3 3 0 0 0 3 3"></path>
            </svg>
            Riesgos
          </Link>
          <Link className="py-3 px-7" to={"/dashboard/configuracion"}>
            {" "}
            <SettingsIcon className="mr-5" /> Configuracion
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
