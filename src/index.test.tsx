import React from 'react';
import { render  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App, sum } from './index';

describe('App', () => {
  it('renders without error', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Hello, World!/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});