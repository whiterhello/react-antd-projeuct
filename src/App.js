import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './page/login'
import Home from './page/home'


function App() {
  return (
    <Router>
       <Switch>
          <Route 
            path="/login"
            component={Login}
          ></Route>
          <Route
            path="/"
            component={Home}
          ></Route>
       </Switch>
    </Router>
  );
}

export default App;
