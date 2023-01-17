import { Component } from 'react';
import Chat from '../Chat/Chat';
import './App.css';
import Auth from '../Auth/Auth';
import { logOut } from '../../services/userServices';

export default class App extends Component {

  state = {
    user: null,
  }

  setUserInState = (user) =>{
    this.setState({user})
  }

  handleLogout = () => {
    logOut()
    this.setState({user: null})
  }

 async componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        token = null;
      } else { 
        let user = JSON.parse(atob(token.split(".")[1])).user
        this.setState({user})      
      }
    }
  }
  render() {

    return (
      <div>
        {!this.state.user ? (
          <Auth setUserInState={this.setUserInState}/>
        ) : (
          <Chat user={this.state.user} handleLogout={this.handleLogout}/>
        )}
        
      </div>
    );
  }
}
