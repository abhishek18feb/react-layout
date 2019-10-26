import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Admin from './Admin/Admin';
import AdminLogin from './Admin/Layout/Login/Login';
import FrontLayout from './Web/Layout/Layout';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          
          <Route path="/admin" component={Admin} />
          <Route path="/" component={FrontLayout} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
