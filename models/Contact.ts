import { v4 as uuidv4 } from "uuid";
import sequelize from "../sequelize";

class List {
  private uuid: string;
  private name: string;
  private email: string;

  public constructor(name: string, email: string, uuid: string = uuidv4()) {
    this.uuid = uuid;
    this.name = name;
    this.email = email;
  }

  public async addContact(): Promise<void> {
    const { uuid, name, email } = this;
    const date = new Date().toISOString().slice(0, 19).replace("T", " ");

    await sequelize.query(
      `INSERT INTO contacts (uuid,name,email,createdAt,updatedAt) VALUES('${uuid}','${name}', '${email}', '${date}', '${date}');`
    );
  }

  public async changeContactById(): Promise<void> {
    const { uuid, name, email } = this;
    const nameForQuery = name
      ? this._convertParameterToQuery("name", name)
      : "";
    const emailForQuery = email
      ? this._convertParameterToQuery("email", email)
      : "";
    await sequelize.query(
      this._getTheStringToUpdateQuery(uuid, nameForQuery, emailForQuery)
    );
  }

  private _convertParameterToQuery(
    nameOfParameter: string,
    parameter: string
  ): string {
    return `${nameOfParameter} = '${parameter}',`;
  }

  private _getTheStringToUpdateQuery(
    uuid: string,
    name: string = "",
    email: string = ""
  ): string {
    const date = new Date().toISOString().slice(0, 19).replace("T", " ");

    return `UPDATE contacts SET ${email} ${name} updatedAt='${date}' WHERE uuid = '${uuid}';`;
  }
}

export default List;
