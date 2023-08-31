import React from 'react';
import { winston } from './winston';

export function ReturnsCorrectValue() {
  return <div>{winston()}</div>;
}
