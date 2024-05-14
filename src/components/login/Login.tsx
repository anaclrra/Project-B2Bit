import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { login } from "../../services/AuthService";

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
        <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  };
  

export default Login;