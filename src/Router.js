import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
const Routers1 = () => {
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/index">
          notes
        </Link>
        <Link style={padding} to="/index">
          users
        </Link>
      </div>

      <Switch>
        <Route path="/index">
          <App></App>
        </Route>
      </Switch>

      <div>
        <i>Note app, Department of Computer Science 2020</i>
      </div>
    </Router>
  );
};

export default Routers1;
