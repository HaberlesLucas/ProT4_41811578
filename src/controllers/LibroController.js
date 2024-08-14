const { where } = require("sequelize");
const Libros = require("../models/Libro");
const { link } = require("../routes/Libros");

//obtener todos
const getAll = async (req, res) => {
    try {
        const libros = await Libros.findAll();
        return res.status(200).json(libros);
    } catch (error) {
        return res.status(500).json({ mensaje: 'ha ocurrido un problemita: ', error })
    }
}

//obtener uno
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const libro = await Libros.findByPk(id);

        if (libro) {
            return res.status(200).json(libro);
        }
        else {
            return res.status(400).json({ mensaje: 'Libro buscado no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'ha ocurrido un problemita: ', error });
    }
}

//crear uno
const setLibro = async (req, res) => {
    const { body } = req;
    try {
        const libro = await Libros.create(body);
        res.status(201).json(libro);

    } catch (error) {
        return res.status(500).json({ mensaje: 'Error: ', error });
    }
}

//modificar uno segun ISBN 
const updateLibro = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, autor, categoria, anio_publicacion, ISBN } = req.body;

        //buscar
        const libro = await Libros.findOne({ where: { id } });
        if (libro) {
            await libro.update({ nombre, autor, categoria, anio_publicacion, ISBN }, { where: { id } });
            return res.status(200).json({ mensaje: 'Actualizado', libro });
        } else {
            return res.status(500).json({ mensaje: 'No encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'error', error });
    }
}

//eliminar uno 
const deleteLibro = async (req, res) => {
    try {
        const { ISBN } = req.params;
        await Libros.destroy({where: {ISBN: ISBN}});
        return res.status(200).json({mensaje: 'Eliminado'});

    } catch (error) {
        return res.status(500).json({mensaje: 'Error: ', error});
        
    }
}


module.exports = { getAll, getOne, setLibro, updateLibro, deleteLibro }