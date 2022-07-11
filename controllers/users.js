import mysql from 'mysql';
import dbConfig from '../config/dbConfig.js';

const db = mysql.createConnection(dbConfig);

export const createUser = (req, res) => {
    res.send("Create user");
}
