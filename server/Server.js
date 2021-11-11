import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import env from 'dotenv'
import {usuarios} from '../models/user.js'
import {desafios} from '../models/desafio.js'
env.config()
//const multer = require('multer')

async function hashPassword(password){
    try{
        let hashPwd = bcrypt.hash(password,10);
        return hashPwd
    }catch(err){
        console.log(err)
    }
    
}


async function ConectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Base de datos conectada")
    } catch (msg) {
        console.log(msg)
    }
}




await ConectDB()
const app = express()


app.use(express.static('build'));
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
    res.render('index')
})

app.get('/users', async (req, res) =>{
    let users = await usuarios.find({})
    res.json(users)
})

app.get('/user/:id', async (req, res) =>{
    const id = req.params.id
    let user = await usuarios.findById(id)
    res.json(user)
})

app.post('/logIn', async (req, res) =>{
    const {mail, password} = req.body
    try{
        const user = await usuarios.findOne({mail:mail})
        if(user){
            await bcrypt.compare(password, user.password,async (err, compare) =>{
                if(err){
                    console.log(err)
                    res.send(500)
                }
                if(compare){
                    if (user.rol === 'emprendedor'){
                        await user.emprendimiento.populate('desafios')
                    }
                    res.json(user)
                }else{
                    res.json({message:'password incorrecto'})
                }
            })  
        }else{
            res.json({message:'mail incorrecto'})
        }
        
    }catch(error){
        console.log(error)
    }
})
app.post('/signUp', async(req, res) => { //Creacion de user
    try{
        const user = req.body
        console.log(user)
        const search = await usuarios.find({mail:user.mail})
        if(search.length === 0){
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
        const desafioSaveModel = new desafios(desafioForm)
        const desafioSave = await desafioSaveModel.save()
        const _id = desafioSave._id
        await usuarios.findOneAndUpdate({_id:id}, {$push: {"emprendimiento.desafios": _id}})
        res.sendStatus(200)
    }catch(err){
        console.log(err)
    }
})

app.post('/crearIdea/:desafio', async (req, res) =>{
    try{
        const user = req.headers._id
        const {desafio} = req.params
        const {idea} = req.body
        
        await desafios.findOneAndUpdate({_id:desafio}, {$push:{ideas:{user:user, idea:idea, reports:0}}})
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