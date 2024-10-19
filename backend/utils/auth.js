import jwt from 'jsonwebtoken';
import JWT_SECRET from '../config.js';

// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        console.log('user: ', user);
        req.user = user;
        next();
    });
};

export { authenticateToken };
