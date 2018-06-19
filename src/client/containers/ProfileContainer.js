import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {getUserCreatedPosts} from "../actions/posts";
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
    backgroundColor: '#f6f6f6',
    transition: 'opacity 400ms',
    animation: 'fadein 400ms'
  },
  bodyBar: {
    animation: 'fadein 400ms',
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
      likedPosts: [],
    };

    this.handleSwipe = this.handleSwipe.bind(this)
  }

  handleSwipe(event, index) {
    this.setState({
      ...this.state,
      index
    })
  }

  deriveMoods() {
    let moods = [];
    this.state.userPosts
      .forEach(post => {
        if (!moods.includes(post.category)) {
          moods.push(post.category)
        }
      });
    return moods;
  }

  getLikedPosts() {
    return new Promise(resolve => {
      axios.get('/api/likes/liked/' + this.props.owner.id)
        .then(res => {
          resolve(res.data.map(item => item.Post))
        })
        .catch(e => {
          console.log(e);
          resolve(null)
        })
    })
  }

  componentDidMount() {
    this.props.dispatch(getUserCreatedPosts(this.props.owner.id))
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (
      nextProps.owner.posts !== this.state.userPosts ||
      this.props.owner.likes !== nextProps.user.likes
    ) {
      this.setState({
        ...this.state,
        userPosts: nextProps.owner.posts,
        likedPosts: this.getLikedPosts(),
      })
    }
  }

  render() {
    const {index} = this.state;
    const {classes} = this.props;

    if (this.props.owner) {
      return (
        <div id='profile-wrapper'>
          <div
            id='profile-portrait'
            className={classes.profilePortrait}
          >
            <CollectionPortrait
              image={this.props.owner.profile_picture || null}
              portrait='true'
              center={false}
            />
            <div>
              <Typography component='h2' variant='headline' style={{fontSize: 'inherit'}}>
                {this.props.owner.user_name}
              </Typography>
              <Typography component='h2' variant='subheading'>
                {this.state.userPosts ? this.state.userPosts.length : 0} Posts | 3 Followers | 7 Following
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
              <ProfilePostsContainer
                posts={this.state.userPosts}
                likedPosts={this.state.likedPosts}
              />
              <ProfileMoodContainer
                moods={this.deriveMoods()}
              />
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