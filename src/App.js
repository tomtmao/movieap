import React from 'react';
import { HashRouter as Router ,Route} from 'react-router-dom'
import Address from './pages/Address';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/address' component={Address}/>
        </div>
      </Router>
      
    );
  }
}


export default App;
