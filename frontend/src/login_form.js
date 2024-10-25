import"./login_form.css"
function Login_form(props){
    return (
        <div className="login-form-container">
        <div>Login page</div> 
        <form onSubmit={props.handlelogin}>
        <label htmlFor="name">First name:</label><br/>
        <input type="text" id="name" name="name" onChange={props.nameonchange}/><br/>
       <label htmlFor="password">Password:</label><br/>
       <input type="text" id="password" name="password" onChange={props.passwordonchange}/><br/><br/>
       <input type="submit" value="Submit"/> 
       </form>
    </div>);
} 
export {Login_form};