import React from 'react';
import { Route, Link } from 'react-router-dom';
import Pravachans from './containers/pravachans.container';


class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Link to="/pravachans">Pravachans</Link>
        <hr />
        <Route exact path='/pravachans/' component={Pravachans} />
      </React.Fragment>
    );
  }
}

export default App;
