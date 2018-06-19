import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import Typography from '@material-ui/core/Typography';
import PostModal from './PostModal'
import UploadModal from './UploadModal'
import createLazyContainer from 'react-lazy-import';
import Loading from '../presentational/Loading'
import axios from 'axios'

const FeedContainer = createLazyContainer(
  () => import('./FeedContainer'), Loading);
const ProfileContainer = createLazyContainer(
  () => import('./ProfileContainer'), Loading);
const ActivityContainer = createLazyContainer(
  () => import('./ActivityContainer'), Loading);


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
}

@connect(store => {
  return store
})

class DashboardBodyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    }
  };

  componentDidMount() {
    if (!this.props.user.currentUser.id) {
      if (!localStorage.id) {
        window.location = '/'
      }
      else {
        axios.get(`/api/users/${localStorage.id}`).then(res => {
          console.log('response', res.data);
          this.props.dispatch({
            type: 'AUTHENTICATE_USER_SUCCESS',
            payload: res.data,
          })
        })
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.view.index !== this.state.index) {
      this.setState({
        index: nextProps.view.index
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.view.index !== this.state.index ||
      this.props.user.currentUser !== nextProps.user.currentUser ||
      this.props.user.currentUser.posts !== nextProps.user.currentUser.posts
  }

  handleChangeIndex = index => {
    this.props.dispatch({type: 'SWIPE', payload: index})
  };

  render() {
    const {classes} = this.props;
    if (this.props.user.currentUser.id) {
      return (
        <div id='swipe-container'>
          <SwipeableViews
            index={this.state.index}
            axis={'x'}
            onChangeIndex={this.handleChangeIndex}
          >
            <FeedContainer/>
            <ActivityContainer/>
            <ProfileContainer owner={this.props.user.currentUser}/>
          </SwipeableViews>
          <PostModal/>
          <UploadModal/>
        </div>
      )
    }
    else {
      return <Loading/>
    }
  }
}


export default withStyles(styles)(DashboardBodyContainer);