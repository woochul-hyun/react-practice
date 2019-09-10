import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Profile from '../profile/Profile';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };
  return (
    <div>
      <h3>User List:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to='/profiles/woochul'>
            Woochul
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to='/profiles/gildong'>
            Gildong
          </NavLink>
        </li>
      </ul>
      <Route path='/profiles' exact render={() => <div>Choose user</div>} />
      <Route path='/profiles/:username' component={Profile} />
    </div>
  );
};

export default Profiles;
