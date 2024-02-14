import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import useRequest from '../hooks/useRequest'

const MainPages = () => {
  const {sendRequest} = useRequest({method :'DELETE'})
  const {response, error, loading} =useFetch({url:'/api/v1/users', method: "GET" })
  const userList = response?.items.map(user => {
    return{
      firstName: user.firstName,
      lastName: user.lastName,
      id: user._uuid
    } 
  }) || []

  if(loading) return <p>loading ...</p>
  if(error) return <p>{error.message}</p> 
  

  const onDelete = (userId) => {
    sendRequest(null, `/api/v1/users${userId}`)
  }

  return (
    <div className="App"> 
      {userList.map((user)=> <div key={user.id} style={{border:"1px solid grey"}}>  
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <Link to={`/update/${user.id}`}>Edit</Link>
          <button onClick={() => onDelete (user.id)}>Delete</button>
        </div>)}
    </div>
  )
}

export default MainPages