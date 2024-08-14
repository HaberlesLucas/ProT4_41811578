
const { DataTypes, Op } = require('sequelize');
const { sequelize } = require('../db/db_conection');

const Libros = sequelize.define('Libros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    anio_publicacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        tableName: 'Libros',
        timestamps: false,
    }
);

module.exports = Libros;


// id INT NOT NULL AUTO_INCREMENT,
// nombre VARCHAR(30),
// autor VARCHAR(30),
// categoria VARCHAR(30),
// anio_publicacion DATE,
// ISBN VARCHAR(13), 