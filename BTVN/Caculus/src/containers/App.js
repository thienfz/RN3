import React, { Component } from 'react';

import Main from '../components/Main'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from '../reducers'

const store = createStore(rootReducer)

class Caculus extends Component {
  state = {
  }
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default Caculus;