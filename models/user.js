import Mongoose from "mongoose";

const usuariosCollection = 'usuarios'

const usuariosSchema = new Mongoose.Schema({
    mail: {
        type: String,
        required: true,
        max: 60
    },
    username:{
        type:String
    },
    password: {
        type: String,
        required: true,
        max: 30
    },
    name:{
        type:String,
        required:true,
        max:60
    },
    rol:{
        type:String,
        required:true,
        max: 15
    },
    country:{
        type:String,
        default:'Argentina'
    },
    emprendimiento:{
        name:{
            type:String,
            max:60
        },
        
        descripcion:{
            type:String,
            max:250
        },
        ejes:{
            type:String,
        },
        desafios:[{
            type:Mongoose.SchemaTypes.ObjectId,
            ref:'desafios'
        }],
        logo:{
            type:String
        }
    },
    newsletter:{
        type:Boolean,
        default:false
    }
})

usuariosSchema.set('toJSON', {
    transform:(document, returnedObject) =>{
        if(document.rol === 'emprendimiento'){
            returnedObject.id = returnedObject._id
            delete returnedObject._id
            delete returnedObject.__v
            
            delete returnedObject.password
        }else{
            returnedObject.id = returnedObject._id
            delete returnedObject._id
            delete returnedObject.__v
            delete returnedObject.emprendimiento
            delete returnedObject.password
        }
        
    }
})

export const usuarios = Mongoose.model(usuariosCollection, usuariosSchema);