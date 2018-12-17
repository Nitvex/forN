import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './styles.scss';
import Text from '../Text';
import Lines from '../Lines';
import configureStore from '../../configureStore.js';

const store = configureStore();

export default class App extends Component {
  render () {
    return <Provider store={store}>
        <div className="container">
          <div className="column">
            <div className="cont">
              <div className="item output">Output</div>
              <div className="item input">Input</div>
              <button className="item btn">Upload</button>
            </div>
            <Text />
          </div>
          <Lines store={store} />          
        </div>
      </Provider>;
  }
}
