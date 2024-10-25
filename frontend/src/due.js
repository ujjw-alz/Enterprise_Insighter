// import {useState} from 'react';  
//  import axios from 'axios';
// import {Showdues} from './showdues'; 
//  import {Insertpersonform} from './insertpersonform'; 
// import {Deletepersonform} from './delete_person_due';
// function Due(props){ 
//     const [clickseealldues,setclickseealldues] = useState(0);    
//     const [renderseealldues,setrenderseealldues]=useState([]); 
//     const [clickinsertnewperson,setclickinsertnewperson] = useState(0); 
//     const [newpersonobject,setnewpersonobject] = useState({}); 
//     const [clickincrementdue,setclickincrementdue]=useState(0);  
//     const [clickdecrementdue,setclickdecrementdue] = useState(0);  
//     const [clickdeleteperson,setclickdeleteperson] = useState(0); 

//     const headers = {
//         'Content-Type': 'application/json'
//       }; 
   
//     function see_all_dues(event){
//         let temp = clickseealldues^1; 
//         if(temp){
//         let tosend= {'name':props.name};  
//         console.log(tosend);
//         axios.post('/see_all_dues',tosend,{headers:headers}).then((response)=>{
//                console.log(response.data); 
//                setclickseealldues(temp);  
//                setrenderseealldues(response.data);
//         }).catch((error)=>{
//             console.log(error);
//         }) 
//        } 
//        else{
//         setclickseealldues(temp);
//        } 
//     } 
//     function click_insert_new_person(event){
//            let temp = clickinsertnewperson^1;  
//            setclickinsertnewperson(temp);
//     }  
//     function insertperson(event) { 
//         let tosend = {'name':props.name,'person_object':newpersonobject};
//         axios.post('/insert_new_due',tosend,{headers:headers}).then((response)=>{
//             console.log(response.data); 
//         }).catch((error)=>{
//             console.log(error);
//         })
//         setnewpersonobject({ person_name: '', amount_due: '' });
//     }

//     function nameonchange(event) {
//         setnewpersonobject({ ...newpersonobject, person_name: event.target.value });
//     } 
//     function amountonchange(event) {
//         setnewpersonobject({ ...newpersonobject, amount_due: event.target.value });
//     } 
//     function click_increment_due(){
//         let temp = clickincrementdue^1; 
//         setclickincrementdue(temp);
//     }
//     function incrementdue(event){
//         let tosend = {'name':props.name,'person_name':newpersonobject.person_name,'incrementation':newpersonobject.amount_due}; 
//         axios.put('/increment_due',tosend,{headers:headers}).then((response)=>{
//             console.log(response.data); 
//         }).catch((error)=>{
//             console.log(error);
//         })
//     }  
//     function click_decrement_due(event){
//         let temp = clickdecrementdue^1; 
//         setclickdecrementdue(temp);
//     }
//     function decrementdue(event){
//         let tosend = {'name':props.name,'person_name':newpersonobject.person_name,'decrementation':newpersonobject.amount_due}; 
//         axios.put('/decrement_due',tosend,{headers:headers}).then((response)=>{
//             console.log(response.data); 
//         }).catch((error)=>{
//             console.log(error);
//         })
//     } 
//     function click_delete_person(event){
//         let temp = clickdeleteperson^1; 
//         setclickdeleteperson(temp); 
//     } 
//     function delete_person(event){
//        let person_name = document.querySelector('input[name="person_to_remove"]').value; 
//        let tosend = {'name':props.name,'person_to_remove':person_name};  
//        console.log("person_name" + person_name); 
//        console.log("tosend" + tosend.name + tosend.person_to_remove);
//        axios.delete('/delete_person',{ data: tosend, headers: headers }).then((response)=>{
//         console.log(response.data);
//        }).catch((error)=>{
//         console.log(error);
//        }) 
//        document.querySelector('input[name="person_to_remove"]').value='';
//     }
//     return (
//         <div>
//             <button onClick={see_all_dues}>See all dues</button> 
//             {
//                 clickseealldues?<Showdues renderseealldues={renderseealldues}/>:<div></div>
//             } 
//             <button onClick={click_insert_new_person}>insert new due</button> 
//             {
//                   clickinsertnewperson?<Insertpersonform insertperson={insertperson} nameonchange={nameonchange} amountonchange={amountonchange} field1="person name" field2 = "amount due" typeofoperation="Insert person"/>:<div></div>
//             } 
//             <button onClick={click_increment_due}>Increment due</button> 
//             {
//                clickincrementdue?<Insertpersonform insertperson={incrementdue} nameonchange={nameonchange} amountonchange={amountonchange} field1="person name" field2 = "increment due by" typeofoperation="Increment due"/>:<div></div>
//             } 
//             <button onClick={click_decrement_due}>Decrement due</button> 
//             {
//                clickdecrementdue?<Insertpersonform insertperson={decrementdue} nameonchange={nameonchange} amountonchange={amountonchange} field1="person name" field2 = "Decrement due by" typeofoperation="Decrement due"/>:<div></div>
//             }  
//             <button onClick={click_delete_person}>Delete person from record</button> 
//             {/* {
//                 clickdeleteperson?<div><input type="text" placeholder="enter person's name" name="person_to_remove"/> <button onClick={delete_person}>Remove person</button></div>:<div></div>
//             } */} 
//             {
//                 clickdeleteperson?<Deletepersonform delete_person={delete_person}/>:<div></div>
//             }

//         </div>
//      )
// } 
// export {Due}; 
import React, { useState } from 'react';
import axios from 'axios';
import { Showdues } from './showdues';
import { Insertpersonform } from './insertpersonform';
import { Deletepersonform } from './delete_person_due';
import './due_style.css'; // Import CSS file

function Due(props) {
    const [clickseealldues, setclickseealldues] = useState(0);
    const [renderseealldues, setrenderseealldues] = useState([]);
    const [clickinsertnewperson, setclickinsertnewperson] = useState(0);
    const [newpersonobject, setnewpersonobject] = useState({});
    const [clickincrementdue, setclickincrementdue] = useState(0);
    const [clickdecrementdue, setclickdecrementdue] = useState(0);
    const [clickdeleteperson, setclickdeleteperson] = useState(0);

    const headers = {
        'Content-Type': 'application/json'
    };

    function see_all_dues(event) {
        let temp = clickseealldues ^ 1;
        if (temp) {
            let tosend = { 'name': props.name };
            axios.post('/see_all_dues', tosend, { headers: headers }).then((response) => {
                setclickseealldues(temp);
                setrenderseealldues(response.data);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            setclickseealldues(temp);
        }
    }

    function click_insert_new_person(event) {
        let temp = clickinsertnewperson ^ 1;
        setclickinsertnewperson(temp);
    }

    function insertperson(event) {
        let tosend = { 'name': props.name, 'person_object': newpersonobject };
        axios.post('/insert_new_due', tosend, { headers: headers }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
        setnewpersonobject({ person_name: '', amount_due: '' });
    }

    function nameonchange(event) {
        setnewpersonobject({ ...newpersonobject, person_name: event.target.value });
    }

    function amountonchange(event) {
        setnewpersonobject({ ...newpersonobject, amount_due: event.target.value });
    }

    function click_increment_due() {
        let temp = clickincrementdue ^ 1;
        setclickincrementdue(temp);
    }

    function incrementdue(event) {
        let tosend = { 'name': props.name, 'person_name': newpersonobject.person_name, 'incrementation': newpersonobject.amount_due };
        axios.put('/increment_due', tosend, { headers: headers }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    function click_decrement_due(event) {
        let temp = clickdecrementdue ^ 1;
        setclickdecrementdue(temp);
    }

    function decrementdue(event) {
        let tosend = { 'name': props.name, 'person_name': newpersonobject.person_name, 'decrementation': newpersonobject.amount_due };
        axios.put('/decrement_due', tosend, { headers: headers }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    function click_delete_person(event) {
        let temp = clickdeleteperson ^ 1;
        setclickdeleteperson(temp);
    }

    function delete_person(event) {
        let person_name = document.querySelector('input[name="person_to_remove"]').value;
        let tosend = { 'name': props.name, 'person_to_remove': person_name };
        axios.delete('/delete_person', { data: tosend, headers: headers }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
        document.querySelector('input[name="person_to_remove"]').value = '';
    }

    return (
        <div className="due-container">
            <button onClick={see_all_dues}>See all dues</button>
            {clickseealldues ? <Showdues renderseealldues={renderseealldues} /> : <div></div>}
            <button onClick={click_insert_new_person}>Insert new due</button>
            {clickinsertnewperson ?
                <Insertpersonform
                    insertperson={insertperson}
                    nameonchange={nameonchange}
                    amountonchange={amountonchange}
                    field1="person name"
                    field2="amount due"
                    typeofoperation="Insert person"
                /> : <div></div>}
            <button onClick={click_increment_due}>Increment due</button>
            {clickincrementdue ?
                <Insertpersonform
                    insertperson={incrementdue}
                    nameonchange={nameonchange}
                    amountonchange={amountonchange}
                    field1="person name"
                    field2="increment due by"
                    typeofoperation="Increment due"
                /> : <div></div>}
            <button onClick={click_decrement_due}>Decrement due</button>
            {clickdecrementdue ?
                <Insertpersonform
                    insertperson={decrementdue}
                    nameonchange={nameonchange}
                    amountonchange={amountonchange}
                    field1="person name"
                    field2="Decrement due by"
                    typeofoperation="Decrement due"
                /> : <div></div>}
            <button onClick={click_delete_person}>Delete person from record</button>
            {clickdeleteperson ? <Deletepersonform delete_person={delete_person} /> : <div></div>}
        </div>
    )
}

export { Due };





