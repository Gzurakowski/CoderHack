import express from 'express'
import mongoose from 'mongoose'
import bcrypt, { hash } from 'bcrypt'
import engine from "react-engine"
import path from 'path'
// import * as model from '../../models/user.js'
//const multer = require('multer')

async function hashPassword(password){
    try{
        let hashPwd = bcrypt.hash(password,10);
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




// await ConectDB()


const app = express()


app.engine('.jsx', engine.server.create())
app.set('views', './views')
app.set('view engine', 'jsx')
app.use(express.static('build'));
app.set('view', engine.expressView)
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

app.post('/signUp', async(req, res) => {
    try{
        const user = req.body
        const search = await model.usuarios.find({mail:user.mail})
        if(search.length == 0){
            user.password = await hashPassword(user.password)
            const usuarioSaveModel = new model.usuarios(user)
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

app.get('/users', async (req, res) =>{
    let users = await model.usuarios.find({})
    res.send( users)
})

app.get('/user/:id', async (req, res) =>{
    const id = req.params.id
    console.log(id)
    let user = await model.usuarios.findById(id)
    res.send(user)
})




/* ------------------------------------------------------ */
/* Server Listen */

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))