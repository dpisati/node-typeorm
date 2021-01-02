import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

interface TokenPayload {
    id: number;
    name: string;
    email: string;
    type: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json({ message: "Unauthorized"});
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET as string);
        const { id, name, email, type } = data as TokenPayload;
        
        req.userToken = { id, name, email, type };

        next();
    } catch {
        return res.status(401).json({ message: "Unauthorized on catch"});
    }

}