import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk('fetch/user',async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            return 
        }

        const result = await response.json()

        return result
})

export default fetchUser