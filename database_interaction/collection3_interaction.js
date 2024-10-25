import { fetchcollection,disconnect_db } from "./mongo_db_collection3_config.js";  

async function insert_new_due(username,person_object){  
    let finding_the_person = await find_due_by_person_name(username,person_object.person_name);
    console.log(finding_the_person);
  if(finding_the_person==='none' && finding_the_person!=='error occurred while finding due person'){ 

    try{
        let res;
        try{   let x=username+'3';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';} 
        await res.insertOne(person_object); 
        //await disconnect_db(); 
        return 'inserted successfully';
    } 
    catch(error){
         console.log(error); 
         //await disconnect_db();
        return 'error occured while inserting';
    }

  }   
  else if(finding_the_person!=='error occurred while finding due person'){
    return 'user already exists try incrementing or decrementing the due';
  }
  else{
    return 'error occured in finding the due person';
  }
    
} 
async function increment_due(username,person_name,incrementation){
    let res;
    try{   let x=username+'3';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';} 
    try{
        let finding_the_person = await find_due_by_person_name(username,person_name);
        let x = await res.findOne({"person_name":person_name}); 
        if(finding_the_person==='none' && finding_the_person!=='error occurred while finding due person'){
                 let dummy_person_object = {person_name:person_name,amount_due:incrementation};
                 await insert_new_due(username,dummy_person_object); 
                 return 'incrementation done1';
        } 
        else if(finding_the_person!=='error occurred while finding due person'){  
            console.log(x);
            let incremented_amount = Number(isNaN(x.amount_due)?0:x.amount_due) + Number(incrementation); 
            console.log(incremented_amount);
            await res.updateOne({"person_name":person_name},{$set:{"amount_due":incremented_amount}}); 
            return 'incrementation done2';
        }
        else{
            return 'error finding the user';
        }

    } 
    catch(error){
          console.log(error); 
          return 'error occured while incrementing';
    }
} 
async function decrement_due(username,person_name,decrementation){
    let res;
    try{   let x=username+'3';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';} 
    try{ 
        let finding_the_person = await find_due_by_person_name(username,person_name);
        if(finding_the_person===false && finding_the_person!=='error occurred while finding due person'){
            return 'user not found in due list';
        } 
        else if(finding_the_person!=='error occurred while finding due person'){ 
            let x =await  res.findOne({"person_name":person_name});  
            let decremented_amount = x.amount_due - decrementation;  
            decremented_amount = isNaN(decremented_amount) ? 0 : decremented_amount;
 
            
            await res.updateOne({"person_name":person_name},{$set:{"amount_due":decremented_amount}});  
            return 'decremented amount successfully';
        }
    } 
    catch(error){
        console.log(error); 
        return 'error occurred while decrementing amount';
    }
} 
async function find_due_by_person_name(username,person_name){
    let res;
    try{   let x=username+'3';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}  
    try{ 
          let x = await res.findOne({"person_name":person_name});  
          console.log(x);
          if(x===null){ 
            //await disconnect_db(); 
            return 'none';
          } 
          else{ 
            //await disconnect_db(); 
            return x;
          } 

    } 
    catch(error){
       console.log(error);  
       //await disconnect_db();
       return 'error occurred while finding due person';
    }
} 
async function see_all_dues(username){
  let res;
  try{   let x=username+'3';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}   
  let all_dues='';
  try{ 
   all_dues = await res.find({}).toArray();  
  } 
  catch(err){ 
    all_dues = 'error occured'
    console.log(err);
  } 
  return all_dues;
  
} 
async function delete_person(username,persontoremove){ 
  console.log(persontoremove);
    let res; 
    try{   let x=username+'3';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}   
    let finding_the_person = await find_due_by_person_name(username,persontoremove);  
    console.log(finding_the_person);
    if(finding_the_person!=='none'){
       await res.deleteOne({'person_name':persontoremove}); 
       return 'person removed';
    } 
    else{
      return 'person doesn\'t exist';
    }
}

export {insert_new_due,increment_due,decrement_due,find_due_by_person_name,see_all_dues,delete_person};