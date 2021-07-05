import express, { Request, Response } from 'express';
import { postContact, putContact } from './contact.controller';

const conactRouter = express.Router();

conactRouter.post('/contacts', async (req: Request, res: Response) => {
  const { name, email } = req.body;

  await postContact(res, name, email);
});

conactRouter.patch('/contacts', async (req: Request, res: Response) => {
  const { name, email, uuid } = req.body;

  await putContact(res, name, email, uuid);
});

export default conactRouter;
