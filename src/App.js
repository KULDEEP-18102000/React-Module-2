import React,{useState} from 'react';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';

function App() {

  const [users,setUsers]=useState([])

  const AddUserHandler=(user)=>{
    console.log(user)
    setUsers((prevState)=>{
      return [user,...prevState]
    })

  }

  return (
    <div>
      <UserForm onAddUser={AddUserHandler}/>
      <div className='container'>
      <UserList users={users}/>
      </div>
    </div>
  );
}

export default App;
