import React, {Component} from 'react';
import CollectionContainer from './CollectionContainer';
import Loading from '../presentational/Loading'
import { connect } from 'react-redux';
import {getLikesByPost, getLikesByUser, getMoods} from '../actions/posts'

@connect(store => store)
class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: [],
    }
  }

  componentDidMount() {
    this.props.dispatch(getMoods());
    this.props.dispatch(getLikesByPost());
    this.props.dispatch(getLikesByUser(this.props.user.currentUser.id))
  }

  createCollections() {
    if (this.state.moods) {
      return this.state.moods.map((mood, index) => (
        <CollectionContainer category={mood} key={index}/>
      ))
    }
    else {
      return <Loading/>
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.moods !== nextProps.post.allMoods) {
      this.setState({moods: nextProps.post.allMoods})
    }
  }

  componentDidUpdate(nextProps, nextState) {
    return this.state.moods !== nextProps.post.allMoods;

  }

  render() {
    return(
      <section id='feed-wrapper'>
        {this.createCollections()}
      </section>
    )
  }

}

export default FeedContainer;