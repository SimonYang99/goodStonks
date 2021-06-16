import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/header';

import userContext from '../context/userContext';

const customRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <userContext.Provider {...providerProps}>{ui}</userContext.Provider>, renderOptions
  );
}

describe('header tests', () => {
  test('renders header', () => {
    const userInfo = {userInfo: {loggedIn: false, user:undefined}}
    const providerProps = {
      value: userInfo
    };
    customRender(<Header />, { providerProps });
    const login = screen.getByText(/GoodStonks/i);
    expect(login).toBeInTheDocument();
  });

  test('renders header not logged in', () => {
    const userInfo = {userInfo: {loggedIn: false, user:undefined}}
    const providerProps = {
      value: userInfo
    };
    customRender(<Header />, { providerProps });
    const login = screen.getByText(/Login/i);
    expect(login).toBeInTheDocument();
  });

  test('renders header logged in', () => {
    const userInfo = {userInfo: {loggedIn: true, user:undefined}}
    const providerProps = {
      value: userInfo
    };
    customRender(<Header />, {providerProps});
    const login = screen.getByText(/profile/i);
    expect(login).toBeInTheDocument();
  })
})