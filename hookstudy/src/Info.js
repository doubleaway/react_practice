// useState 여러번 사용하기,
// useEffect(렌더링 될때마다 특정작업 수행),
// 특정값이 업데이트 될때만 실행하고싶을때
import React,{useEffect, useReducer, useState} from 'react';
function reducer(state,action){
    return{
        ...state,
        [action.name]:action.value
    }
}
const Info=()=>{
    // userReducer
    const [state,dispatch]=useReducer(reducer,{
        name:'',
        nickName:''
    });
    const {name,nickName}=state;
    const onChange=e=>{
        dispatch(e.target);
    };

    // useReducer 끝
    // useSate 
    // const [name,setName]=useState('');
    // const [nickName,setNickName]=useState("");
    // useEffect(()=>{
    //     console.log("렌더링 완료되었습니다.");
    //     console.log({
    //         name,nickName
    //     }
    //     );
    // });
    // useEffect(()=>{
    //     console.log("마운트될때만 실행됨!");//맨처음 렌더링 될때만 실행,업데이트 될때는 실행하지 않음.빈배열 추가
    // },[]);
    // useEffect(()=>{
    //     console.log("네임값이 변경될때");//특정값[name]이변경되었을때 실행
    // },[name]);
    // useEffect(()=>{
    //     console.log("effect");//특정값[name]이변경되었을때 실행
    //     console.log(name);
    //     return()=>{
    //         console.log("clean up");
    //         console.log(name);
    //     }
    // });
    // useSate 끝
    // const onChangeName=e=>{
    //     setName(e.target.value);
    // };
    // const onChangeNickName=e=>{
    //     setNickName(e.target.value);
    // };
    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickName"value={nickName} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickName}
                </div>
            </div>
        </div>
    );
};
export default Info;