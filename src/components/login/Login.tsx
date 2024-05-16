import React from "react";
import { useNavigate } from "react-router-dom";
import { login, validateSchema } from "../../services/AuthService";
import { User } from "../../types/User";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LogoB2Bit from '../../assets/B2BitLogo.png';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: User) => {
    try {
      await login(values);
      navigate("/profile");
    } catch (error) {
      console.error(error);  
    }
  };

  return (

      <div className="container w-96 m-auto mt-20 rounded-2xl shadow-2xl bg-white">
        <div className="w-64 m-auto">
          <img
            src={LogoB2Bit}
            alt="B2Bit Logo"
          />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-auto sm:max-w-sm">
          <Formik
            initialValues={{ email: "",
            password: ""}}
            validationSchema={validateSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="m-3">
                  <label htmlFor="email" className="block font-medium text-gray-800">
                    E-mail
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-3 rounded-lg border-none bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-gray-600"
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
                    className="w-full px-3 py-3 rounded-lg border-none bg-[#F1F1F1] focus:outline-none focus:ring-1 focus:ring-gray-600"
                    placeholder="************"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>
  
                <div className="p-3">
                  <button
                    type="submit"
                    className="w-full text-center font-medium px-4 py-3 bg-[#02274F] text-white rounded-lg hover:bg-[#37699e]"
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