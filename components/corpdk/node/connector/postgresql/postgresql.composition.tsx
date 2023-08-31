import React from 'react';
import { postgresql } from './postgresql';

export function ReturnsCorrectValue() {
  return <div>{postgresql()}</div>;
}
