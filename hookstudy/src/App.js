import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from "./Info";
import { useState } from 'react';
import Average from './Aveage';
function App() {
  const [visble,setVisible]=useState(false);
  return (
    <div>
      <button onClick={()=>{setVisible(!visble);}}>
        {visble?"숨기기":"보이기"}
      </button>
      <hr/>
      {visble&&<Info/>}
      <Average/>
    </div>
    
  );
}

export default App;
