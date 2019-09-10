import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/profile/woochul'>Woochul</Link>
        </li>
        <li>
          <Link to='/profile/gildong'>Gildong</Link>
        </li>
      </ul>
      <hr />
      <Route path='/' component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path='/profile/:username' component={Profile} />
    </div>
  );
}

export default App;
