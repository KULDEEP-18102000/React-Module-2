import React,{useState} from "react";
import UserItem from "./UserItem";

function UserList(props){

    const users=props.users
    console.log(users)


    return(
        <div className="container">
            {users.map((user)=><UserItem key={user.id} name={user.name} age={user.age}/>)}
        </div>
    )
}

export default UserList