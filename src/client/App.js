import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import store from './store'
import {Provider} from 'react-redux'
import {HashRouter, Route, Switch} from 'react-router-dom'
import createLazyContainer from 'react-lazy-import';

const Loading = () => (
  <div style={{
    width: 'fit-content',
    height: 'fit-content',
    margin: '50% auto',
  }}>
    <CircularProgress style={{
      // height: '50%',
      // width: '50%',
    }}/>
  </div>
);

import Verify from './containers/Verify';
import CircularProgress from '@material-ui/core/CircularProgress'
import './app.css';

const SignInPageContainer = createLazyContainer(
  () => import('./containers/SignInPageContainer'), Loading);


// function lazyLoad(component) {
//   return asyncComponent(
//     () =>  import(component).then(module => module.default),
//     component
//   )
// }

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

    // this.lazyLoad = lazyLoad.bind(this);
  }


  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <main>
            <HashRouter>
              <Switch>
                <Route path='/signin' component={SignInPageContainer}/>
                <Route path='/' exact component={Verify}/>
              </Switch>
            </HashRouter>
          </main>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
