import React,{useState,useCallback} from "react";
import {MdAdd} from 'react-icons/md';
import '../scss/TodoInsert.scss';
const TodoInsert=({onInsert})=>{
    const [value,setValue]=useState('');
    const onChange=useCallback(e=>{
        setValue(e.target.value)
    },[]);
    const onSubmit=useCallback(e=>{
        onInsert(value);
        setValue('');//value값 초기화
        e.preventDefault();
    },[onInsert,value])
    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input value={value} onChange={onChange} placeholder="할 일을 입력하시오."/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    )
}

export default TodoInsert;