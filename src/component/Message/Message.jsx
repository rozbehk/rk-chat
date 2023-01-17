import './Message.css'

export default function Message(props) {
    return (
        <div>
            {props.self ? (
                <div className='message-self'>
                    <div className="message-top">
                        <div className='message-txt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio unde debitis reiciendis deserunt error? Cum deserunt ipsam ut illo fugit. Sunt magnam impedit necessitatibus quia rerum repellendus sit deserunt accusantium?</div>
                    </div>
                    <div className="message-bottom">1 hour ago</div>
                </div>

            ) : (
                <div className='message'>
                    <div className="message-top">
                        <img className='message-img' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                        <div className='message-txt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio unde debitis reiciendis deserunt error? Cum deserunt ipsam ut illo fugit. Sunt magnam impedit necessitatibus quia rerum repellendus sit deserunt accusantium?</div>
                    </div>
                    <div className="message-bottom">1 hour ago</div>
                </div>
            )}
        </div>
    )
}