import { ApiResponse } from "../shared/interfaces/api.response.interface";
import axios from "./citobot.apis";

export const getTamizajes = async (): Promise<ApiResponse> => {
  const response = await axios.get(`/tamizajes/todos`);
  return response.data;
};
