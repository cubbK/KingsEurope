import React from 'react';
import ReactDOM from 'react-dom';
import Main from './scenes/Main/index.jsx';
import styles from './style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.color}>Heloo from App</h1>
        <Main />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);