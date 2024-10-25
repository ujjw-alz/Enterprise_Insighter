// import axios from 'axios'; 
// import {useState} from 'react';  
// import {Showfounddata} from './showfounddata';
// function Findproductform(props){ 
//    const [description,setdescription] = useState(''); 
//    const [foundproducts, setFound] = useState([]);

//    const headers = {
//     'Content-Type': 'application/json'
//   }; 
//    function handlechange(event){
//        setdescription(event.target.value);
//    } 
//    function handlesearch(){ 
//       let tosend = {'name':props.name,'tosearch':description};
//       axios.post('/find_by_tag',tosend,{headers:headers}).then((response)=>{
//         console.log(response.data); 
//         setFound(response.data); 
        
//       }).catch((error)=>{
//         console.log(error);
//       })
//    }
//     return ( 
//         <div>
//            <div>
//             <input type="text" placeholder="enter product description" onChange={handlechange} value = {description}/> {/* comma seperated tags*/}
//             <button onClick={handlesearch}>search</button>
//            </div> 
//             {foundproducts.length!==0&&foundproducts.map((found,index)=>(<Showfounddata product_name = {found.product_name} quantity ={found.quantity} sold_by_now ={found.sold_by_now} cost_price={found.cost_price} selling_price={found.selling_price} tags = {found.tags}/>))}



//         </div>
        
//     ); 
    
// }; 
// export {Findproductform}; 
 

// Inside your Findproductform component file

import axios from 'axios';
import { useState } from 'react';
import { Showfounddata } from './showfounddata';
import './find_product_form_style.css';

function Findproductform(props) {
   const [description, setDescription] = useState('');
   const [foundProducts, setFoundProducts] = useState([]);

   const headers = {
    'Content-Type': 'application/json'
  };

   function handleChange(event) {
       setDescription(event.target.value);
   }

   function handleSearch() {
      let toSend = {'name': props.name, 'tosearch': description};
      axios.post('/find_by_tag', toSend, {headers: headers}).then((response) => {
        setFoundProducts(response.data);
      }).catch((error) => {
        console.log(error);
      });
   }

    return (
        <div className="container">
           <div className="input-container">
            <input type="text" className="input-field" placeholder="Enter product description" onChange={handleChange} value={description}/>
            <button className="button" onClick={handleSearch}>Search</button>
           </div>
            <div className="found-products">
              {foundProducts.length !== 0 && foundProducts.map((found, index) => (
                <div key={index} className="product-item">
                    <div className="product-info">Product: {found.product_name}</div>
                    <div className="product-info">Quantity: {found.quantity}</div>
                    <div className="product-info">Sold by now: {found.sold_by_now}</div>
                    <div className="product-info">Cost Price: {found.cost_price}</div>
                    <div className="product-info">Selling Price: {found.selling_price}</div>
                    <div className="product-info">Tags: {found.tags.join(', ')}</div>
                </div>
              ))}
            </div>
        </div>
    ); 
}

export { Findproductform };

