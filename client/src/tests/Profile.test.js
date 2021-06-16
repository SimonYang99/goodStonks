import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Profile from '../components/Profile/profile';

import userContext from '../context/userContext';

const customRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <userContext.Provider {...providerProps}>{ui}</userContext.Provider>, renderOptions
  );
};

const exampleUser = {
  loggedIn: true,
  user: {
    userid: 1,
    username: "userName",
    firstname: "firstName",
    email: "email@email.com",
    password: "password",
    profile_picture: null,
    upvotes: 0,
    jsondata: null
  }
}

describe('profile tests', () => {
  test('renders profile', () => {
    const providerProps = {value: {userInfo: exampleUser}};
    customRender(<Profile />, { providerProps });
  });
})