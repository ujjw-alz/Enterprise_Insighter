// function Insertpersonform(props){
//     return (
//          <div> 
            
//             <input type="text" name="person_name" placeholder={"enter "+ props.field1} onChange={props.nameonchange}/> 
//             <input type="number" name="amount_due" placeholder ={"enter "+props.field2} onChange={props.amountonchange}/> 
//             <button onClick={props.insertperson}>{props.typeofoperation}</button>
//          </div>
//     )
// } 
// export {Insertpersonform}; 
import React from 'react';
import './insert_person_form.css'; // Importing the CSS file

function Insertpersonform(props) {
    return (
        <div className="insert-person-form">
            <input type="text" name="person_name" placeholder={"Enter " + props.field1} onChange={props.nameonchange} />
            <input type="number" name="amount_due" placeholder={"Enter " + props.field2} onChange={props.amountonchange} />
            <button onClick={props.insertperson}>{props.typeofoperation}</button>
        </div>
    );
}

export { Insertpersonform };
