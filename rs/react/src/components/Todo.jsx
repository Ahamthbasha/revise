import React, { useEffect, useReducer, useState } from 'react'

const Todo = () => {

    const initialState = {
        tasks:[]
    }

    const getInitialState = ()=>{
        const tasks = localStorage.getItem('todo')
        return JSON.parse(tasks) || initialState
    }
    
    
    const reducerFn = (state=initialState,action)=>{
        switch(action.type){
            case 'ADDTODO':
                return {...state,tasks:[...state.tasks,{id:Date.now(),task:action.payload,completed:false,editStatus:false,editValue:action.payload}]}
            case 'COMPLETETODO':
                return {...state,tasks:state.tasks.map((val)=>val.id == action.payload ? {...val,completed:true} : val)}
            case 'DELETETODO':
                return {...state,tasks:state.tasks.filter((val)=>val.id != action.payload)}
            case 'EDITSTATUS':
                return {...state,tasks:state.tasks.map((val)=>val.id == action.payload ? {...val,editStatus:true} : val)}
            case 'EDITEDVALUE':
                return {...state,tasks:state.tasks.map((val)=>val.id == action.payload.taskId ? {...val,editValue:action.payload.editedText}:val)}
            case 'UPDATE':
                return {...state,tasks:state.tasks.map((val)=>val.id == action.payload ? {...val,task:val.editValue,editStatus:false}:val)}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducerFn,getInitialState())

    const [input,setInput] = useState('')

    useEffect(()=>{
        localStorage.setItem('todo',JSON.stringify(state))
    },[state])

    const addTodo = ()=>{
        if(input.trim().length == 0){
            alert("empty")
            return
        }
        
        dispatch({
            type:'ADDTODO',
            payload:input
        })

        setInput('')
    }

    const todoComplete = (taskId)=>{
        dispatch({
            type:"COMPLETETODO",
            payload:taskId
        })
    }

    const deleteToDo = (taskId)=>{
        dispatch({
            type:'DELETETODO',
            payload:taskId
        })
    }

    const editStatus = (taskId)=>{
        dispatch({
            type:'EDITSTATUS',
            payload:taskId
        })
    }

    const update = (taskId)=>{
        dispatch({
            type:'UPDATE',
            payload:taskId
        })
    }


  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

      <button onClick={addTodo}>Add To Do</button>

      <h1>Todo list</h1>

      <ul>
        {
            state.tasks.map((val)=>{
                return (<div key={val.id}>
                    <li>{val.task}</li>
                    {val.completed == true ? 'completed' : <button onClick={()=>{todoComplete(val.id)}}>complete</button>}
                    <button onClick={()=>deleteToDo(val.id)}>Delete</button>
                    {
                        val.editStatus == true ? (<div>
                            <input type="text" value={val.editValue} onChange={(e)=>dispatch({type:'EDITEDVALUE',payload:{taskId:val.id,editedText:e.target.value}})}  />
                            <button onClick={()=>update(val.id)}>update</button>
                        </div>) : (<><button onClick={()=>editStatus(val.id)}>Edit</button></>)
                    }
                </div>)
            })
        }
      </ul>
    </div>
  )
}

export default Todo
