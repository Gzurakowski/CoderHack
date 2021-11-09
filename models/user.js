import Mongoose from "mongoose";

const usuariosCollection = 'usuarios'

const usuariosSchema = new Mongoose.Schema({
    mail: {
        type: String,
        required: true,
        max: 100
    },
    password: {
        type: String,
        required: true,
        max: 20
    }
})

export const usuarios = Mongoose.model(usuariosCollection, usuariosSchema);