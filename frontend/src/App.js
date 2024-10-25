import React,{useEffect,useState} from 'react'; 
import axios from 'axios';  
function App(){  
  const [x,setx] = useState("");
  useEffect(()=>{
     axios.get('/g').then((response)=>{ 
      console.log(response.data);
      setx(response.data);
     }).catch((error)=>{
      console.log(error);
     });
     
  });
  return (
      <div>{x}</div>
  );
} 
export {App};