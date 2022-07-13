import mysql from 'mysql';
import dbConfig from '../config/dbConfig.js';
import { findUserByEmail, insertNewUser } from '../repositories/usersRepository.js';
import { comparePasswords } from '../helpers/passwords.js';
import apiErrors from '../errors/apiErrors.js';
import jwt from 'jsonwebtoken';

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

export const logUser = (req, res) => {
    const userEmail = req.body.email
    const userSentPassword = req.body.password

    const sql = "SELECT * FROM users WHERE email = ?";
    const sqlParams = [userEmail];

    db.query(sql, sqlParams, function (err, result) {
        if (err) throw err;

        if (result.length > 0) { 
            const userPasswordInDB = result[0].password
            if (comparePasswords(userSentPassword, userPasswordInDB)) {
                console.log("Will log !");
                const secretKey = "temporary";

                const token = jwt.sign({ user: userEmail }, secretKey, { expiresIn: "3 hours" });

                res.header('Authorization', 'Bearer ' + token);
                res.status(200).json('Sucessfully logged in');
            } else {
                res.send(apiErrors.WRONG_CREDENTIALS.userMessage)
            }
        } else {
            res.send(apiErrors.WRONG_CREDENTIALS.userMessage);
        }
    })

}