import { PromiseProvider } from 'mongoose'
import './UserDetail.css'

export default function UserDetail(props) {
    return (
        <>
            <div className="user-detail">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="user-detail-image" />
                    <span className="user-detail-text">{props.user.firstname} {props.user.lastname}</span>
                </div>
            </div>
            <span onClick={props.handleLogout} className='user-detail-logout'>Logout</span>
        </>
    )
}