import mysql from 'mysql';
import dbConfig from '../config/dbConfig.js';

const db = mysql.createConnection(dbConfig);

export function findUserByEmail(email, callback) {
    const sql = "SELECT * FROM users WHERE email = ?";
    const sqlParams = [email];

    return db.query(sql, sqlParams, function (err, result) {
      if (err) throw err;
      return callback(result)
    })
}

export function insertNewUser(email, password, callback) {
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    const sqlParams = [email, password];

    db.query(sql, sqlParams, function (err, result) {
        if (err) throw err;
        return callback();
      });
}

export default {findUserByEmail, insertNewUser}