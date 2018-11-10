import React, { Component } from 'react';
import Header from './Header';
import SideBare from './SideBare';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header caption="SampleWeb" />
          <SideBare>
              <ul>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                  <li>Menu 3</li>
                  <li>Menu 4</li>
              </ul>
          </SideBare>
      </div>
    );
  }
}

export default App;
