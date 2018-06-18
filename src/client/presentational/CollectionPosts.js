import React from 'react';
import FeedPost from './FeedPost';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  posts: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    padding: '1rem 0',
  },
};

const CollectionPosts = props => {
  const {classes} = props;
  return(
    <div className={classes.posts}>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
    </div>
  )
};

export default withStyles(styles)(CollectionPosts)