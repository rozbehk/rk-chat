import "./RegisterForm.css"

export default function RegisterForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit} className="register-form" id="register">
            <div className="register-form-wrapper">
                <h1 className="register-form-title">Register</h1>
                <input onChange={props.handleInput} value={props.state.firstname} className="register-form-username" id="firstname" type="text" placeholder="First Name" required/>
                <input onChange={props.handleInput} value={props.state.lastname} className="register-form-username" id="lastname" type="text" placeholder="Last Name" required/>
                <input onChange={props.handleInput} value={props.state.email} className="register-form-username" id="email" type="email" placeholder="Email" required/>
                <input onChange={props.handleInput} value={props.state.password} className="register-form-password" id="password" type="password" placeholder="Password" required/>
                <input onChange={props.handleInput} value={props.state.verifyPassword} className="register-form-password" id="verifyPassword" type="password" placeholder="Verify Password" required/>
                {props.state.message && <div>{props.state.message}</div>}
                <button className="register-form-button">Register</button>
                <div className="register-form-register" onClick={() => props.handleTab('login')}>
                    Have an account? Login here
                </div>
            </div>
        </form>
    )
}