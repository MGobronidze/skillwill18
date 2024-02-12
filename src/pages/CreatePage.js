import React from 'react'
import UserForm from '../components/UserForm'
import useRequest from '../hooks/useRequest'
import { useNavigate } from 'react-router'

const CreatePage = () => {
    const {sendRequest, loading} = useRequest({url: '/api/v1/users', method: "POST" })
    const navigate =useNavigate()
    const onSubmit = (firstName, lastName) => {
         sendRequest([{firstName, lastName}])
         .then(() => navigate('/'))
         .catch(err => console.log(err))
    } 
    if(loading) return <p> loading ...</p>
  return (
    <div>
        <UserForm onFormSubmit={onSubmit} />
    </div>
  )
}

export default CreatePage