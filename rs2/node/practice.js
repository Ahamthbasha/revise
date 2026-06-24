// // import fs from 'fs'

// // const writeStream = fs.createWriteStream('write.txt')

// // writeStream.write('peddi is a good movie')

// // writeStream.end('\none life')

// // writeStream.on('close',()=>{
// //     console.log('writing finished')
// // })

// // writeStream.on('error',(e)=>{
// //     console.log(e)
// // })


// // import fs from 'fs'

// // const read = fs.createReadStream('write.txt')

// // read.on('data',(chunk)=>{
// //     console.log(chunk.toString())
// // })

// // read.on('end',()=>{
// //     console.log("reading finished")
// // })

// // read.on('error',(er)=>{
// //     console.log(er)
// // })

// // import {Duplex} from 'stream'

// // class MyDuplex extends Duplex{
// //     constructor(){
// //         super()
// //         this.data = ''
// //     }

// //     _write(chunk,encoding,callback){
// //         this.data += chunk.toString()
// //         callback()
// //     }

// //     _read(){
// //         this.push(this.data)
// //         this.push(null)
// //     }
// // }

// // const d = new MyDuplex()

// // d.write("hello ji how are you hope you doing good")

// // d.end("writing done")

// // d.on('finish',()=>{
// //     console.log("writing finished")
// // })

// // d.on('data',(chunk)=>{
// //     console.log(chunk.toString())
// // })

// // d.on('close',()=>{
// //     console.log('closed')
// // })

// // d.on('error',(er)=>{
// //     console.log(er)
// // })


// import {Transform} from 'stream'
// import fs from 'fs'
// class MyTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         let data = chunk.toString().toUpperCase()
//         this.push(data)
//         callback()
//     }
// }

// const t = new MyTransform()
// const read = fs.createReadStream('write.txt')
// const write = fs.createWriteStream('transform.txt')

// read
// .pipe(t)
// .pipe(write)
// .on('finish',()=>{
//     console.log("finished")
// })


import {exec, execFile, spawn,fork} from 'child_process'


// exec('dir',((error,stderr,stdout)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// }))

// execFile('node',['practice2.js'],((error,stderr,stdout)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// }))

// const c = spawn('cmd.exe',['/c','dir'])

// c.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// c.stderr.on('error',(e)=>{
//     console.log(e)
// })

const p = fork('practice2.js')

p.send("hello child")

p.on('message',(msg)=>{
    console.log("child message",msg)
})