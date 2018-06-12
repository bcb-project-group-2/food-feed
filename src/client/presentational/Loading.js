import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = () => (
  <div style={{
    width: 'fit-content',
    height: 'fit-content',
    margin: '8rem auto',
  }}>
    <CircularProgress style={{
      // height: '50%',
      // width: '50%',
    }}/>
  </div>
);

export default Loading
