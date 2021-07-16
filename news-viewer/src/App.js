import React,{useCallback, useState} from "react";
import axios from "axios";
import logo from './logo.svg';
import { Route } from "react-router";
import './App.css';
import NewsList from "./newsComponent/NewsList";
import Categories from "./newsComponent/Category";
import NewsPage from "./page/NewPage";
const App=()=>{
  const [category,setCategory]=useState('all');
  //category의 값을 업데이트하는 함수
  const onSelect=useCallback(category=>setCategory(category),[]);

//   const onClick=async()=>{
// try{
//     const response=await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=f527ec04c3bf46318c03908c03e5c8fb');
//     setData(response.data);
//   }catch(e){
//     console.log(e)
//   }
// };
//   return(
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data&&<textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
//     </div>
//   );
return (
    //use state로 뉴스뷰어
    // <><Categories category={category} onSelect={onSelect}></Categories ><NewsList category={category}/></>
    <Route path="/:category?" component={NewsPage}/>
)
};
export default App;
