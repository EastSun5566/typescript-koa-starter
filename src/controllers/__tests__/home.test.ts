import { HomeController } from '../home';

describe('HomeController', () => {
  const GREETING = 'Hello';
  let homeController: HomeController;

  beforeEach(() => {
    class MockHomeService {
      greet = (): string => GREETING
    }

    homeController = new HomeController(new MockHomeService());
  });

  it(`should get ${GREETING} when get`, () => {
    const mockCtx = {} as any;
    const mockNest = jest.fn();

    homeController.index(mockCtx, mockNest);

    expect(mockCtx).toHaveProperty('body', GREETING);
  });
});
