const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const mongoose = require("mongoose")
const config = require('config')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
dotenv.config({path: './config.env'});

const server = http.createServer(app);
const io = socketio(server).socketio
const user = require('./model/user')

const db = config.get('mongoURI')

//connect to MongoDB
mongoose.connect(db, {
   // useNewUriParse: true,
    // useCreateIndex: true,
    //useUnifiedTopology:true,
    //useFindAndModify:false
})
    .then(()=>console.log(`mongoDB connected`)).catch(e=>console.log(e))


    app.get('/', async (req,res)=> {
   try{      const su = await user.find()
        res.send(su)}
    catch(e){
        console.log(e)
    }})
    
    

    app.use('/api/user', require('./router/user'))
    app.use('/api/a', require('./router/auth'))
    app.use('/api/send', require('./router/send'))

const port = process.env.port || 3000

server.listen(port,()=> console.log(`server started on port ${port}`))

