import './AllUsers.css'

export default function AllUsers(props){
    return(
        <div className="all-users">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="all-users-image" />
            <span className="all-users-text">{props.user.firstname} {props.user.lastname}</span>
        </div>
    )
}