import React from 'react';
import Main from "./component/Main"
import { HashRouter as Router} from 'react-router-dom'

import MovieDay from "./pages/Movie/MovieDay"

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <Main></Main> */}
        <MovieDay></MovieDay>
      </Router>
    );
  }
}

export default App;