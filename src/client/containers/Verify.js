import React, {Component} from 'react'
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress'
import { Redirect } from 'react-router-dom'

// @connect(store => {
//   return store;
// })

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: 'signin'
    }
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={'/signin'}/>
    }

    return (
      <div style = {{
        width: 'fit-content',
        height: 'fit-content',
        margin: '50% auto',
      }}>
        <CircularProgress style={{
          // height: '50%',
          // width: '50%',
        }}/>
      </div>
    )
  }
}

export default Verify;