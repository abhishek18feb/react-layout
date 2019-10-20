import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AdminLogin from './Admin/Layout/Login/Login';
import Dashboard from './Admin/Component/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
