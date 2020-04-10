import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './page/login'
import Admin from './page/admin'

function App() {
  return (
    <Router>
       <Switch>
          <Route 
            path="/login"
            component={Login}
          ></Route>
          <Route
            exact
            path="/"
            component={Admin}
          ></Route>
       </Switch>
    </Router>
  );
}

export default App;
