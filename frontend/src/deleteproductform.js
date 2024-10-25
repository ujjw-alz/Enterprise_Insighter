// import React, { useState } from 'react';
// import axios from 'axios'; 
// function Deleteproductform(props) { 
//     const headers = {
//         'Content-Type': 'application/json'
//       };  
//     const [formData, setFormData] = useState({
//         productName: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleDelete = () => {
//         // Handle delete product logic here using formData.productName
//         console.log(formData.productName); 
//         let tosend = {'name':props.name,'product_name':formData.productName};
//         // Reset the form after deletion  
//         console.log(tosend.name,tosend.product_name)
//         axios.post('/delete_product',tosend,{headers:headers}).then((response)=>{
//             console.log(response.data); 
//         }).catch((err)=>{
//             console.log(err);
//         })
//         setFormData({ productName: '' });
//     };

//     return (
//         <div>
//             <div>
//                 product name: <input type="text" name="productName" value={formData.productName} onChange={handleChange} />
//             </div>
//             <button onClick={handleDelete}>delete product</button>
//         </div>
//     );
// }

// export { Deleteproductform };
// Inside your Deleteproductform component file

import React, { useState } from 'react';
import axios from 'axios';
import './delete_product_form_style.css'; // Import the CSS file

function Deleteproductform(props) { 
    const headers = {
        'Content-Type': 'application/json'
    };  

    const [formData, setFormData] = useState({
        productName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDelete = () => {
        console.log(formData.productName); 
        let tosend = {'name':props.name,'product_name':formData.productName};
        axios.post('/delete_product',tosend,{headers:headers}).then((response)=>{
            console.log(response.data); 
        }).catch((err)=>{
            console.log(err);
        })
        setFormData({ productName: '' });
    };

    return (
        <div className="container">
            <div className="form-group">
                <label className="label">Product Name:</label>
                <input type="text" name="productName" className="input-field" value={formData.productName} onChange={handleChange} />
            </div>
            <button onClick={handleDelete} className="delete-button">Delete Product</button>
        </div>
    );
}

export { Deleteproductform };
