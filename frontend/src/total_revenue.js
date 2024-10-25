// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import {Piechartrepresentation} from './piechartrepresentation';
// import {Barrepresentation} from './barrepresentation'; 
// import './total_revenue.css';
// function Statistics(props) {
//     const [productarray, setProductArray] = useState([]);
//     const [frequencyarray,setfrequencyarray]=useState([]); 
//     const[shareinprofit,setshareinprofit] = useState([]);
//     const headers = { 
//         'Content-Type': 'application/json'
//     }; 
//     let sortedproductarray=[]; 
//     let sortedshareinprofit=[];
//     function constructarray(){
//       console.log(props.name)
//       let tosend = { "name": props.name };
//       axios.post('/see_all_products', tosend, { headers: headers }).then((response) => {
//           console.log(response.data);   
//           let reply = response.data;  
          
//           let toinsertarray=[];
//           for(let i=0;i<reply.length;i++){
//              let toinsertobject  = {'product_name':reply[i].product_name,'sold_by_now':reply[i].sold_by_now,'selling_price':reply[i].selling_price,'cost_price':reply[i].cost_price}; 
//              let reducedobject = {'sold_by_now': Number(reply[i].sold_by_now),'product_name':reply[i].product_name}  
//              let profitofproduct = (Number(reply[i].selling_price)-Number(reply[i].cost_price))*(Number(reply[i].sold_by_now)); 
//              let profitobject = {'product_name':reply[i].product_name,'netprofit':profitofproduct}; 
//              sortedshareinprofit.push(profitobject);
//              sortedproductarray.push(reducedobject);
//              toinsertarray.push(toinsertobject);
//           }   
//           sortedproductarray.sort((a, b) => b.sold_by_now - a.sold_by_now); 
//           sortedshareinprofit.sort((a, b) => b.netprofit - a.netprofit); 
//           console.log(sortedshareinprofit);
//           console.log(sortedproductarray);
//           console.log(toinsertarray); 
//           setfrequencyarray(sortedproductarray);
//           setProductArray(toinsertarray); // Update productarray state with response data  
//           setshareinprofit(sortedshareinprofit);
//       }).catch((error) => {
//           console.error('Error fetching data:', error);
//       });
//     }
//     useEffect(() => { 
//        constructarray();
//     },[]);

//     return (
//         <div>
//             {/* Render your statistics using the productarray state */}   
//             <div>Frequency of products</div>
//             {frequencyarray.map((product,index)=>(<div > 
//                 <div style={{display:"grid",gridTemplateColumns:"250px 200px"}}>
//                 <div>Product name: {product.product_name}</div> 
//                 <div >Sold by now: {product.sold_by_now}</div>
//                 </div>

//             </div>))}    
//             <div style={{paddingBottom:"10px",paddingTop:"20px"}}>Share of products in profit</div>
//             {shareinprofit.map((product,index)=>(<div > 
//                 <div style={{display:"grid",gridTemplateColumns:"250px 200px"}}>
//                 <div>Product name: {product.product_name}</div> 
//                 <div >Net profit: {product.netprofit}</div>
//                 </div>

//             </div>))} 
//             <div style={{display:"grid",gridTemplateColumns:"200px 200px"}}></div>
//              <Piechartrepresentation shareinprofit = {shareinprofit}/>
//              <Barrepresentation frequencyarray = {frequencyarray}/>
            

//         </div>
//     );
// }

// export { Statistics }; 
// Inside your Statistics component file

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Piechartrepresentation } from './piechartrepresentation';
import { Barrepresentation } from './barrepresentation';
import './total_revenue_style.css'; // Import the CSS file

function Statistics(props) {
    const [productarray, setProductArray] = useState([]);
    const [frequencyarray, setFrequencyArray] = useState([]);
    const [shareinprofit, setShareInProfit] = useState([]);
    const headers = {
        'Content-Type': 'application/json'
    };
    let sortedproductarray = [];
    let sortedshareinprofit = [];

    function constructArray() {
        console.log(props.name);
        let tosend = { "name": props.name };
        axios.post('/see_all_products', tosend, { headers: headers }).then((response) => {
            console.log(response.data);
            let reply = response.data;

            let toInsertArray = [];
            for (let i = 0; i < reply.length; i++) {
                let toInsertObject = { 'product_name': reply[i].product_name, 'sold_by_now': reply[i].sold_by_now, 'selling_price': reply[i].selling_price, 'cost_price': reply[i].cost_price };
                let reducedObject = { 'sold_by_now': Number(reply[i].sold_by_now), 'product_name': reply[i].product_name };
                let profitOfProduct = (Number(reply[i].selling_price) - Number(reply[i].cost_price)) * (Number(reply[i].sold_by_now));
                let profitObject = { 'product_name': reply[i].product_name, 'netprofit': profitOfProduct };
                sortedshareinprofit.push(profitObject);
                sortedproductarray.push(reducedObject);
                toInsertArray.push(toInsertObject);
            }
            sortedproductarray.sort((a, b) => b.sold_by_now - a.sold_by_now);
            sortedshareinprofit.sort((a, b) => b.netprofit - a.netprofit);
            console.log(sortedshareinprofit);
            console.log(sortedproductarray);
            console.log(toInsertArray);
            setFrequencyArray(sortedproductarray);
            setProductArray(toInsertArray); // Update productarray state with response data  
            setShareInProfit(sortedshareinprofit);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        constructArray();
    }, []);

    return (
        <div className="container">
            {/* Render your statistics using the productarray state */}
            <div className="heading">Frequency of products</div>
            {frequencyarray.map((product, index) => (
                <div key={index} className="product-item">
                    <div className="product-details">
                        <div className="product-name">Product name:</div>
                        <div className="product-value">{product.product_name}</div>
                    </div>
                    <div className="product-details">
                        <div className="product-name">Sold by now:</div>
                        <div className="product-value">{product.sold_by_now}</div>
                    </div>
                </div>
            ))}
            <div className="heading">Share of products in profit</div>
            {shareinprofit.map((product, index) => (
                <div key={index} className="product-item">
                    <div className="product-details">
                        <div className="product-name">Product name:</div>
                        <div className="product-value">{product.product_name}</div>
                    </div>
                    <div className="product-details">
                        <div className="product-name">Net profit:</div>
                        <div className="product-value">{product.netprofit}</div>
                    </div>
                </div>
            ))}
            <div className="chart-container">
                <Piechartrepresentation shareinprofit={shareinprofit} />
                <Barrepresentation frequencyarray={frequencyarray} />
            </div>
        </div>
    );
}

export { Statistics };

