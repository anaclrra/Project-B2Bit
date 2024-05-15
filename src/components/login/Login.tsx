import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { login } from "../../services/AuthService";
import  '../../assets/logo-b2bit.png';


const Login: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({email: '', password: ''});

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const userData = await login(user);
            console.log('Usuário autenticado:', userData);
            navigate('/profile')
        } catch (error: any) {
            console.error('Erro ao fazer login:', error.message);
        }
    };
    return(
  
    <div className="container w-96 m-auto mt-40 rounded-lg shadow-2xl bg-white">
    
      <div className="sm:mx-auto sm:w-auto sm:max-w-sm">
        <img
          //className="mx-auto h-10 w-auto"
          src="..\..\assets\logo-b2bit.png"
          alt="B2Bit Logo"
        />
      </div>
      <div className="mt-10 mb-10 sm:mx-auto sm:w-auto sm:max-w-sm ">
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="m-3">
            <label htmlFor="email" className="block  font-medium text-gray-800">
             E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-lg border-none bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-600"
              placeholder="@gmail.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div className="m-3">
           <label htmlFor="password" className="block font-medium text-gray-800">
             Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-lg border-none bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-600"
              placeholder="************"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <div className="p-3">
           <button
                type="submit"
                className="w-full text-center font-medium px-4 py-2 bg-[#02274F] text-white rounded-lg hover:bg-[#37699e]"
            >
                Sign In
            </button>
            </div>
        </form>
      </div>
    </div>
        
    ); 
  };
  

export default Login;