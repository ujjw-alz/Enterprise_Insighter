// import axios from 'axios'; 
// import {useState} from 'react';   
// import {After_login} from './after_login.js'; 
// import {Login_form} from './login_form.js'; 
// import {Register_form} from './register_form.js'; 
// import './styles.css';
// function Login(){   
//     const headers = {
//         'Content-Type': 'application/json'
//       };  
//     const [registerdata,setregisterdata] = useState({name:'',password:''});
//     const [userdata,setuserdata] = useState({name:'',password:''});   
//     const [login_res,setlogin_res]=useState(''); 
//     const[replies,setreplies]=useState(''); 
//     function timeout(){
//         setTimeout(() => {
//             setreplies('');
//         }, 1000);
//     }
//     function nameonchange(event){
//          setuserdata({...userdata,name : event.target.value});
//     } 
//     function passwordonchange(event){
//         setuserdata({...userdata,password : event.target.value});
//     } 
//     function nameonchangeregister(event){  
//       console.log('nameon');
//       console.log(event.target.value);
//       setregisterdata({...registerdata,name : event.target.value});
//  } 
//  function passwordonchangeregister(event){
//      setregisterdata({...registerdata,password : event.target.value});
//  }
//     function handlelogin(event){ 
//         event.preventDefault();
//         //    let x = JSON.stringify(userdata);  
//         console.log(userdata);
//         axios.post('/login_system', userdata, { headers: headers }).then((response)=>{ 
//             console.log('no') 
//             console.log(response.data);  
            
//              setlogin_res(response.data);  
//              setreplies(response.data);
//              timeout();
//            }).catch((error)=>{ 
//             console.log('error1');
//             console.log(error);
//            });
          
//     } 
//     function handleregister(event){
//         event.preventDefault();
//         //    let x = JSON.stringify(userdata);  
//         console.log(registerdata);
//         axios.post('/register_system',registerdata, { headers: headers }).then((response)=>{ 
//             console.log('no') 
//             console.log(response.data); 
//             setreplies(response.data); 
//             timeout();
           
//            }).catch((error)=>{ 
//             console.log('error1');
//             console.log(error);
//            });
//     }
//    return ( 
//       <div> 

//        <div>{login_res==='logged in'?
//        <After_login name={userdata.name}/>:<div><Login_form handlelogin={handlelogin} nameonchange={nameonchange} passwordonchange = {passwordonchange}/> 
//         <Register_form  handleregister = {handleregister} nameonchange={nameonchangeregister} passwordonchange = {passwordonchangeregister}/></div>}</div> 
       
//        {
        
//         replies===''?<div></div>:<div style={{backgroundColor:'red',display:'inline',padding:'10px 10px',minWidth:'0px',color:'white',borderRadius:"10px",borderColor:'white',borderWidth:'1px'}}>{replies}</div>}
//       </div> 

//    );
// } 
// export {Login}; 
import axios from 'axios';
import { useState } from 'react';
import { After_login } from './after_login.js';
import { Login_form } from './login_form.js';
import { Register_form } from './register_form.js';
import './styles.css';

function Login() {
    const headers = {
        'Content-Type': 'application/json'
    };
    const [registerdata, setregisterdata] = useState({ name: '', password: '' });
    const [userdata, setuserdata] = useState({ name: '', password: '' });
    const [login_res, setlogin_res] = useState('');
    const [showRegisterForm, setShowRegisterForm] = useState(false); // State to track visibility of register form
    const[replies,setreplies]=useState('');  
        function timeout(){
        setTimeout(() => {
            setreplies('');
        }, 1000);
    }
    function nameonchange(event) {
        setuserdata({ ...userdata, name: event.target.value });
    }

    function passwordonchange(event) {
        setuserdata({ ...userdata, password: event.target.value });
    }

    function nameonchangeregister(event) {
        setregisterdata({ ...registerdata, name: event.target.value });
    }

    function passwordonchangeregister(event) {
        setregisterdata({ ...registerdata, password: event.target.value });
    }

    function handlelogin(event) {
        event.preventDefault();
        console.log(userdata);
        axios.post('/login_system', userdata, { headers: headers }).then((response) => {
            console.log('no')
            console.log(response.data);
            setlogin_res(response.data); 
            setreplies(response.data); 
            timeout();
        }).catch((error) => {
            console.log('error1');
            console.log(error);
        });
    }

    function handleregister(event) {
        event.preventDefault();
        console.log(registerdata);
        axios.post('/register_system', registerdata, { headers: headers }).then((response) => {
            console.log('no')
            console.log(response.data); 
            setreplies(response.data); 
            timeout();
        }).catch((error) => {
            console.log('error1');
            console.log(error);
        });
    }

    return (
        <div>
            <div>
                {login_res === 'logged in' ? (
                    <After_login name={userdata.name} />
                ) : (
                    <div>
                        <Login_form
                            handlelogin={handlelogin}
                            nameonchange={nameonchange}
                            passwordonchange={passwordonchange}
                        />
                        {!showRegisterForm && ( // Toggle Register form visibility
                            <button className="reg_btn" onClick={() => setShowRegisterForm(true)}>Register</button>
                        )}
                        {showRegisterForm && (
                            <Register_form
                                handleregister={handleregister}
                                nameonchange={nameonchangeregister}
                                passwordonchange={passwordonchangeregister}
                            />
                        )}
                    </div> 
                    
                )} 
                  {
        
           replies===''?<div></div>:<div style={{backgroundColor:'red',display:'inline',padding:'10px 10px',minWidth:'0px',color:'white',borderRadius:"10px",borderColor:'white',borderWidth:'1px'}}>{replies}</div>}
        
            </div>
        </div>
    );
}

export { Login };