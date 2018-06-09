import React, {Component} from 'react';
import {Provider} from 'react-redux'
import Layout from './containers/Layout'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import store from './store'
import './app.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#CFD8DC',
      main: '#607D8B',
      dark: '#455A64',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Layout/>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
