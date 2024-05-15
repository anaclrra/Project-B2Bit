import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login, validateSchema } from "../../services/AuthService";



const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = async (values: User) => {
    
        try {
            const userData = await login(values);
            console.log('Usuário autenticado:', userData);
            navigate('/profile')
        } catch (error: any) {
            console.error('Erro ao fazer login:', error.message);
        }
    };

    return (
      <div className="container w-96 m-auto mt-40 rounded-lg shadow-2xl bg-white">
        <div className="sm:mx-auto sm:w-auto sm:max-w-sm">
          <img
            src="..\..\assets\logo-b2bit.png"
            alt="B2Bit Logo"
          />
        </div>
  
        <div className="mt-10 mb-10 sm:mx-auto sm:w-auto sm:max-w-sm">
          <Formik
            initialValues={{ email: "",
            password: ""}}
            validationSchema={validateSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="m-3">
                  <label htmlFor="email" className="block  font-medium text-gray-800">
                    E-mail
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 rounded-lg border-none bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    placeholder="@gmail.com"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
  
                <div className="m-3">
                  <label htmlFor="password" className="block font-medium text-gray-800">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-3 py-2 rounded-lg border-none bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    placeholder="************"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>
  
                <div className="p-3">
                  <button
                    type="submit"
                    className="w-full text-center font-medium px-4 py-2 bg-[#02274F] text-white rounded-lg hover:bg-[#37699e]"
                    disabled={isSubmitting}
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  };
  

export default Login;