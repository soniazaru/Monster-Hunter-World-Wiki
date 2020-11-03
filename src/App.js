import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import Armor from './Armor.js';
import Monster from './Monster.js';
import WhatMonsterAreYou from './WhatMonsterAreYou.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';
import ToggleTheme from './ToggleTheme.js'

function App() {

  let initialState = {
    darkTheme: false
  }

  let store = createStore(reducer, initialState)

  return (
    <div>
      <img
        className="copertina"
        src="https://i.pinimg.com/originals/c5/af/f1/c5aff1056f6f0f4aa79652c0ef328f00.jpg"
      />
      <Tabs defaultActiveKey="armors">
        <Tab eventKey="armors" title="Armors">
          <Armor />
        </Tab >
        <Tab eventKey="monsters" title="Monsters">
          <Monster />
        </Tab >
        <Tab eventKey="wmay" title="What Monster Are You">
          <WhatMonsterAreYou />
        </Tab >
        <Tab eventKey="darktheme" title="Async/Await e Redux">
          <Provider store={store}>
            <ToggleTheme />
          </Provider>
        </Tab >
      </Tabs>
    </div>
  );
}

export default App;
