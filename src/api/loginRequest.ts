import axios from "./citobot.apis";

export const getUsuarioByEmail = async (email: string) => {
  try {
    const response = await axios.get(`/usuarios/email?email=${email}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
