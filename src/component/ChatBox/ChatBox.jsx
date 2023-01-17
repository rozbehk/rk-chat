import "./ChatBox.css"
import Message from "../Message/Message"

export default function ChatBox(){
    return(
        <div className="chat-box">
            <div className="chat-box-wrapper">
                <div className="chat-box-top">
                    <Message self={true}/>
                    <Message />
                    <Message self={true}/>
                    <Message />
                    <Message />
                </div>
                <div className="chat-box-bottom">
                    <textarea className="chat-box-input" name="input-message" placeholder="Write something"></textarea>
                    <button className="chat-box-button">SEND</button>
                </div>
            </div>
        </div>
    )
}