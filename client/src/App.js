import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Container } from '@material-ui/core';
import Admin from './pages/Admin';
import Message from './pages/Message';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Message} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
