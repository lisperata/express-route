import express from "express";
import conactRouter from "./contact/contactRoutes";

import { PORT } from "./infrastructureVariables";
const app = express();

app.use(express.urlencoded());
app.use(conactRouter);

app.listen(PORT, () => {
  console.log();
});
