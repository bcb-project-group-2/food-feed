import React, {Component} from 'react'
import FeedPost from '../presentational/FeedPost'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  smallHeader: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
    // padding: '.5rem 0',
  },
  horizontals: {
    width: '30%',
    margin: '0 .5rem',
  },
};

class ProfilePostsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div id='profile-posts-container'>
        <div className='profile-post-section'>
          <div className={classes.smallHeader}>
            <hr className={classes.horizontals}/>
            <Typography component='h3' variant="headline">
              Your Posts
            </Typography>
            <hr className={classes.horizontals}/>
          </div>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
        </div>
        <div className='profile-post-section'>
          <div className={classes.smallHeader}>
            <hr className={classes.horizontals}/>
            <Typography component='h3' variant="headline">
              Liked Posts
            </Typography>
            <hr className={classes.horizontals}/>
          </div>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ProfilePostsContainer);