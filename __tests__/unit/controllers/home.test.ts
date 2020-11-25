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
    const ctx: any = {};
    homeController.get(ctx);

    expect(ctx).toHaveProperty('body', GREETING);
  });
});
