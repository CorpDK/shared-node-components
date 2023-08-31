import { postgresql } from './postgresql';

it('should return the correct value', () => {
  expect(postgresql()).toBe('Hello world!');
});
