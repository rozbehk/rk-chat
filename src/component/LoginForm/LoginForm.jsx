import "./LoginForm.css"

export default function LoginForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit} className="login-form" id="login">
            <div className="login-form-wrapper">
                <h1 className="login-form-title">Login</h1>
                <input onChange={props.handleInput} value={props.state.email} className="login-form-username" id="email" type="text" placeholder="Email" required/>
                <input onChange={props.handleInput} value={props.state.password} className="login-form-password" id="password" type="password" placeholder="Password" required/>
                {props.state.message && <div>{props.state.message}</div>}
                <button className="login-form-button">Login</button>
                <div className="login-form-register" onClick={() => props.handleTab('register')}>
                    Don't Have an account? Register here
                </div>
            </div>
        </form>
    )
}