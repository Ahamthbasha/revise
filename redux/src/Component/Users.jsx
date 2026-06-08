import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFetch } from '../store/actions/userActions'

const Users = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userFetch())
    },[])
    const {loading,users,error} = useSelector((state)=>state.user)

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    <div>
    <h1>Users List</h1>
    <ul>
        {
            users.map((val)=>{
                return(
                    <>
                    <li>id : {val.id}</li>
                    <li>name:{val.name}</li>
                    <li>username:{val.usersname}</li>
                    </>
                )
            })
        }    
    </ul>  
    </div>
  )
}

export default Users
