//c최상위 컴포넌트를 선언할때 block붙이기

import React from "react";
import { Link } from "react-router-dom";
import palette from "../../lib/style/palette";
import Button from "../Button";
import styled from "styled-components";

// 회원가입의 로그인 폼

const AuthFormBlock=styled.div`
    h3{
        margin:0;
        color:${palette.gray[8]};
        margin-bottom:1rem;
    }
`;
//인풋 스타일링
const StyledInput=styled.input`
    font-size:1rem;
    border:none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline:none;
    width:100%;
    &:focus{
        color:$oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    &+&{
        margin-top:1rem;
    }

    
`;

    // 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
    const Footer=styled.div`
    margin-top:2rem;
    text-align:right;
    a{
        color:${palette.gray[6]};
        text-decoration: underline;
        &:hover{
            color:${palette.gray[9]};
        }
    }
    `;
 const ButtonWithMarginTop=styled(Button)`
 margin-top: 1rem;
 `;

 const textMap={
     login:"login",
     register:"회원가입"
 }
const AuthForm=({type,form,onChange,onSubmit})=>{
    const text=textMap[type];
    console.log(form.username);
    return(
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput autoComplete="username" name="username" onChange={onChange} value={form.username} placeholder="아이디"/>
                <StyledInput
                autoComplete="new-password"
                name="password"
                placeholder="비밀번호"
                type="password"
                onChange={onChange} value={form.password}
                />
                {type==='register'&&(
                     <StyledInput
                     autoComplete="new-password"
                     name="passwordConfirm"
                     placeholder="비밀번호 확인"
                     type="password"
                     onChange={onChange} value={form.passwordConfirm}
                     />
                )}
                <ButtonWithMarginTop cyan fullWidth style={{marginTop:'1rem'}}>{text}</ButtonWithMarginTop>
            </form>
            <Footer>
                {type==='login'?(
                       <Link to="/register">회원가입</Link>
                ):
                (
                    <Link to="/login">로그인</Link>
                )
                }
              
            </Footer>
        </AuthFormBlock>
    )
}

export default AuthForm;