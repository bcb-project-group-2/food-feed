import React, {Component} from 'react';
import Card from '@material-ui/core/CardHeader'
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
  // userSection: {
  //   display: 'grid',
  //   gridTemplateColumns: '50% 50%',
  //   gridTemplateRows: 'auto'
  // }
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

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }

    this.handleSwipe = this.handleSwipe.bind(this)
  }

  handleSwipe(event, index) {
    this.setState({
      index
    })

  }

  render() {
    const {index} = this.state;
    const {classes} = this.props;

    return (
      <div id='profile-wrapper'>
        <div
          id='profile-portrait'
          className={classes.profilePortrait}
        >
          <CollectionPortrait
            image='http://i0.kym-cdn.com/photos/images/original/001/037/327/1e5.jpg'
            portrait='true'
            center={false}
          />
          <div>
            <Typography component='h2' variant='headline' style={{fontSize: 'inherit'}}>
              Benoctopus
            </Typography>
            <Typography component='h2' variant='subheading'>
              7 Posts | 3 Followers | 7 Following
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
            axis={'x-reverse'}
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
}

export default withStyles(styles)(ProfileContainer);