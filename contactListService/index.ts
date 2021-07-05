import express from 'express';
import conactRouter from './contact/contactRoutes';
import listRouter from './list/listRoutes';
import { PORT } from './infrastructureVariables';
import List from './list/listModel';
import Contact from './contact/contactModel';
import ContactList from './contactList/contactListModel';

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
