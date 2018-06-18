import React, {Component} from 'react';
import {connect} from 'react-redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CollectionPortrait from '../presentational/CollectionPortrait'
import SwipeableViews from 'react-swipeable-views'
import CreateLazyContainer from 'react-lazy-import'
import Loading from '../presentational/Loading'
import {withStyles} from '@material-ui/core/styles'

const ProfilePostsContainer = CreateLazyContainer(
  () => import('./ProfilePostsContainer'), Loading);
const ProfileMoodContainer = CreateLazyContainer(
  () => import('./ProfileMoodContainer'), Loading);

const styles = {
  profilePortrait: {
    display: 'flex',
    flexFlow: 'column nowrap',
    fontSize: '2rem',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#f6f6f6'
  },
  bodyBar: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
  }
};

@connect(store => store)
class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      userPosts: [],
    };

    this.handleSwipe = this.handleSwipe.bind(this)
  }

  handleSwipe(event, index) {
    this.setState({
      index
    })
  }

  getUserPosts() {
    let userPosts = [];
    Object.values(this.props.post.moodPosts).forEach(mood => {
      userPosts = [
        ...userPosts,
        ...mood.filter(post => post.id === this.props.user.currentUser.id)
      ]
    });
    this.setState({
      userPosts
    })
  }

  render() {
    const {index} = this.state;
    const {classes} = this.props;

    if (this.props.user.currentUser) {
      return (
        <div id='profile-wrapper'>
          <div
            id='profile-portrait'
            className={classes.profilePortrait}
          >
            <CollectionPortrait
              image={this.props.user.currentUser.profile_picture || null}
              portrait='true'
              center={false}
            />
            <div>
              <Typography component='h2' variant='headline' style={{fontSize: 'inherit'}}>
                {this.props.user.currentUser.user_name}
              </Typography>
              <Typography component='h2' variant='subheading'>
                {this.state.userPosts.length} Posts | 3 Followers | 7 Following
              </Typography>
            </div>
            <Button variant='contained' color='primary'>
              follow
            </Button>
          </div>
          <div
            id='profile-body'
          >
            <AppBar
              id='profile-body-bar'
              className={classes.bodyBar}
              color='secondary'
              position='static'
            >
              <Tabs
                className={classes.tabs}
                value={index}
                indicatorColor='primary'
                onChange={this.handleSwipe}
              >
                <Tab className={classes.tab} label='posts'/>
                <Tab className={classes.tab} label='moods'/>
              </Tabs>
            </AppBar>
            <SwipeableViews
              index={index}
              axis={'x'}
              onChangeIndex={index => this.handleSwipe(null, index)}
              style={{overflow: 'hidden'}}
            >
              <ProfilePostsContainer/>
              <ProfileMoodContainer/>
            </SwipeableViews>
          </div>
        </div>
      )
    }
    else {
      return null
    }
  }
}

export default withStyles(styles)(ProfileContainer);