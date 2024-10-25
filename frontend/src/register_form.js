import './register_form.css';
function Register_form(props){
    return (
        <div className="register-form-container" style={{marginTop:"15px"}}>
            <form onSubmit={props.handleregister}>
        <label htmlFor="name">First name:</label><br/>
        <input type="text" id="name" name="name" onChange={props.nameonchange} /><br/>
       <label htmlFor="password">Password:</label><br/>
       <input type="text" id="password" name="password" onChange={props.passwordonchange} /><br/><br/>
       <input type="submit" value="Submit"/>
       </form> 
        </div>
    );
} 
export {Register_form};