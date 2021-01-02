import { Request, Response } from 'express';
import { getRepository } from 'typeorm';



import User from '../models/User';

class UserController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { name, email, password } = req.body;

        const userExists = await repository.findOne({ where: { email }});

        if(userExists) {
            return res.status(409).json({ message: "Email alreay in use"});
        }

        if(!name || !email || !password) {
            return res.status(400).json({ message: "Unable to create user" });
        }
        
        const user = repository.create({ name, email, password});
        await repository.save(user);

        return res.json(user);
    }
    async index(req: Request, res: Response) {
        return res.json({ user: req.userToken });
    }
}

export default new UserController();