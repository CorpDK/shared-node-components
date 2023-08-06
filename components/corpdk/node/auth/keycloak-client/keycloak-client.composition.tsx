import React from 'react';
import { keycloakClient } from './keycloak-client';

export function ReturnsCorrectValue() {
  return <div>{keycloakClient()}</div>;
}
