import React from 'react';
import ReactDOM from 'react-dom';
import Main from './scenes/Main/index.jsx';
import Person from './scenes/Person/index.jsx';
import rules from './styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <Router basename='/dist'>
        <MuiThemeProvider>
          <main>
            <Route exact path='/' component={Main} />
            <Route path='/:name' component={Person} />
          </main>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);