import React from 'react';
import './app.css'
import { HashRouter as Router } from 'react-router-dom'
import Search from './Search'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Search/>
        </div>
      </Router>
      
    );
  }
}


export default App;
