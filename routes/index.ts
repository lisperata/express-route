import express, { Request, Response } from "express";
import { postContact, putContact } from "../controller/contact";

const router = express.Router();

router.post("/contacts", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  await postContact(res, name, email);
});

router.patch("/contacts", async (req: Request, res: Response) => {
  const { name, email, uuid } = req.body;

  await putContact(res, name, email, uuid);
});

export default router;
