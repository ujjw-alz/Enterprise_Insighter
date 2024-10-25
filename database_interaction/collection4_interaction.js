import { fetchcollection,disconnect_db } from "./mongo_db_collection4_config.js"; 
async function incrementrevenue(username,amount){
    let res;
    try{   let x=username+'4';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';} 
    try{  
        let x = await res.findOne({}); 
        let updated_revenue = x.net_revenue + amount; 
        res.updateOne({},{$set:{"net_revenue":updated_revenue}});
        return 'incremented revenue';
    } 
    catch(error){
        console.log(error); 
        return 'error incrementing revenue';
    }
}    
async function update_overall_costprice(username,amount){
    let res;
    try{   let x=username+'4';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';} 
    try{  
        let x = await res.findOne({});  
        if(x===null){
            await res.insertOne({'name':username,'costprice':0,'net_revenue':0}) 
            x = await res.findOne({});
        }
        let updated_costprice = x.costprice + amount; 
        res.updateOne({},{$set:{"costprice":updated_costprice}});
        
        return 'incremented costprice';
    } 
    catch(error){
        console.log(error); 

        return 'error incrementing costprice';
    }
}  
async function lookuprevenue(username){
    let res;
    try{   let x=username+'4';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}  
    try{
           let x = await res.findOne({});  
           console.log(x);
           return x; 
    } 
    catch(error){
        console.log(error); 
        return 'error looking up data';
    }
}
export {incrementrevenue,update_overall_costprice,lookuprevenue};