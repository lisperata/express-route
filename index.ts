import express from "express";
import bodyParser from "body-parser";
import {
  deleteUser,
  getUsers,
  postUser,
  putUser,
} from "./controller/controller";
import { port } from "./infrastructureVariables";
const app = express();

app.use(bodyParser.urlencoded());

app.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.type("json").send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/post", async (req, res) => {
  try {
    const result: string = await postUser(
      req.body.id,
      req.body.name,
      req.body.age
    );
    res.type("plain").status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/put", async (req, res) => {
  try {
    const result: string = await putUser(
      req.body.id,
      req.body.name,
      req.body.age
    );
    res.type("plain").status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/delete", async (req, res) => {
  try {
    const result: string = await deleteUser(req.body.id);
    res.type("plain").send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log();
});
