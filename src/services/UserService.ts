import HttpClient from '../services/HttpClient';
import { User } from "../types/User";

export const getUser = async (): Promise<User> => {
  try {
    const response = await HttpClient.get('/auth/profile');
  
    if (response.status !== 200) { 
      throw new Error('Erro ao obter perfil do usuário');
    } 

    return response.data;
  } catch (error: any) {
    throw new Error('Erro ao obter perfil do usuário: ' + error.message);
  }
};
