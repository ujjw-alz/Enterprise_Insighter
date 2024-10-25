import { fetchcollection,disconnect_db } from "./mongo_db_collection2_config.js";   
import { incrementrevenue,update_overall_costprice} from "./collection4_interaction.js"; 
async function see_all_products(name){
    let res;
    try{   let x=name+'2';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}  
    let data = await res.find({}).toArray();  
     
    return data;
} 
async function find_product(product_name){ // find a product with a specific name
    let res;
    try{   let x=username+'2';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}  
    let x = await res.findOne({"product_name":product_name}); 
    return x;
}
async function find_by_name(username,product_name){ // helper function for other functions
    let res;
    try{   let x=username+'2';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';} 
    let data = await res.find({product_name:product_name}).toArray();  
     
    console.log(data);
    return (data.length === 0);  
    
}
async function find_by_tag(username,tosearch){ 
    let res;
    try{   let x=username+'2';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';} 
    let x = await res.find({}).toArray();  
    let found = []; 
    console.log(typeof tosearch) 
    for(let i=0;i<x.length;i++){ 
        let c = 0; 
        console.log(x[i]);
        for(let j=0;j<x[i].tags.length;j++){ 
            
            for(let k=0;k<tosearch.length;k++){
                if(x[i].tags[j]===tosearch[k]){
                    c=1;
                }
            }
        } 
        if(c===1){
            found.push(x[i]);
        }
    } 
    console.log(found);
    return found;
}
async function insert_product(username,product_object){  // allow only one insertion at a time so that we can avoid clash with already existing products 
    let already_exists = await find_by_name(username,product_object.product_name);
    if(already_exists=== true){ // point of error
        let res;
        try{   let x=username+'2';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}
    try{
        await res.insertOne(product_object); 
           
        await update_overall_costprice(username,product_object.quantity*product_object.cost_price);
        return 'inserted product successfully'; 
    }
    catch(error){
        console.log(error);  
         
        return 'error inserting the product';
    }  
   
   } 
   else{ 
     
    return 'product already exists maybe you want to update the product';
   }
   

}  
async function update_product(username,product_name,modification){
    let res;
    try{   let x=username+'2';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}  
    console.log(username+'2'); 
    try{ 
        console.log(modification.product_details.quantity); 
        // modifying cost_price and/or selling price while quantity is non zero leads to problems 
        let x = await res.findOne({product_name:product_name}); 
        if(x.quantity< modification.product_details.quantity){
            update_overall_costprice(username,(modification.product_details.quantity-x.quantity)*modification.product_details.cost_price);
        }
        await res.updateOne({"product_name":product_name},
            
            {$set:{
            "quantity":modification.product_details.quantity,
            "sold_by_now":modification.product_details.sold_by_now,
            "cost_price":modification.product_details.cost_price,
            "selling_price":modification.product_details.selling_price,
            "tags":modification.product_details.tags}
            });  
         
        
        return 'updated successfully';
    }   
    catch(error){ 
        console.log(error); 
        
        return 'error occured cannot modify';
    }

} 
async function delete_product(username,product_name){
    let res; 
    try{   let x=username+'2';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}   
    // don't allowing deleting if the product hasn't been here for atleast a month // well actually it maybe doesn't make sense to have this condition
    try{ 
     console.log(username,product_name);
    await res.deleteOne({"product_name":product_name});  // possible error-the product name doesn't exist
    return 'deleted product successfully';
    } 
    catch(error){
        console.log(error); 
        return 'error occurred while deleting';
    } 
    
    
} 
async function manipulate_quantity(username,product_name,quantity_sold){
    let res;  
    if(find_by_name(product_name)!==0){  
        try{   let x=username+'2';        res = await fetchcollection(x);      }catch(error){return 'error fetching collection';}
        try{   
            
           let x = await res.findOne({product_name:product_name}); 
           console.log(typeof x.product_name); 
           let new_sold_by_now = x.sold_by_now+quantity_sold; 
           let new_quantity = x.quantity - quantity_sold; 
           await res.updateOne({"product_name":product_name},{$set:{"sold_by_now":new_sold_by_now,"quantity":new_quantity}})
            incrementrevenue(username,quantity_sold*(x.selling_price));
            return 'modified successfully';
        } 
        catch(error){
            console.log(error); 
            return 'error modifying';
        }
           
    } 
    else{ 

        return 'no such product';
    } 
    
};
export {insert_product,update_product,delete_product,manipulate_quantity,see_all_products,find_product,find_by_tag};
