import React from 'react';
import './app.css'
import { HashRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          hello world
        </div>
      </Router>
      
    );
  }
}


export default App;
