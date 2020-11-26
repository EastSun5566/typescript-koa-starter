import { HomeController } from '../../../src/controllers';
import { IHomeService } from '../../../src/services';

describe('HomeController', () => {
  const GREETING = 'Hello';
  let homeController: HomeController;

  beforeEach(() => {
    class MockHomeService implements IHomeService {
      greet = (): string => GREETING
    }

    homeController = new HomeController(new MockHomeService());
  });

  it(`should get ${GREETING} when get`, () => {
    const mockCtx: any = {};
    homeController.get(mockCtx);

    expect(mockCtx).toHaveProperty('body', GREETING);
  });
});
