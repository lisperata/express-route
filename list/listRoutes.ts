import express, { Request, Response } from 'express';
import {
  changeTheListInContact,
  getContactsByListId,
  postList,
} from './listController';

const listRouter = express.Router();

listRouter.post('/list', async (req: Request, res: Response) => {
  const { name } = req.body;

  await postList(res, name);
});

listRouter.post('/lists', async (req: Request, res: Response) => {
  const { uuid } = req.body;
  await getContactsByListId(res, uuid);
});

listRouter.patch('/list', async (req: Request, res: Response) => {
  const { uuidOfList, uuidOfContact } = req.body;

  await changeTheListInContact(res, uuidOfList, uuidOfContact);
});

export default listRouter;
