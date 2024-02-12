import React from 'react'
import useFetch from '../hooks/useFetch'

const MainPages = () => {
  const {response, error, loading} =useFetch({url: '/api/v1/users', method: "GET" })
  const userList = response?.items.map(user => {
    return{
      firstName: user.firstName,
      lastName: user.lastName,
      id: user._uuid
    } 
  }) || []

  if(loading) return <p>loading ...</p>
  if(error) return <p>{error.message}</p> 


  return (
    <div className="App"> 
      {userList.map((user)=> <div key={user.id} style={{border:"1px solid grey"}}>  
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
        </div>)}
    </div>
  )
}

export default MainPages