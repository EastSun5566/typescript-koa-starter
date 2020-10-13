import { HomeController } from '../../src/controllers';
import { IHomeService } from '../../src/services';

describe('HomeController', () => {
  let homeController: HomeController;

  beforeEach(() => {
    class MockHomeService implements IHomeService {
      // eslint-disable-next-line class-methods-use-this
      greet(): string {
        return 'Hello';
      }
    }

    homeController = new HomeController(new MockHomeService());
  });
});
