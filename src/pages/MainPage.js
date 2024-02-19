import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import useRequest from '../hooks/useRequest'
import { useUsersContext } from '../contexts/UsersContext'
import { useThemeContext } from '../contexts/ThemeContext'
import { themeOptions } from '../contexts/ThemeContext'

const MainPage = () => {
  const {userList, dataLoading, deleteLoading, onDelete} = useUsersContext()
  const {theme} =useThemeContext()

  if(dataLoading || deleteLoading) return <p>loading ...</p>
 

  return (
    <div className="App"> 
      {userList.map((user)=> <div key={user.id} style={{border:"1px solid grey"}}>  
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <Link to={`/update/${user.id}`}>Edit</Link>
          <button onClick={() => onDelete (user.id)}>Delete</button>
        </div>)}
        <p>{themeOptions[theme]}</p>
    </div>
  )
}

export default MainPage