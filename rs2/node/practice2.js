process.on('message',(msg)=>{
    console.log('parent message',msg)
    process.send("hello parent")
})