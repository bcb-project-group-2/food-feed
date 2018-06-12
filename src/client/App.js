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
import('./app.css');

const SignInPageContainer = createLazyContainer(
  () => import('./containers/SignInPageContainer'), Loading);
const UserDashboardContainer = createLazyContainer(
  () => import('./containers/UserDashboardContainer'), Loading);
// import UserDashboardContainer from "./containers/UserDashboardContainer";


const theme = createMuiTheme({
  palette: {
    secondary: {
      light: '#df78ef',
      main: '#ab47bc',
      dark: '#790e8b',
      contrastText: '#FFFFFF',
    },
    primary: {
      light: '#b084f4',
      main: '#7e56c1',
      dark: '#4d2b90',
      contrastText: '#FFFFFF',
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
                <Route path='/dashboard' component={UserDashboardContainer}/>
                <Route path='/' exact component={Verify}/>
              </Switch>
            </HashRouter>
          </main>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
