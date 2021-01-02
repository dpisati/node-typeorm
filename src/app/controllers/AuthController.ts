import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import User from '../models/User';
import usersView from '../../views/users_view';

class AuthController {
    async authenticate(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email }});

        if(!user) {
            return res.status(401).json({ message: "Unable to login"});
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if(!email || !password) {
            return res.status(400).json({ message: "Unable to create user" });
        }
        
        if(!validPassword) {
            return res.status(401).json({ message: "Unable to login"});
        }

        const token = jwt.sign({ 
                id: user.id, 
                name: user.name, 
                email: user.email, 
                type: user.type
            }, 
                process.env.JWT_SECRET as string,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN as string
                }
            );
                
        return res.json({user: usersView.render(user), token});
    }
}

export default new AuthController();