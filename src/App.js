import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/pages/landing-page';
import ProtectedPage from './components/pages/protected-page';
import './App.css';

function App() {
  return (
    <div> 
      <Route exact path="/"  render={(props) => (
        <LandingPage />)
      }/>
      <Route exact path="/create-lesson" render={(props) => (
          <ProtectedPage key={props.match.params.pageid} {...props} />)
        } />
    </div>
  );
}

export default App;
