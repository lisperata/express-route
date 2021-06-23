import express from "express";
import router from "./routes";

import { PORT } from "./infrastructureVariables";
const app = express();

app.use(express.urlencoded());
app.use(router);

app.listen(PORT, () => {
  console.log();
});
