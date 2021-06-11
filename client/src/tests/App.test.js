import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders Good stonks header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/GoodStonks/i);
  expect(linkElement).toBeInTheDocument();
});
