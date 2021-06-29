import express from 'express';
import conactRouter from './contact/contactRoutes';
import listRouter from './list/listRoutes';

import { PORT } from './infrastructureVariables';
const app = express();

app.use(express.urlencoded());
app.use(conactRouter);
app.use(listRouter);

app.listen(PORT, () => {
  console.log();
});
