import React, {Component} from 'react'
import ReactDom from 'react-dom';
import LikeListContainer from './LikeListContainer'

class ActivityContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <main id='activity-wrapper'>
        <LikeListContainer/>
      </main>
    )
  }

}

export default ActivityContainer;