import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HotStocksList from '../components/HotStocksList/hotStocksList';

describe('HotStocksList tests', () => {
  test('renders hotstocklist no crash', () => {
    render(<HotStocksList />)
  });
  test('renders with header', () => {
    render(<HotStocksList />)
    expect(screen.getByText(/Today's Hot Stocks Discussions/i)).toBeInTheDocument();
  });
})