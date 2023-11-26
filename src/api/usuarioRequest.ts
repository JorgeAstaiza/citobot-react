import { ApiResponse } from "../shared/interfaces/api.response.interface";
import { User } from "../shared/interfaces/user.interface";
import axios from "./citobot.apis";

export const getUsers = async (): Promise<ApiResponse> => {
  const response = await axios.get(`/usuarios/consultar`);
  return response.data;
};

export const saveUser = async (
  usuario: User | undefined
): Promise<ApiResponse> => {
  console.log(usuario);
  const response = await axios.post(`/usuarios/crear`, usuario);
  return response.data;
};

export const getProfessions = async () => {
  const response = await axios.get<ApiResponse>(`/profesion/consultar`);
  return response.data;
};
