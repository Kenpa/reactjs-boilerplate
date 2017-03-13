import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import firebase from 'firebase';

import { FIREBASE_CONFIG } from '../config/config';
import { CustomMuiTheme } from '../themes.js';

export default class App extends Component {
  componentWillMount() {
    //firebase.initializeApp(FIREBASE_CONFIG);
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={CustomMuiTheme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
};
