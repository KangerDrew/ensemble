import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  const [state, setState] = useState({
    genres: [],
    currentUser: undefined
  });

  useEffect(() => {
    axios.get('/api/genres').then((all) => {
      const genres = all.data;
      setState((prev) => ({ ...prev, genres }));
    });
  }, []);

  return (
    <main className="layout">
      <Router>
        <Navbar user={state.currentUser} setState={setState} />
        <Switch>
          <Route path="/users/:userId" component={UserProfile} />
          <Route path="/login">
            <h1>This is for login</h1>
            <Login setState={setState} />
          </Route>
          <Route path="/signup">
            <h1>This is for signup</h1>
            <Signup />
          </Route>
          <Route path="/" exact>
            <h1>Blank Homepage</h1>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
