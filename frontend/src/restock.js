// import React, { useState } from 'react';
// import axios from 'axios';
// function Manipulatequantityform(props) {
//     const [formData, setFormData] = useState({
//         productName: '',
//         quantitySold: 0
//     });
//     const headers = {
//         'Content-Type': 'application/json'
//       };
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: name === 'quantitySold' ? Number(value) : value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault(); 
        
//         // Handle form submission, for example:
//         console.log(formData); // Logging form data
//         // Reset form after submission   
        
//         let tosend = {'name':props.name,'product_name':formData.productName,'quantity_sold':Number(formData.quantitySold)};
//         axios.put('/manipulate_quantity',tosend,{headers:headers}).then((response)=>{
//             console.log(response.data);
//         }).catch((err)=>{
//             console.log(err);
//         })
//         setFormData({
//             productName: '',
//             quantitySold: ''
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="productName">product name: </label>
//                 <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} />
//             </div>
//             <div>
//                 <label htmlFor="quantitySold">quantity sold: </label>
//                 <input type="number" id="quantitySold" name="quantitySold" value={formData.quantitySold} onChange={handleChange} />
//             </div>
//             <button type="submit">Make Change</button>
//         </form>
//     );
// }

// export { Manipulatequantityform };
// Inside your Manipulatequantityform component file

import React, { useState } from 'react';
import axios from 'axios';
import './manipulate_quantity_form_style.css'; // Import the CSS file

function Restockform(props) {
    const [formData, setFormData] = useState({
        productName: '',
        quantitySold: 0
    });
    const [replies,setreplies] = useState('');
    function timeout(){
        setTimeout(() => {
            setreplies('');
        }, 1000); 
    }
    const headers = {
        'Content-Type': 'application/json'
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: name === 'quantitySold' ? Number(value) : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Handle form submission, for example:
        console.log(formData); // Logging form data

        // Reset form after submission
        let tosend = {'name': props.name, 'product_name': formData.productName, 'quantity_sold': Number(formData.quantitySold)};
        axios.put('/restock', tosend, {headers: headers}).then((response) => {
            console.log(response.data);
            setreplies(response.data); 
            timeout();
        }).catch((err) => {
            console.log(err);
        });
        
        setFormData({
            productName: '',
            quantitySold: ''
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productName" className="label">Product Name:</label>
                    <input type="text" id="productName" name="productName" className="input-field" value={formData.productName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="quantitySold" className="label">Quantity Sold:</label>
                    <input type="number" id="quantitySold" name="quantitySold" className="input-field" value={formData.quantitySold} onChange={handleChange} />
                </div>
                <button type="submit" className="submit-button">Make Change</button>
            </form>  
            <br />
            {
                  replies===''?<div></div>:<div style={{backgroundColor:'red',display:'inline-block',padding:'10px 10px',minWidth:'0px',color:'white',borderRadius:"10px",borderColor:'white',borderWidth:'1px',marginBottom:"10px"}}>{replies}
                  </div>}  
                  <br />
        </div>
    );
}

export { Restockform };