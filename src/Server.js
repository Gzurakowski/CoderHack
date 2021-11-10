import express from 'express'
import mongoose from 'mongoose'
import bcrypt, { hash } from 'bcrypt'
import {usuarios} from '../models/user.js'
import {desafios} from '../models/desafio.js'
import faker from 'faker'


faker.fake
//const multer = require('multer')


const testUser = {
    mail:"test@test.com",
    password:"sadadsa",
    name:"Pablo perrea",
    rol:'emprendedor',
    newsletter:false
}
async function hashPassword(password){
    try{
        let hashPwd = await bcrypt.hash(password,10);
        return hashPwd
    }catch(err){
        console.log(err)
    }
    
}

  

// async function sendEncrypted(usuario){
    
//     const user =  await new Promise((resolve,reject)=>{
        
//         resolve(await new Promise((resolve, reject) => {
            
//         })) 
//     }) bcrypt.genSalt(saltRounds,async (err,salt) =>{
//         bcrypt.hash(usuario.password, salt, async (err, hash) =>{
//             usuario.password = hash
//             const usuarioSaveModel = new model.usuarios(usuario)
//             return await usuarioSaveModel.save()
//         })
//     })
    
// }


async function ConectDB() {
    try {
        let rta = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Base de datos conectada")
    } catch (msg) {
        console.log(msg)
    }
}




await ConectDB()

const test = async (user) =>{
    user.password = await hashPassword(user.password)
    const usuarioSaveModel = new usuarios(user)
    const usuarioSave = await usuarioSaveModel.save()
    console.log(usuarioSave.toJSON())
}


const app = express()

// test(testUser)


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

app.get('/users', async (req, res) =>{
    let users = await usuarios.find({})
    res.json( users)
})

app.get('/user/:id', async (req, res) =>{
    const id = req.params.id
    console.log(id)
    let user = await usuarios.findById(id)
    res.json(user)
})


app.post('/signUp', async(req, res) => { //Creacion de user
    try{
        const user = req.body
        const search = await usuarios.find({mail:user.mail})
        if(search.length == 0){
            user.password = await hashPassword(user.password)
            const usuarioSaveModel = new usuarios(user)
            const usuarioSave = await usuarioSaveModel.save()
            console.log(usuarioSave.id)
            res.redirect(`/user/${usuarioSave.id}`)
        }else{
            res.redirect('/?error=True')
        }
        
    }catch(err) {
        console.log(err)
    }
})

app.post('/crearEmprendimiento/:id', async (req, res) =>{
    try{
        const {id} = req.params
        const {name, descripcion, ejes} = req.body
        
        const user = await usuarios.updateOne({_id:id}, {"emprendimiento.name": name,"emprendimiento.descripcion": descripcion,"emprendimiento.ejes": ejes})
        console.log(user)
        res.sendStatus(200)
    }catch(err){
        console.log(err)
    }
})


app.post('/crearDesafio/:id', async (req, res) =>{
    try{
        const {id} = req.params
        const desafioForm = req.body
        desafioForm.user = id
        console.log(desafioForm)
        const desafioSaveModel = new desafios(desafioForm)
        const desafioSave = await desafioSaveModel.save()
        const _id = desafioSave._id
        console.log(_id)
        const user = await usuarios.updateOne({_id:id}, {$push: {"emprendimiento.desafios": _id}})
        console.log(user)
        res.sendStatus(200)
    }catch(err){
        console.log(err)
    }
})





/* ------------------------------------------------------ */
/* Server Listen */

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))