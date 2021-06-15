import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Artists from './components/pages/Artists';
import Songs from './components/pages/Songs';
import SignUp from './components/pages/SignUp';
import Lyrics from './components/pages/Lyrics';
import Results from './components/pages/Results';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/songs" component={Songs} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/artists" component={Artists} /> 
          <Route path="/lyrics/:id" component={Lyrics} />
          <Route path="/results/:keyword" component={Results} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
