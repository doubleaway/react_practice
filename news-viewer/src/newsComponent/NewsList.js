import React,{useState,useEffect} from "react";
import styled from "styled-components";
import NewsListItem from "./NewsItem";
import axios from 'axios';
const NewsListBlock=styled.div`
box-sizing: border-box;
padding-bottom:3rem;
width:768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px){
    width:100%;
    padding-left:1rem;
    padding-right: 1rem;
}
`;
const sampleArticle={
    title:'제목',
    description:'내용',
    url:'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
};

const NewsList=({category})=>{
    const [articles,setArticles]=useState(null);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        //asyn 을 사용하는 함수를 따로 선언
        const fetchData=async()=>{
            setLoading(true);
            try{
                //카테고리 별로 api호출
                const query=category==='all'?'':`&category=${category}`;
                //await 가 뭘까?*************
                const response=await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f527ec04c3bf46318c03908c03e5c8fb`,
                );
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    },[category]);

    //대기중일때
    if(loading){
        return<NewsListBlock>대기중...</NewsListBlock>
    }
    //아직 아티클 값이 설정되지않았을때
    if(!articles){
        return null;
    }
    return(
        <NewsListBlock>
           {articles.map(article=>(
               <NewsListItem key={article.url} article={article}/>
           ))}
        </NewsListBlock>
    )
}

export default NewsList;