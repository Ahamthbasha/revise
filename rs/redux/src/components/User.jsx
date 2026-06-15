import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/actions/userAction'

const User = () => {
    const {loading,users,error} = useSelector((state)=>state.user)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUser())
    },[])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    <div>
    <h1>User List</h1>
    <table border='1'>
    <thead>
        <tr>
            <td>Id</td>
            <td>userName</td>
            <td>Email</td>
        </tr>
    </thead>
    <tbody>
        {
            users.map((val)=>(
                <tr>
                    <td>{val.id}</td>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                </tr>
            ))
        }
    </tbody>
    </table>  
    </div>
  )
}

export default User
