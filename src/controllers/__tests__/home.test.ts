import { HomeController } from '../home';
import { IHomeService } from '../../services';

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
    const mockCtx = {} as any;
    const mockNest = jest.fn();

    homeController.get(mockCtx, mockNest);

    expect(mockCtx).toHaveProperty('body', GREETING);
  });
});
