import React from 'react';
import './app.css'
import { HashRouter as Router } from 'react-router-dom'
import Recent from './pages/Recent';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Recent />
        </div>
      </Router>
      
    );
  }
}


export default App;
