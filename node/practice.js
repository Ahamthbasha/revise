// // file operation

// // import fs from 'fs'

// // fs.writeFile('youth.txt','good movie to watch',(err)=>{
// //     if(err){
// //         console.log(err)
// //     }

// //     console.log("writing completed")
// // })

// // fs.readFile('youth.txt','utf-8',(err,data)=>{
// //     if(err){
// //         console.log(err)
// //     }

// //     if(data){
// //         console.log(data)
// //     }
// // })

// // fs.rename('youth.txt','peddi.txt',(err)=>{
// //     if(err){
// //         console.log(err)
// //     }

// //     console.log("file renamed")
// // })

// // const exists = fs.existsSync('youth.txt')

// // console.log(exists)

// // get data by terminal

// // function greet(name){
// //     return `hi ${name}`
// // }

// // console.log(greet(process.argv[2]))

// //write date in 10 files

// // for(let i=1;i<=10;i++){
// //     fs.writeFile(`file${i}.txt`,new Date().toString(),(err)=>{
// //         if(err){
// //             console.log(err)
// //         }
// //     })

// //     console.log(`writing ${i} completed`)
// // }


// // import fs from 'fs/promises'

// // async function read(){
// //     try {
// //         const response = await fs.readFile('peddi.txt','utf-8')
// //         console.log(response)
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }

// // read()

// // fs.appendFile('peddi.txt','\n super editor',(err)=>{
// //     if(err){
// //         console.log(err)
// //     }
// //     console.log('appended')
// // })


// // fs.unlink('file1.txt',(err)=>{
// //     if(err){
// //         console.log(err)
// //     }

// //     console.log("deleted")
// // })

// //read and count

// // fs.readFile('peddi.txt','utf-8',(err,data)=>{
// //     if(err){
// //         console.log(err)
// //     }

// //     if(data.length == 0){
// //         console.log('no of words will be',0)
// //     }else{
// //         let words = data.split(/\s+/)
// //         let lines = data.split('\n')
// //         console.log('no of words',words.length)
// //         console.log('no of lines',lines.length)
// //     }
// // })

// // async function execute(fileName){
// //     const checkFile = fs.existsSync(fileName)

// //     if(checkFile){
// //         const result = await fs.readFile(fileName,'utf-8')
// //         console.log(result)
// //     }else{
// //         fs.writeFile(fileName,"filte created",(err)=>{
// //             if(err){
// //                 console.log(err)
// //             }
// //         })
// //     }
// // }

// // execute(process.argv[2])

// // import fs from 'fs/promises'

// // let files = ['peddi.txt','dhurandhar.txt']

// // async function read(files){
// //     for(let i=0;i<files.length;i++){
// //         const response = await fs.readFile(files[i],'utf-8')
// //         console.log(response)
// //     }
// // }

// // read(files)


// // read file from the currentDir

// // import fs from 'fs/promises'
// // import path from "path"
// // import { fileURLToPath } from 'url'

// // async function readCurrentDir(){
// //     const curFile = fileURLToPath(import.meta.url)
// //     let curDir = path.dirname(curFile)

// //     let files =await fs.readdir(curDir)
    
// //     let curFiles = files.filter((val)=>val.includes('.txt'))

// //     for(let i=0;i<curFiles.length;i++){
// //         try {
// //             const response = await fs.readFile(curFiles[i],'utf-8')
// //             console.log('response',response)
// //         } catch (error) {
// //             console.log(error)
// //         }
// //     }
// // }

// // readCurrentDir()

// // search a word in a folder in each files if found return true

// // import fs from 'fs/promises'
// // import { fileURLToPath } from 'url'
// // import path from 'path'

// // const filePath = fileURLToPath(import.meta.url)
// // const directory = path.dirname(filePath)

// // async function searchWord(word){
// //     try {
// //         const files = await fs.readdir(directory)

// //         const textFiles = files.filter((val)=>val.includes('.txt'))

// //         for(let file of textFiles){
// //             try {
// //                 const result = await fs.readFile(file,'utf-8')
// //                 if(result.includes(word)){
// //                     console.log('word exists in this file',file)
// //                 }
// //             } catch (error) {
// //                 console.log(error)
// //             }
// //         }
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }

// // searchWord("Ready")


// // search a word if it exists return the file name,line number and line count

// // create server using http


// // import http from 'http'

// // const server = http.createServer((req,res)=>{
// //     if(req.url='/' && req.method == 'GET'){
// //         res.write('welcome to home')
// //         res.end()
// //     }
// // })

// // server.listen(3000,()=>{
// //     console.log("server is running")
// // })

// // create server using express

// // import express from 'express'

// // const app = express()

// // app.get('/',(req,res)=>{
// //     res.send("how are you")
// // })

// // app.listen(3000,()=>{
// //     console.log("server is running")
// // })

// // create read stream

// import fs from 'fs'

// // const read = fs.createReadStream('peddi.txt')

// // read.on('data',(chunk)=>{
// //     console.log(chunk.toString())
// // })

// // read.on('end',()=>{
// //     console.log('read finished')
// // })

// // read.on('error',(err)=>{
// //     console.log('error is',err)
// // })

// // const write = fs.createWriteStream('basha.txt')

// // write.write("marma desam")

// // write.end()

// // write.on('close',()=>{
// //     console.log('writing finished')
// // })

// // write.on('error',(err)=>{
// //     console.log("writing error",err)
// // })

// // write.on('finish',()=>{
// //     console.log("writing finished")
// // })

// // import { Duplex } from 'stream'

// // class MyDuplex extends Duplex{
// //     constructor(){
// //         super()
// //         this.data = ''
// //     }

// //     _write(chunk,encoding,callback){
// //         this.data += chunk.toString()
// //         callback()
// //     }

// //     _read(size){
// //         this.push(this.data)
// //         this.push(null)
// //     }
// // }

// // const d = new MyDuplex()

// // d.write("mera bhai")

// // d.end()

// // d.on('close',()=>{
// //     console.log('done')
// // })

// // d.on('error',(err)=>{
// //     console.log(err)
// // })

// // d.on('finish',()=>{
// //     console.log("writing finished")
// // })

// // d.on('data',(chunk)=>{
// //     console.log(chunk.toString())
// // })

// // d.on('end',()=>{
// //     console.log('read end')
// // })

// // d.on('error',(err)=>{
// //     console.log('reading error',err)
// // })

// // transform stream

// import fs from 'fs'
// import { Transform } from 'stream'

// class UpperstreamTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         let data = chunk.toString().toUpperCase()
//         this.push(data)
//         callback()
//     }
// }

// const t = new UpperstreamTransform()

// const read = fs.createReadStream('peddi.txt')

// const write = fs.createWriteStream('Transform.txt')

// read
// .pipe(t)
// .pipe(write)
// .on('finish',()=>{
//     console.log('transformation completed')
// })


/////////////

import {exec, execFile, fork, spawn} from 'child_process'
import e from 'express'
// import { stderr, stdout } from 'process'

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

// const newApp = spawn('cmd.exe',['/c','dir'])

// newApp.stdout.on('data',(chunk)=>{console.log(chunk.toString())})

// newApp.stderr.on('error',(err)=>{console.log(err)})

// newApp.on('close',(code)=>{
//     console.log(`code exited with this ${code} status`)
// })

// const parent = fork('practice2.js')

// parent.on('message',(msg)=>{
//     console.log(msg)
// })

// parent.send("hello child")

// even

// import {EventEmitter} from 'events'

// class MyEventEmitter extends EventEmitter{}

// const e = new MyEventEmitter()

// let wish = (name)=>{
//     console.log(`happy birthday ${name}`)
// }

// e.on('greet',wish)

// let result = e.emit('greet','ahamath')

// console.log(result)

// e.once('greet',wish)

// e.removeListener('greet',wish)

// e.emit('greet','basha')
// e.emit('greet','basha')


// ////////////// middleware

// import express from 'express'
// import userRouter from './router/userRouter.js'
// const app = express()

// app.use('/api/user',userRouter)

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//check file exist

// import express from 'express'
// import fs from 'fs'
// const app = express()

// function checkFileExists(filename){
//     return fs.existsSync(filename)
// }

// function updateFile(filename){
//     fs.writeFile(filename,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//     })
// }

// app.get('/file',(req,res)=>{
//     const fileName = req.query.fileName

//     if(fileName == undefined){
//         res.send(`fileName must to update or check`)
//         return
//     }

//     if(fileName){
//         if(checkFileExists(fileName)){
//             updateFile(fileName)
//             res.send(`the file is exist and updated with the current date`)
//             return
//         }else{
//             res.send(`The file is not exists better luck next time`)
//             return
//         }
//     }
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

//block request by method

// import express from 'express'

// const app = express()

// app.use((req,res,next)=>{
//     if(req.method == 'GET'){
//         res.send(`${req.method} request is blocked particularly`)
//         return
//     }
//     else{
//         next()
//     }
// })

// app.get('/me',(req,res)=>{
//     res.send('hello ji')
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// block request by header

// import express from 'express'
// const app = express()

// app.use((req,res,next)=>{
//     if(req.headers.basha == 'idiot'){
//         res.send('This header cannot proceed further')
//     }else{
//         next()
//     }
// })

// app.get('/file',(req,res)=>{
//     res.send('basha ji')
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// take two numbers add and save in a file

import express from 'express'
import fs from 'fs'

const app = express()

function numberCheck(a,b){
    let error = []
    if(a == undefined){
        error.push('need a')
    }

    if(b == undefined){
        error.push('need b')
    }

    return error
}

function writeInFile(fileName,result){
    fs.writeFile(fileName,result.toString(),(err)=>{
        if(err){
            res.send(err)
            return
        }
    })
}

app.get('/addTwoNumbers',(req,res)=>{
    const {a,b} = req.query

    let checkedResult = numberCheck(a,b)

    if(checkedResult.length > 0){
        res.send(checkedResult)
        return
    }

    if(checkedResult.length == 0){
        let sum = Number(a) + Number(b)
        writeInFile('twoSumResult.txt',sum)
        res.send(`the sum of a and b is ${sum} and stored in the file`)
    }
})

app.listen(3000,()=>{
    console.log("server is running")
})