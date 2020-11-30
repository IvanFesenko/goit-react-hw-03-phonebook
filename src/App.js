import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }

  render() {
    return <div className={styles.container}></div>;
  }
}

export default App;
