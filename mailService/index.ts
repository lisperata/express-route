import express from "express";
import { PORT } from "./infrastructureVariables";
import mailRouter from "./mail/mailRoutes";

const app = express();

app.use(express.urlencoded());
app.use(mailRouter);

app.listen(PORT, () => {
  console.log();
});
