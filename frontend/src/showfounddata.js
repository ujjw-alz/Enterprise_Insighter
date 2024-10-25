function Showfounddata(props){
    return (
        <div>
             <div>product name: {props.product_name}</div> 
             <div>quantity: {props.quantity}</div> 
             <div>sold by now: {props.sold_by_now}</div> 
             <div>cost price: {props.cost_price}</div> 
             <div>selling price: {props.selling_price}</div> 
             <div>tags:{props.tags.map((tag,index)=>(<div style={{display:'inline'}}>{tag} </div>))}</div>

        </div>
    );
}; 
export {Showfounddata};