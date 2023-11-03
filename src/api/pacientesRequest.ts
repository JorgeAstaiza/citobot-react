import axios from "./citobot.apis";

export const getPacientes = async () => {
  try {
    const response = await axios.get(`/pacientes/consultar`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
