import React from 'react';
import ReactDOM from 'react-dom';
import Main from './scenes/Main/index.jsx';
import Person from './scenes/Person/index.jsx';
import rules from './styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <main>
          <Main />          
        </main>
      </MuiThemeProvider>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);