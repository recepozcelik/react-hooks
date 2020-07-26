import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UseState from './pages/use-state'
import UseEffect from './pages/use-effect'

const Nav = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/useState">useState</Link></li>
      <li><Link to="/useEffect">useEffect</Link></li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Hooks Examples
        </p>        
      </header>
      
      <Router>
        <div>
          <Nav />
          <Route path="/useState" component={UseState} />
          <Route path="/useEffect" component={UseEffect} />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
