const { getAll, getOne, setLibro, updateLibro, deleteLibro } = require('../controllers/LibroController')

const express = require('express');

const route = express.Router();

route.get('/', getAll);
route.get('/:id', getOne);
route.post('/', setLibro);
route.put('/:id', updateLibro)
route.delete('/:ISBN', deleteLibro); 

module.exports = route;