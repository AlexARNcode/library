import mysql from 'mysql';
import dbConfig from '../config/dbConfig.js';
import { findUserByEmail, insertNewUser } from '../repositories/usersRepository.js';

const db = mysql.createConnection(dbConfig);

export const createUser = (req, res) => {
    const userEmail = req.body.email

    findUserByEmail(userEmail, function(result) {
        if (result.length !== 0) {
            res.send("User already exists !")
        } else {
            insertNewUser(userEmail, req.body.password, function(result) {
                res.send(result)
            })    
        }    
    })
}
