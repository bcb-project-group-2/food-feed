import React, {Component} from 'react'
import LikeListContainer from './LikeListContainer'
import FollowerContainer from './FollowerContainer' ;

class ActivityContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return false
  }

  render() {
    return(
      <main id='activity-wrapper'>
        <LikeListContainer/>
        <FollowerContainer
        type='followers'
        />
        <FollowerContainer
          type='following'
        />
      </main>
    )
  }

}

export default ActivityContainer;