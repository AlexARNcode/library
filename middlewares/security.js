import jwt from 'jsonwebtoken';
import apiErrors from '../errors/apiErrors.js';

export default async function checkJWT (req, res, next)  {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!!token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json(apiErrors.INVALID_JWT_TOKEN.userMessage);
            } else {
                req.decoded = decoded;

                const expiresIn = 24 * 60 * 60;
                const newToken  = jwt.sign({
                    user : decoded.user
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: expiresIn
                });

                res.header('Authorization', 'Bearer ' + newToken);
                next();
            }
        });
    } else {
        return res.status(401).json(apiErrors.JWT_TOKEN_REQUIRED.userMessage);
    }
}