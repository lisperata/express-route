import express, { Request, Response } from 'express';
import { sendMail } from './mailController';

const mailRouter = express.Router();

mailRouter.post('/mail', async (req: Request, res: Response) => {
  const { listId, title, content } = req.body;

  await sendMail(res, listId, title, content);
});

export default mailRouter;
