const express = require('express')
    //const multer = require('multer')
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hola")
})




/* ------------------------------------------------------ */
/* Server Listen */
const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor error`))