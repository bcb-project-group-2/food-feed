import React, {Component} from 'react';
import {Provider} from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import store from './store'
import {Route, BrowserRouter} from 'react-router'
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
  }

  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <Route path='/' exact component={}/>
          </Provider>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
