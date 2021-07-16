import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
const withRouterSample=({location,match,history})=>{
    return(
        <div>
            <h4>location</h4>
            <textarea 
                value={JSON.stringify(location,null,2)}
                rows={7}
                readOnly={true}/>
            <button onClick={()=>history.push('/')}>홈으로</button>
        </div>
    )
}

export default withRouter(withRouterSample);