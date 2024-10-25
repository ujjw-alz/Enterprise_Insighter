import React from 'react';
import './delete_person_due_style.css'; // Importing the CSS file

function Deletepersonform(props) {
    return (
        <div className="delete-person-form">
            <input type="text" placeholder="Enter person's name" name="person_to_remove" />
            <button onClick={props.delete_person}>Remove person</button>
        </div>
    );
}

export { Deletepersonform };
