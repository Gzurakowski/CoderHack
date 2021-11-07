import express from 'express'
import mongoose from 'mongoose'
import * as model from '../models/user.js'
//const multer = require('multer')
import { MongoClient } from 'mongodb'


async function ConectDB() {
    try {
        const URL = 'mongodb+srv://equipo1:hRNd6GupvRxH4vdX@coderhack.yox2b.mongodb.net/Equipo1?retryWrites=true&w=majority'
        let rta = await mongoose.connect(proces.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Base de datos conectada")
    } catch (msg) {
        console.log(msg)
    }
}

await ConectDB()

async function create(usuario = { mail: "gonchizurak@gmail.com", password: '1234' }) {
    try{
        console.log("Create")
    const usuarioSaveModel = new model.usuarios(usuario)
    let usuarioSave = await usuarioSaveModel.save()
    console.log(usuarioSave)
    }catch (err){
        console.log(err)
    }
}

const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())

// /* ------------------------------------------------------ */

// const storage = multer.diskStorage({
//     destination: ( req, file, cb) =>{
//         cb(null,'uploads')
//     },
//     filename: ( req, file, cb) =>{
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({ storage })


// /* ------------------------------------------------------ */


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/user', async(req, res) => {
    console.log(req.body)
    await create(req.body)
    res.redirect('/')
})

app.get('/users', async (req, res) =>{
    let users = await model.usuarios.find({})
    res.send(users)
})




/* ------------------------------------------------------ */
/* Server Listen */

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))