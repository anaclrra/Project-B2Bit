import { User } from "../types/User";
import * as Yup from "yup";

export const login = async (user: User): Promise<any> => {
    try {
        const response = await fetch('https://api.homologation.cliqdrive.com.br/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json;version=v1_web',
            
            },
            body: JSON.stringify(user)
        });
        if(!response.ok){
            throw new Error('Erro de autenticação');
        }
        const data = await response.json()
        localStorage.setItem('accessToken', data.tokens.access);
        return data;

    } catch(error: any){
        throw new Error('Erro ao fazer login:'+ error.message);
    }
}

export const validateSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters long").required(
      "Password is required"
    ),
  });