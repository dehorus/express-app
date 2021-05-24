const express = require("express");
const app = express();


const PORT = 3000;

//Motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render("index", {titulo : "Mi titulo dinamico"});
})

app.get('/servicios', (req,res) => {
    res.render("servicios", {tituloServicios: "Servicios Dinamico"})
})

app.use((req, res, next) => {
    res.status(404).render('404');
})
app.listen(PORT, () => {
    console.log("Servidor encendido", PORT)
})