const express = require("express");
const app = express();

// Variables de entorno, para seguridad de variables.
require('dotenv').config();

const PORT = process.env.PORT || 3000;
//Consexion a base de datos

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.xtj0o.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e))

//Motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

app.use(express.static(__dirname + "/public"));

app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.status(404).render('404');
})
app.listen(PORT, () => {
    console.log("Servidor encendido", PORT)
})