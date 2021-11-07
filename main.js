const express = require('express')
    //const multer = require('multer')
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())


app.get('/bienvenida/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hola ${name}`)
})




/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor error`))