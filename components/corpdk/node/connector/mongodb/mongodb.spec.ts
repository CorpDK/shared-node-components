import { mongodb } from './mongodb';

it('should return the correct value', () => {
  expect(mongodb()).toBe('Hello world!');
});
