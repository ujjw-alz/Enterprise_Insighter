// login-system: verify if any username and password match with the query  
import { fetchcollection,disconnect_db } from "./mongo_db_collection1_config.js";
async function login_system(userdata){ 
    let res;
    try{           res = await fetchcollection();      }catch(error){return 'error fetching collection';} 
    let data;
    try{
     data  = await res.find({name:userdata.name,password:userdata.password}).toArray();  // find the user  
    //  data = JSON.stringify(data); 
     //data = {data,val:1};  
     
    }
    catch(error){
        //data = {data:0,val:0} 
        data = 'error occured';
        console.log(error);
    }   
    await disconnect_db(); 
    return data;

}  
// register-system: onboard user by making a document in the login_system database and also assign collection2(inventory) and collection3(due)
async function findusername(name){ 
    let res;
    try{           res = await fetchcollection();      }catch(error){return 'error fetching collection';} 
    let data;
    try{
     data  = await res.find({name:name}).toArray();  // find the user  
     //data = {data,val:1};  
     
    }
    catch(error){
        //data = {data:0,val:0} 
        data = 'error occured';
        console.log(error);
    }   
    await disconnect_db(); 
    return data;

} 
async function register_system(userdata){   
    let data = await findusername(userdata.name); 
    console.log(data.length);
    if(data.length>0 && data !==  'error occured'){
       return 'user name taken';
    } 
    if(data === 'error occured'){
        return data;
    }
    //actual registeration system  
    let res;
    try{           res = await fetchcollection();      }catch(error){return 'error fetching collection';} 
    let say;    
    try{ 
       let collection2 = userdata.name+'2'; 
       let collection3 = userdata.name +'3'; 
       userdata.collection2 = collection2; 
       userdata.collection3= collection3;
       await res.insertOne(userdata);  
       console.log('inserted successfully'); 
       say= 'inserted successfully';

    } 
    catch(error){
      console.log(error); 
      say = 'couldn\'t register';
    }  
    await disconnect_db();
    return say;
} 
export {login_system,register_system};