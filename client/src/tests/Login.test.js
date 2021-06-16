import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../components/Login/login';

import userContext from '../context/userContext';

const customRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <userContext.Provider {...providerProps}>{ui}</userContext.Provider>, renderOptions
  );
};

const providerProps = {value: {userInfo: {loggedIn: false, user: null}}}

describe('login tests', () => {
  test('renders login without crash', () => {
    customRender(<Login />, { providerProps });
  });

  test('renders login with text', () => {
    customRender(<Login />, { providerProps });
    expect(screen.getByText(/Do not have an account?/i)).toBeInTheDocument();
  });
})