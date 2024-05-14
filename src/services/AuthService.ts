import { User } from "../types/User";

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