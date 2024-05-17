import * as Yup from "yup";
import httpClient from '../services/HttpClient'; 
import { User } from "../types/User";

export const login = async (user: User): Promise<void> => {
  try {
    const response = await httpClient.post('/auth/login/', user);

    if(response.status === 200) {
      localStorage.setItem('accessToken', response.data.tokens.access);

    }else{
      throw new Error('Erro de autenticação');

    }

  } catch (error: any) {
    throw new Error('Erro ao fazer login:' + error.message);
  }
};
 
export const validateSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters long").required(
      "Password is required"
    ),
  });