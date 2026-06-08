import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState([])
    const [error,setError]  = useState('')

    useEffect(()=>{
        async function fetchUser(){
            try {
                setLoading(true)
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
                const result = await response.json()
                setUsers(result)
            } catch (error) {
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }

        fetchUser()
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
                <td>id</td>
                <td>username</td>
                <td>email</td>
                <td>city</td>
            </tr>
        </thead>
        <tbody>
            {
                users.map((val)=><tr>
                    <td>{val.id}</td>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.address.city}</td>
                </tr>)
            }
        </tbody>
      </table>
    </div>
  )
}

export default UseEffect
