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
    },
    ideas:[{
        user:{
            type: Mongoose.Types.ObjectId,
            ref:'usuarios'
        },
        idea:{
            type:String,
        },
        reports:{
            type:Number
        }
    }]
    
})

desafiosSchema.set('toJSON', {
    transform:(document, returnedObject) =>{
        
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.ideas 
        delete returnedObject.user       
    }
})

export const desafios = Mongoose.model(desafiosCollection, desafiosSchema);