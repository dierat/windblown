import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders generic text', () => {
  render(<App />);
  const linkElement = screen.getByText(/windblown/i);
  expect(linkElement).toBeInTheDocument();
});
