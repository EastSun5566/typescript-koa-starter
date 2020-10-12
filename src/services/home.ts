export interface IHomeService {
  greet(): string;
}

export class HomeService implements IHomeService {
  // eslint-disable-next-line class-methods-use-this
  greet(): string {
    return 'Hello World';
  }
}

export default HomeService;
