import express, { Request, Response } from 'express';
import User from '../models/user.model';
import IUser from '../types/user.type';

import protect from '../middlewares/protect';
import authorise from '../middlewares/authorise';
import { admin } from '../utils/constants';

const router = express();

router.get('/', protect, authorise([admin]), async (req: Request, res: Response)=>{
    try {

        const users: IUser[] = await User.find().lean().exec();

        res.status(200).json({
            status: 'success',
            users
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

export default router;