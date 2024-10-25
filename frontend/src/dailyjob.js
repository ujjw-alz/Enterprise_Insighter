// import axios from 'axios'; 
// import {useState} from 'react'; 
// import { Product_display } from './Product_display'; 
// import {Insertproductform} from './insertproductform'; 
// import {Manipulatequantityform} from './manipulatequantityform'; 
// import {Deleteproductform} from './deleteproductform'; 
// import {Findproductform} from './findproductform';
// function Dailyjob(props){   
//     const [insertproductform,setinsertproductform] = useState(0); 
//     const [clickseeallproducts,setclickseeallproducts]=useState(0); 
//     const [manipulatequantityform,setmanipulatequantityform] = useState(0); 
//     const [clickdeleteproduct,setclickdeleteproduct]=useState(0); 
//     const [clickfindproduct,setclickfindproduct] = useState(0);
//      const headers = {
//         'Content-Type': 'application/json'
//       };  
//       //const [allproducts,setallproducts]=useState({'product_name':'','quantity':0,'sold_by_now':0,'cost_price':0,'selling_price':0,'tags':[]})
//       const [allproducts,setallproducts] = useState([]);

//       console.log(props.name);
//      async function see_all_products(){  
//         let temp = clickseeallproducts;
//         setclickseeallproducts(temp^1);
//         let name = props.name;  
//         console.log(props.name); 
//         let ob = {'name':props.name};
//         axios.post('/see_all_products',ob,{headers:headers}).then((response)=>{  
//             setallproducts(response.data);
//         }).catch((err)=>{
//             console.log(err);
//         }) 
//         console.log('here');
//      }  
//      function clickinsert(){ 
//         let x = insertproductform^1;
//         setinsertproductform(x);
//      }
//      function manipulate_quantity(){
//         let temp = manipulatequantityform^1; 
//         setmanipulatequantityform(temp);
//      } 
//      function delete_product(){
//            let temp = clickdeleteproduct^1; 
//            setclickdeleteproduct(temp);
//      } 
//      function find_product(){
//            let temp = clickfindproduct^1; 
//            setclickfindproduct(temp);
//      }
//      return (
//           <div >
//                <button onClick={see_all_products}>See all products</button><br/>
//                <button onClick={find_product}>find product</button><br/>  
//                {clickfindproduct?<Findproductform name = {props.name}/>:<div></div>}
//                <button onClick={clickinsert}>insert product</button><br/>
//                {insertproductform?<Insertproductform name={props.name}/>:<div></div>}
//                <button onClick={delete_product}>delete product</button><br/> 
//                {clickdeleteproduct?<Deleteproductform name={props.name}/>:<div></div>}
//                <button onClick={manipulate_quantity}>manipulate_quantity</button><br/>  
//                {manipulatequantityform?<Manipulatequantityform name = {props.name}/>:<div></div>}
//                <div>ALL PRODUCTS</div> 
//                {clickseeallproducts===0?<div></div>:<div>{ 
              
//               allproducts.map((product,index) => ( 
//                  <Product_display product_name = {product.product_name} quantity ={product.quantity} sold_by_now ={product.sold_by_now} cost_price={product.cost_price} selling_price={product.selling_price} tags = {product.tags}/>
                    
//               ))
//                }</div>}
               
//                <div className="name">{props.name}</div>
//           </div> 

//      ); 

// } 
// export {Dailyjob}; 
// Inside your Dailyjob component file

import axios from 'axios';
import { useState } from 'react';
import { Product_display } from './Product_display';
import { Insertproductform } from './insertproductform';
import { Manipulatequantityform } from './manipulatequantityform';
import { Deleteproductform } from './deleteproductform';
import { Findproductform } from './findproductform';
import './daily_job_style.css';

function Dailyjob(props) {
    const [insertproductform, setInsertproductform] = useState(0);
    const [clickseeallproducts, setClickseeallproducts] = useState(0);
    const [manipulatequantityform, setManipulatequantityform] = useState(0);
    const [clickdeleteproduct, setClickdeleteproduct] = useState(0);
    const [clickfindproduct, setClickfindproduct] = useState(0);
    const [allproducts, setAllproducts] = useState([]);

    const headers = {
        'Content-Type': 'application/json'
    };

    async function see_all_products() {
        let temp = clickseeallproducts;
        setClickseeallproducts(temp ^ 1);
        let name = props.name;
        let ob = { 'name': props.name };
        axios.post('/see_all_products', ob, { headers: headers }).then((response) => {
            setAllproducts(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    function clickinsert() {
        let x = insertproductform ^ 1;
        setInsertproductform(x);
    }

    function manipulate_quantity() {
        let temp = manipulatequantityform ^ 1;
        setManipulatequantityform(temp);
    }

    function delete_product() {
        let temp = clickdeleteproduct ^ 1;
        setClickdeleteproduct(temp);
    }

    function find_product() {
        let temp = clickfindproduct ^ 1;
        setClickfindproduct(temp);
    }

    return (
        <div className="container">
            <button className="button" onClick={see_all_products}>See all products</button>
            <button className="button" onClick={find_product}>Find product</button>
            {clickfindproduct ? <Findproductform name={props.name} /> : null}
            <button className="button" onClick={clickinsert}>Insert product</button>
            {insertproductform ? <Insertproductform name={props.name} /> : null}
            <button className="button" onClick={delete_product}>Delete product</button>
            {clickdeleteproduct ? <Deleteproductform name={props.name} /> : null}
            <button className="button" onClick={manipulate_quantity}>Manipulate quantity</button>
            {manipulatequantityform ? <Manipulatequantityform name={props.name} /> : null}
            <div className="product-list">
                <div className="name">{props.name}</div>
                <div>All Products</div>
                {clickseeallproducts === 1 &&
                    allproducts.map((product, index) => (
                        <div key={index} className="product-item">
                            <div className="product-info">Product: {product.product_name}</div>
                            <div className="product-info">Quantity: {product.quantity}</div>
                            <div className="product-info">Sold by now: {product.sold_by_now}</div>
                            <div className="product-info">Cost Price: {product.cost_price}</div>
                            <div className="product-info">Selling Price: {product.selling_price}</div>
                            <div className="product-info">Tags: {product.tags.join(', ')}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export { Dailyjob };
