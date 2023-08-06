import { winston } from './winston';

it('should return the correct value', () => {
  expect(winston()).toBe('Hello world!');
});
