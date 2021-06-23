import express, { Request, Response } from "express";

import {
  deleteUser,
  getUsers,
  postUser,
  putUser,
} from "../controller";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  await getUsers(res);
});

router.post("/post", async (req: Request, res: Response) => {
  const { id, name, age } = req.body;

  await postUser(res, id, name, age);
});

router.put("/put", async (req: Request, res: Response) => {
  const { id, name, age } = req.body;

  await putUser(res, id, name, age);
});

router.delete("/delete", async (req: Request, res: Response) => {
  const { id } = req.body;

  await deleteUser(res, id);
});

export default router;
