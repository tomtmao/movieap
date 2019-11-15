import React from 'react';
import './app.css'
import { HashRouter as Router } from 'react-router-dom'
import Hot from "./pages/Hot"
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Hot/>
        </div>
      </Router>
      
    );
  }
}


export default App;
