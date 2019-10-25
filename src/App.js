import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Admin from './Admin/Admin';
import AdminLogin from './Admin/Layout/Login/Login';
import FrontLayout from './Web/Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/admin" component={Admin} />
          <Route path="/" component={FrontLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
