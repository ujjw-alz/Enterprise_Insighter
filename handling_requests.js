// this file only recieves backend requests and sends the response back 
// ideally all the work has to be done by the database interaction and the frontend pages 
import express from 'express';  
import { dirname } from "path";
import { fileURLToPath } from "url";   
import path from 'path';
import bodyParser from "body-parser"; 
import { login_system,register_system } from './database_interaction/collection1_interaction.js';  
import {insert_product,update_product,delete_product,manipulate_quantity,see_all_products,find_product,find_by_tag} from './database_interaction/collection2_interaction.js';
import {insert_new_due,increment_due,decrement_due,find_due_by_person_name, see_all_dues,delete_person} from './database_interaction/collection3_interaction.js' 
import { lookuprevenue } from './database_interaction/collection4_interaction.js';
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));  
const app = express();  
app.use(express.json());    
// first get request 
app.get('/g',(req,res)=>{
    res.send('reached backend');
})

// LOGIN AND REGISTER REQUESTS 
app.post('/login_system',async (req,res)=>{ 
    console.log(req.body);
   let x = await login_system(req.body); 
   console.log(x); 
   console.log(x.length); 
   if(x.length===0){  // since we returned [] for a user that is not found
    x ='user not found';
    } 
   else if(x !== 'error occured'){ 
    console.log(x);
     x = 'logged in'; 
     console.log('this');
    }
   res.send(x); 
}); 
app.post('/register_system',async(req,res)=>{
    let x = await register_system(req.body); 
    res.send(x);

});  
// INSERTION , VIEWING , MODIFYING ,DELETING 
app.post('/see_all_products',async(req,res)=>{   
    let x = await see_all_products(req.body.name);  
    res.send(x);
});
app.post('/find_by_tag',async(req,res)=>{  
    console.log(req.body.tosearch);
    let tagsarray = req.body.tosearch.split(','); 
    console.log(tagsarray);
      let x  = await find_by_tag(req.body.name,tagsarray); 
      res.send(x);
});


app.post('/insert_product',async(req,res)=>{ // currently we provide the username manually(in the request header or body) but in future we will need to do this automatically
    /*{"name": "jhonny", "product_details": {"product_name":"slippers","quantity":9,"sold_by_now":0,"cost_price":100,"selling_price":200,"tags":["slipper","yellow","flite","size-10"],"index":1}}*/

    let x = await insert_product(req.body.name,req.body.product_details); 
     
    res.send(x);
}); 
app.put('/update_product',async(req,res)=>{ // in the front end it should show all the fields in the product's document and let the user modify whatever he/she feels(except product_name) and then pass that whole as the object in the body here
    console.log(req.body.product_details.product_name);
    let x = await update_product(req.body.name,req.body.product_details.product_name,req.body); 
    res.send(x);

});  
app.put('/manipulate_quantity',async (req,res)=>{ 
    console.log(req.body);
    let x = await manipulate_quantity(req.body.name,req.body.product_name,req.body.quantity_sold); 
    res.send(x);
});
app.post('/delete_product',async(req,res)=>{ 
    console.log(req.body);
    let x =await delete_product(req.body.name,req.body.product_name); 
    res.send(x);
}); 

// DUE SYSTEM 
// request body is {name:username, person_object:{person_name:person_name,amount_due:amount_due}}; 

app.post('/see_all_dues',async(req,res)=>{
      let x = await see_all_dues(req.body.name); 
      res.send(x);
});
app.post('/insert_new_due',async(req,res)=>{
       let x = await insert_new_due(req.body.name,req.body.person_object); 
       res.send(x);
}); 

app.put('/increment_due',async(req,res)=>{
      let x  = await increment_due(req.body.name,req.body.person_name,req.body.incrementation); 
      res.send(x);
}); 
app.put('/decrement_due',async(req,res)=>{
    let x  = await decrement_due(req.body.name,req.body.person_name,req.body.decrementation); 
    res.send(x);
});  

app.post('/find_due_by_person_name',async(req,res)=>{
   let x = await find_due_by_person_name(req.body.name,req.body.person_name); 
   res.send(x);
});

app.delete('/delete_person',async(req,res)=>{  
    console.log(req.body.person_to_remove);
    let x = await delete_person(req.body.name,req.body.person_to_remove); 
    res.send(x);
})
//Revenue system 
app.post('/lookuprevenue',async(req,res)=>{
    console.log(req.body.name);  
    let x = await lookuprevenue(req.body.name); 
    console.log(x);
    res.send(x);
}); 

// HOTSELLING system  






app.listen(port,()=>{console.log(`listening on port ${port}`)});