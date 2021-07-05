import express from 'express';
import conactRouter from './contact/contact.routers';
import listRouter from './list/list.routers';
import { PORT } from './common/common.constants';
import List from './list/list.model';
import Contact from './contact/contact.model';
import ContactList from './contact-list/contact-list.model';

const app = express();

app.use(express.urlencoded());
app.use(conactRouter);
app.use(listRouter);
app.use(express.json());

List.belongsToMany(Contact, { through: ContactList });
Contact.belongsToMany(List, { through: ContactList });

app.listen(PORT, () => {
  console.log();
});
