import React from 'react'
import { useState } from 'react'

const UserForm = ({onFormSubmit}) => {
    const [firstName, setFirstName] =useState()
    const [lasstName, setLastName] =useState()
    
    const onSubmit =(e) =>{
        e.preventDefault()
        onFormSubmit(firstName,lasstName)
    }
return (
  <form onSubmit={onSubmit}>
        <input 
            type='text' 
            placeholder='firstName' 
            onChange={e => setFirstName(e.target.value)}
        />
        <input 
            type='text' 
            placeholder='lastName' 
            onChange={e => setLastName(e.target.value)}
        />
        <button>Submit</button>
  </form>
  )
}

export default UserForm