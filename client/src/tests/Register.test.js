import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Register from '../components/Register/register';

describe('Registration tests', () => {
  test('renders register component', () => {
    render(<Register />);
  });

  test('Test empty first name', () => {
    render(<Register />);
    fireEvent.click(screen.getByText("Create Your Account"));
    const errorElement = screen.getByText(/First Name is required./i);
    expect(errorElement).toBeInTheDocument();
  });
  
  test('Test empty last name', () => {
    render(<Register />);
    fireEvent.click(screen.getByText("Create Your Account"));
    const errorElement = screen.getByText(/Last Name is required.,/i);
    expect(errorElement).toBeInTheDocument();
  });
  
  test('Test empty user name', () => {
    render(<Register />);
    fireEvent.click(screen.getByText("Create Your Account"));
    const errorElement = screen.getByText(/Username is required./i);
    expect(errorElement).toBeInTheDocument();
  });
  
  test('Test empty email', () => {
    render(<Register />);
    fireEvent.click(screen.getByText("Create Your Account"));
    const errorElement = screen.getByText(/Email is invalid./i);
    expect(errorElement).toBeInTheDocument();
  });
  
  test('Test empty confirm password', () => {
    render(<Register />);
    fireEvent.click(screen.getByText("Create Your Account"));
    const errorElement = screen.getByText(/Password does not match./i);
    expect(errorElement).toBeInTheDocument();
  });
})