import uuid from "uuid";

class List {
  private uuid: string;
  private name: string;

  public constructor(name: string) {
    this.uuid = uuid.v4();
    this.name = name;
  }
}

export default List;
