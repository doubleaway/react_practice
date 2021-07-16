import React from 'react';
import Categories from '../newsComponent/Category';
import NewsList from '../newsComponent/NewsList';

const NewsPage=({match})=>{
    //카테고리가 선택되지않았으면 기본값 all로 사용
    const category=match.params.category||'all';
    return(
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    )
}

export default NewsPage;