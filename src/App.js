import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { StartTest } from './components/StartTest';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
    <Route exact path="/" component={Home} />
    <Route exact path="/StartTest" component={StartTest} />
  </BrowserRouter>
    </div>
  );
}

export default App;