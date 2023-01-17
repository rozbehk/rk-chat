import { Component } from "react";
import LoginForm from "../../component/LoginForm/LoginForm";
import RegisterForm from "../../component/RegisterForm/RegisterForm";
import { login, register } from "../../services/userServices";



export default class Auth extends Component {
    state = {
        authTab: 'login',
        firstname: 'roozbeh',
        lastname: 'karimi',
        email: 'roozbeh.karimi@gmail.com',
        password: '1234',
        verifyPassword: '1234',
        message: '',
        user: ''
    }

    

    handleFormSubmit = async (evt) => {
        evt.preventDefault()
        if (evt.target.id === 'login') {
            let body = {
                email: this.state.email,
                password: this.state.password
            }
            let response = await login(body)
            if (!response.ok) {
                this.setState({ message: await response.json() })
                return
            }
            let responseData = await response.json()
            localStorage.setItem("token", await responseData);
            let user = JSON.parse(atob(await responseData.split(".")[1])).user;
            this.props.setUserInState(user);
        }
        if (evt.target.id === 'register') {
            let body = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            }
            let response = await register(body)
            if (!response.ok) {
                this.setUserInState({ message: await response.json() })
                return
            }
            let responseData = await response.json()
            localStorage.setItem("token", await responseData);
            let user = JSON.parse(atob(await responseData.split(".")[1])).user;
            this.props.setUserInState(user);
        }

    }

    handleInput = (evt) => {
        this.setState({ [evt.target.id]: evt.target.value })
    }

    handleTab = (value) => {
        this.setState({ authTab: value })
    }


    render() {
        return (
            <>
                {this.state.authTab === 'login' && <LoginForm handleTab={this.handleTab} handleFormSubmit={this.handleFormSubmit} handleInput={this.handleInput} state={this.state} />}
                {this.state.authTab === 'register' && <RegisterForm handleTab={this.handleTab} handleFormSubmit={this.handleFormSubmit} handleInput={this.handleInput} state={this.state} />}
            </>
        )
    }
}