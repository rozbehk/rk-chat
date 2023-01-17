import { Component } from "react";
import "./Chat.css"
import ChatList from "../../component/ChatList/ChatList";
import ChatBox from "../../component/ChatBox/ChatBox";
import UserDetail from "../../component/UserDetail/UserDetail";
import { getAllUsers } from "../../services/userServices";
import AllUsers from "../../component/AllUsers/AllUsers";

export default class Chat extends Component {
    state = {
        allUsers: {},
        message: ''
    }

    componentDidMount = async () => {
        const allUsers = await getAllUsers()
        this.setState({ allUsers: await allUsers.json() })
    }

    hansleChat = (senderId,reciverId,chatId) => {
        
    }



    render() {
        return (
            <div className="chat">
                <div className="chat-menu">
                    <div className="chat-menu-wrapper">
                        <UserDetail user={this.props.user} handleLogout={this.props.handleLogout} />
                        <div className="chat-menu-search">
                            <input type="text" placeholder="Search for users" className="chat-menu-input" />
                        </div>
                        <ChatList />
                        <ChatList />
                        <ChatList />
                        <ChatList />
                        <ChatList />
                    </div>
                </div>
                <div className="chat-main">
                    <div className="chat-main-wrapper">
                        <div className="chat-main-top ">
                            <ChatBox text={this.state.text}/>
                        </div>
                    </div>
                </div>
                <div className="chat-user-online">
                    <div className="chat-online-wrapper">
                        {this.state.allUsers && (
                            this.state.allUsers.length ? (
                                this.state.allUsers.map(user =>
                                    <AllUsers user={user} />
                                )
                            ) : (
                                <div className="container mb-2">
                                    <div className="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
                                        <h1 className="fw-bold mb-2">No user found</h1>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                </div>
            </div>
        )
    }
}