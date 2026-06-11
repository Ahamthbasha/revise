// console.log("Mollywood Times")

process.on('message',(msg)=>{
    console.log('child',msg)
    process.send("hi parent")
})