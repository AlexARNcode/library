import mysql from 'mysql';
import dbConfig from '../config/dbConfig.js';
import { findUserByEmail, insertNewUser } from '../repositories/usersRepository.js';

const db = mysql.createConnection(dbConfig);

export const createUser = (req, res) => {
    const userEmail = req.body.email

    findUserByEmail(userEmail, function(result) {
        result.length !== 0 ? 
            res.send(`User ${userEmail}" already exists !`) 
            : 
            insertNewUser(userEmail.toLowerCase(), req.body.password, function(email) {
            res.send(`New user "${email}" created !`);    
        })    
    })  
}
