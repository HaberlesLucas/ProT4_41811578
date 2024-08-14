
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5743

app.use(express.json());
const routeLibros = require('./src/routes/Libros');

app.use('/libros', routeLibros);

app.get('/', (req, res) => {
    res.send("API - REST");
});


app.listen(port, () => {
    console.log("escuchando", port);
});
