import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchUser from '../redux/asyncTasks/userFetch'

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
         <ul>
            {
                users.map((val)=>{
                    return(
                        <>
                        <li>id:{val.id}</li>
                        <li>username:{val.username}</li>
                        </>
                    )
                })
            }
        </ul>     
    </div>
  )
}

export default User
