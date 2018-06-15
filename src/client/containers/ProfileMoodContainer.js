import React, {Component} from 'react'
import CollectionContainer from './CollectionContainer'

class ProfileMoodContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div
        style={{padding: '0 .5rem'}}
        className='profile-post-section'
      >
        <CollectionContainer
          category='sushi'
        />
        <CollectionContainer
          category='sushi'
        />
        <CollectionContainer
          category='sushi'
        />
        <CollectionContainer
          category='sushi'
        />
        <CollectionContainer
          category='sushi'
        />
        <CollectionContainer
          category='sushi'
        />
        <CollectionContainer
          category='sushi'
        />

      </div>
    )
  }

}

export default ProfileMoodContainer;