const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    descripción: String
})

//Crear modelo

const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;