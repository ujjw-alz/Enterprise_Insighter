// import './show_dues_style.css';
// function Showdues(props){ 

//     return ( 
//         <div>
//         { 
            
//             props.renderseealldues.map((dues,index)=>( 
//                 <div>
//                   <div>person name: {dues.person_name}</div> 
//                    <div>amount due: {dues.amount_due}</div>

//                 </div>
                
//             ))
//         }


//         </div>
        
//     );
// } 
// export {Showdues}; 
import React from 'react';
import './show_dues_style.css'; // Importing the CSS file

function Showdues(props) {
    return (
        <div className="due-container">
            {props.renderseealldues.map((dues, index) => (
                <div className="due-item" key={index}>
                    <div className="person-name">Person Name: {dues.person_name}</div>
                    <div className="amount-due">Amount Due: {dues.amount_due}</div>
                </div>
            ))}
        </div>
    );
}

export { Showdues };
