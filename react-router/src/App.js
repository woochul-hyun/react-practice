import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Profiles from './pages/profiles/Profiles';
import History from './pages/history/History';

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
          <Link to='/profiles'>Profils</Link>
        </li>
        <li>
          <Link to='/history'>History</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/history' component={History} />
        <Route
          render={({ location }) => (
            <div>
              <h2>Page Not Found</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
