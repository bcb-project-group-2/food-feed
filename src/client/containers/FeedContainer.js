import React, {Component} from 'react'
import FeedPost from '../presentational/FeedPost'
import CollectionContainer from './CollectionContainer'
class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section id='feed-wrapper'>
        <CollectionContainer
          Category='sushi'
        />
        <CollectionContainer
          Category='sushi'
        />
        <CollectionContainer
          Category='sushi'
        />
        <CollectionContainer
          Category='sushi'
        />
        {/*<FeedPost/>*/}
      </section>
    )
  }

}

export default FeedContainer;