import fs from 'fs'
// const readStream = fs.createReadStream('peddi.txt')

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readStream.on('end',()=>{
//     console.log('read ended')
// })

// readStream.on('error',(err)=>{
//     console.log(err)
// })

// const writeStream = fs.createWriteStream('peddi2.txt')

// writeStream.write("hello marmadesam vidathu karuppu")

// writeStream.end("\nwriting ended")

// writeStream.on('close',()=>{
//     console.log('writing done')
// })

// writeStream.on('error',(err)=>{
//     console.log(err)
// })

// import { Duplex } from 'stream'

// class MyDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ''
//     }

//     _write(chunk,encoding,callback){
//         this.data += chunk.toString()
//         callback()
//     }

//     _read(){
//         this.push(this.data)
//         this.push(null)
//     }

// }

// const d = new MyDuplex()

// d.write("hello basha ji")

// d.end('how are you')

// d.on('finish',()=>{
//     console.log('writing completed')
// })

// d.on('error',(err)=>{
//     console.log(err)
// })

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// d.on('end',()=>{
//     console.log("reading done")
// })

// d.on('error',(err)=>{
//     console.log("reading error",err)
// })

// d.on('finish', () => {
//     console.log('writing done');
// });

// d.resume()

// d.on('end', () => {
//     console.log('reading done');
// });

// d.on('close', () => {
//     console.log('stream closed');
// });


// import { Transform } from 'stream'

// class MyTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         let data = chunk.toString().toUpperCase()
//         this.push(data)
//         callback()
//     }
// }

// const t = new MyTransform()

// const read = fs.createReadStream('peddi.txt')

// const write = fs.createWriteStream('peddi3.txt')

// read
// .pipe(t)
// .pipe(write)
// .on('finish',()=>{
//     console.log("transformation completed")
// })

// .on('close',()=>{
//     console.log('cleaned up')
// })

//////////////////////////////////////////////////////

import { exec, execFile, spawn,fork } from 'child_process'

// exec('dir',(error,stderr,stdout)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// })

// execFile('node',['practice2.js'],(error,stderr,stdout)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// })

// const cp = spawn('cmd.exe',['/c','dir'])

// cp.stderr.on('error',(err)=>{
//     console.log(err)
// })

// cp.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const p = fork('practice2.js')

// p.on('message',(msg)=>{
//     console.log('childMessage',msg)
// })

// p.send('hello child')

//block by req header

import express from 'express'

const app = express()

app.use((req,res,next)=>{
    if(req.headers['name'] == 'env'){
        res.send('this header value is unauthorized')
        return
    }
    next()
})

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("server is running")
})