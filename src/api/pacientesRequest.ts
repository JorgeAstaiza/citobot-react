import { ApiResponse } from "../shared/interfaces/api.response.interface";
import { Pacientes } from "../shared/interfaces/pacientes.interface";
import { Persona } from "../shared/interfaces/persona.interface";
import axios from "./citobot.apis";

export const getPacientes = async (): Promise<ApiResponse> => {
  const response = await axios.get(`/pacientes/consultar`);
  return response.data;
};

export const savePerson = async (persona: Persona): Promise<ApiResponse> => {
  const response = await axios.post(`/personas/crear`, persona);
  return response.data;
};

export const savePaciente = async (paciente: Pacientes | undefined) => {
  const response = await axios.post(`/pacientes/crear`, paciente);
  return response.data;
};
