
import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
const API_KEY ='r40WaT-TETOhkQyjJTnVvun-Fv4mjixg9_s9z1GwO1R9bZFSAg'

function App() {
  const [userList, setUserList]=useState([])
  useEffect(()=>{
    fetch('/api/v1/users',{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    }).then(res => {
      if(!res.ok) throw new Error("Respond Failed")
      return res.json() 
    })
    .then(data => setUserList(data.items.map(user => {
      return{
        firstName: data.items[0].firstName,
        lastName: data.items[0].lastName,
        id: data.items[0]._uuid
      }
    })))
    .catch(err => console.log(err))
  },[])
  const getUsers = () =>{
    fetch('/api/v1/users',{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    }).then(res => {
      if(!res.ok) throw new Error("Respond Failed")
      return res.json() 
    })
    .then(data => setUserList(data.items.map(user => {
      return{
        firstName: data.items[0].firstName,
        lastName: data.items[0].lastName,
        id: data.items[0]._uuid
      }
    })))
    .catch(err => console.log(err))
  }
  const onFormSubmit = (firstName, lastName) => {
      fetch('/api/v1/users',{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify([{firstName,lastName}])
      })
      .then(res => {
        if(!res.ok) throw new Error("Respond Failed")
        return res.json() 
      })
      .then(data => setUserList((prev)=> [...prev, {
        firstName: data.items[0].firstName,
        lastName: data.items[0].lastName,
        id: data.items[0]._uuid
      }]))
      .catch(err => (console.log(err)))
  }
  return (
    <div className="App">
        <UserForm onFormSubmit={onFormSubmit} />
        <button onClick={getUsers}>
          Get Users
        </button>
        <button onClick={() => setUserList([])}>
          Clear Users
        </button>
        {userList.map((user)=> 
        <div key={user.id} style={{border:"1px solid grey"}}>  
          <h3>
            {user.firstName}
          </h3>
          <h3>
            {user.lastName}
          </h3>
        </div>)}
    </div>
  );
}

export default App;
