interface IBook {
  id?: number;
  name?: string;
}

export class Book implements IBook {
  id?: number;

  name?: string;

  // eslint-disable-next-line no-useless-constructor
  constructor({ id, name }: IBook) {
    this.id = id;
    this.name = name;
  }
}

export default Book;
