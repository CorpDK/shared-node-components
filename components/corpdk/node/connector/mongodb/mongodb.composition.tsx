import React from 'react';
import { mongodb } from './mongodb';

export function ReturnsCorrectValue() {
  return <div>{mongodb()}</div>;
}
