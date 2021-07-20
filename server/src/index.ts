import express, { Express } from 'express';

import { register, login } from './controllers/auth.controller';
import userController from './controllers/user.Controller';
import contactFormController from './controllers/contactForm.controller';
import authorise from './middlewares/authorise';
import { admin } from './utils/constants';

const app: Express = express();

app.use(express.json());

app.post('/register', authorise([admin]), register);
app.post('/login', login);
app.use('/user', userController);
app.use('/contact', contactFormController);

export default app;