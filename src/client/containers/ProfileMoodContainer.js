import React, {Component} from 'react'
import CollectionContainer from './CollectionContainer'

class ProfileMoodContainer extends Component {
  constructor(props) {
    super(props);
  }

  selectMoods() {
    return this.props.moods
      .map(mood => <CollectionContainer category={mood}/>)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.moods !== nextProps.moods;
  }

  render() {
    return(
      <div
        style={{padding: '0 .5rem'}}
        className='profile-post-section'
      >
        {this.selectMoods()}
      </div>
    )
  }

}

export default ProfileMoodContainer;