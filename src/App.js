import React, { Component } from 'react';

import Button from './components/Button/';
import Topper from './components/Topper/';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Topper></Topper>
        <h2>Buttons</h2>
        <Button space>Button</Button>
        <Button primary space disabled>Primary Button</Button>
        <Button warning space>Warning Button</Button>
        <Button error space>Error Button</Button>
        <Button block>Full Width Button</Button>
        <h3>Large Buttons</h3>
        <Button space size="large">Large Default</Button>
        <Button space primary size="large">Large Primary</Button>
        <Button space warning size="large">Large Warning</Button>
        <Button space error size="large">Large Error</Button>
      </React.Fragment>
    );
  }
}

export default App;
