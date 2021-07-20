import React from "react";
import AuthTemplate from "../components/auth/AuthTemplete";
import LoginForm from "../components/auth/LoginForm";
const LoginPage=()=>{
    return (
        <AuthTemplate>
            <LoginForm type="login"></LoginForm>
        </AuthTemplate>
    )
}

export default LoginPage;