import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Address from './pages/Address';
import Hot from "./pages/Hot"
import Recent from './pages/Recent';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Hot />
          <Recent />
          <Route path='/address' component={Address} />
        </div>
      </Router>

    );
  }
}

export default App;