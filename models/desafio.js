import Mongoose from "mongoose";
const desafiosCollection = 'desafios'

const desafiosSchema = new Mongoose.Schema({
    desafio:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required:true
    },
    ejes:{
        type:String,
        required:true
    },
    user:{
        type: Mongoose.Types.ObjectId,
        ref:'usuarios'
    }
    
})

export const desafios = Mongoose.model(desafiosCollection, desafiosSchema);