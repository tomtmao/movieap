import React from 'react';
import './app.css'
import { HashRouter as Router } from 'react-router-dom'
<<<<<<< HEAD
import Hot from "./pages/Hot"
=======
import Recent from './pages/Recent';

>>>>>>> 964ba7d9ab96114de38dc670896149652d7b9cf3
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
<<<<<<< HEAD
          <Hot/>
=======
          <Recent />
>>>>>>> 964ba7d9ab96114de38dc670896149652d7b9cf3
        </div>
      </Router>
      
    );
  }
}


export default App;
