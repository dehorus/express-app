const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async (req, res) => {

    try {
        const arrayMascotas = await Mascota.find();
        console.log(arrayMascotas);

        res.render("mascotas", {
            arrayMascotas
        })
    } catch (error) {
        console.error(error);
    }

   
});

module.exports = router;