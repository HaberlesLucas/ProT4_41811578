require('dotenv').config();

const e = require('express');
const { Sequelize } = require('sequelize');
const db = process.env.DATABASE;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const user = process.env.USER;
const dialect = process.env.DB_TYPE;

const sequelize = new Sequelize(
    db, user, password,
    {
        host,
        dialect
    }
);

const db_contection = async () => {
    try {
        await sequelize.authenticate();
        console.log('conexión exitosa');
    } catch (error) {
        console.log('ocurrió un error: ', error);
    }
};
