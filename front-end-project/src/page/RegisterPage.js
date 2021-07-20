import React from "react";
import AuthTemplate from "../components/auth/AuthTemplete";
import RegisterForm from "../components/auth/RegisterForm";
const RegisterPage=()=>{
    return (
        <AuthTemplate>
             <RegisterForm type="register"></RegisterForm>
         </AuthTemplate>
    )
}

export default RegisterPage;