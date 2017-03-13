import React from 'react';
import {grey700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const CustomMuiTheme = getMuiTheme({
  fontFamily: 'Muli, sans-serif',
  palette: {
    textColor: grey700
  }
});
