// import React, { useState } from 'react';
// import axios from 'axios';

// function Insertproductform(props) { 
//     const headers = {
//         'Content-Type': 'application/json'
//     };

//     const [product, setProduct] = useState({
//         product_name: '',
//         quantity: 0,
//         sold_by_now: 0,
//         cost_price: 0,
//         selling_price: 0,
//         tags: []
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         // Convert value to number if the field name matches the numeric fields
//         const numericFields = ['quantity', 'sold_by_now', 'cost_price', 'selling_price'];
//         const newValue = numericFields.includes(name) ? Number(value) : value;

//         setProduct(prevProduct => ({
//             ...prevProduct,
//             [name]: newValue
//         }));
//     };

//     const handleTagsChange = (e) => {
//         const tagsValue = e.target.value.split(',');
//         setProduct(prevProduct => ({
//             ...prevProduct,
//             tags: tagsValue
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(product); // You can perform further actions here, like sending data to the server  
//         let tosend = {'name':props.name,'product_details':product}
//         // Reset form fields after submission 
//         axios.post('/insert_product',tosend,{headers:headers}).then((response)=>{
//             console.log(response.data);
//         }).catch((err)=>{
//             console.log(err);
//         });
        
//         setProduct({
//             product_name: '',
//             quantity: 0,
//             sold_by_now: 0,
//             cost_price: 0,
//             selling_price: 0,
//             tags: []
//         });
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>product name: <input type="text" name="product_name" placeholder="enter product name" value={product.product_name} onChange={handleChange} /></div>
//                 <div>quantity: <input type="number" name="quantity" value={product.quantity} onChange={handleChange} /></div>
//                 <div>sold_by_now: <input type="number" name="sold_by_now" value={product.sold_by_now} onChange={handleChange} /></div>
//                 <div>cost price: <input type="number" name="cost_price" value={product.cost_price} onChange={handleChange} /></div>
//                 <div>selling price: <input type="number" name="selling_price" value={product.selling_price} onChange={handleChange} /></div>
//                 <div>tags: <input type="text" name="tags" value={product.tags} onChange={handleTagsChange} /></div>
//                 <button type="submit">Insert</button>
//             </form>
//         </div>
//     );
// }

// export { Insertproductform };
// Inside your Insertproductform component file

import React, { useState } from 'react';
import axios from 'axios';
import './insert_product_form_style.css';

function Insertproductform(props) { 
    const headers = {
        'Content-Type': 'application/json'
    };

    const [product, setProduct] = useState({
        product_name: '',
        quantity: 0,
        sold_by_now: 0,
        cost_price: 0,
        selling_price: 0,
        tags: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Convert value to number if the field name matches the numeric fields
        const numericFields = ['quantity', 'sold_by_now', 'cost_price', 'selling_price'];
        const newValue = numericFields.includes(name) ? Number(value) : value;

        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: newValue
        }));
    };

    const handleTagsChange = (e) => {
        const tagsValue = e.target.value.split(',');
        setProduct(prevProduct => ({
            ...prevProduct,
            tags: tagsValue
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product); // You can perform further actions here, like sending data to the server  
        let tosend = {'name':props.name,'product_details':product}
        // Reset form fields after submission 
        axios.post('/insert_product',tosend,{headers:headers}).then((response)=>{
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        });
        
        setProduct({
            product_name: '',
            quantity: 0,
            sold_by_now: 0,
            cost_price: 0,
            selling_price: 0,
            tags: []
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label">Product Name:</label>
                    <input type="text" name="product_name" className="input-field" placeholder="Enter product name" value={product.product_name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="label">Quantity:</label>
                    <input type="number" name="quantity" className="input-field" value={product.quantity} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="label">Sold by now:</label>
                    <input type="number" name="sold_by_now" className="input-field" value={product.sold_by_now} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="label">Cost Price:</label>
                    <input type="number" name="cost_price" className="input-field" value={product.cost_price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="label">Selling Price:</label>
                    <input type="number" name="selling_price" className="input-field" value={product.selling_price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="label">Tags:</label>
                    <input type="text" name="tags" className="tags-input" placeholder="Enter tags (comma-separated)" value={product.tags} onChange={handleTagsChange} />
                </div>
                <button type="submit" className="submit-button">Insert</button>
            </form>
        </div>
    );
}

export { Insertproductform };
