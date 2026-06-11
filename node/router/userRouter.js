import express from 'express'
const router = express.Router()

router.use((req,res,next)=>{
    console.log('user router logger')
    console.log(`Request path is ${req.url} and Request method is ${req.method}`)
    next()
})

router.get('/:userId',(req,res)=>{
    if(!req.params.userId){
        res.send('userId not provided')
        return
    }

    const userId = req.params.userId

    if(userId){
        res.send(`${userId} is retrieved successfully`)
        return
    }
})

export default router