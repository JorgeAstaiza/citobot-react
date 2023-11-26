import { ApiResponse } from "../shared/interfaces/api.response.interface";
import axios from "./citobot.apis";

export const getEmun = async (tabla: string, columna: string) => {
  const response = await axios.get<ApiResponse>(
    `/enum/consultar?tabla=${tabla}&columna=${columna}`
  );
  return response.data;
};
