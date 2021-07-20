import express, {Request, Response} from 'express';
import ContactForm from '../models/contactForm.model';
import IContactForm from '../types/contactForm.type';
import protect from '../middlewares/protect';
import authorise from '../middlewares/authorise';
import { admin } from '../utils/constants';

const router = express();

router.get('/', protect, authorise([admin]), async (req: Request, res: Response)=>{ 
    try {
        const messages: IContactForm[] = await ContactForm.find().lean().exec();

        res.status(200).json({
            status: 'success',
            messages
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

router.get('/:id', protect, authorise([admin]), async (req: Request, res: Response)=>{ 
    try {
        const id = req.params.id;

        const message: IContactForm | null = await ContactForm.findById(id).lean().exec();

        res.status(200).json({
            status: 'success',
            message
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

router.post('/', async (req: Request, res: Response)=> {
    try {
        const data = req.body;

        const message: IContactForm = await ContactForm.create(data);

        res.status(201).json({
            status: 'success',
            message
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

router.delete('/:id', protect, authorise([admin]), async(req: Request, res: Response) => {
    try {
        const id = req.params.id;

        await ContactForm.findByIdAndDelete(id).lean().exec();

        res.status(200).json({
            status: 'success',
            message: 'message successfully deleted'
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