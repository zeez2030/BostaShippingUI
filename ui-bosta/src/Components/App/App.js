import React from 'react';
import { Route } from 'react-router-dom'
import Navbar from '../../shared/Navbar/Navbar';
import Home from '../Home/Home';
import Track from '../Track/Track'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Track} />
    </div>
  );
}

export default App;
