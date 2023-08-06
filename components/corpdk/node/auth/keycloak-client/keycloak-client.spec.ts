import { keycloakClient } from './keycloak-client';

it('should return the correct value', () => {
  expect(keycloakClient()).toBe('Hello world!');
});
