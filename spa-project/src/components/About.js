import React from "react";
import qs from "qs";
const About=({location})=>{
    const query=qs.parse(location.search,{
        ignoreQueryPrefix:true//이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
    });
    const showDetail=query.detail==='true';//쿼리의 파싱값은 문자열
    return(
        <div>
            <h1>소개</h1>
            <p>소개, 이프로젝트는 리액트 라우터의 기초를 실습해보는 페이지</p>
            {showDetail&&<p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    )
}

export default About;