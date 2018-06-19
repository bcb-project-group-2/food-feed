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
    this.state = {
      likedPosts: []
    }
  }

  displayPosts() {
    if (!!this.props.posts) {
      return this.props.posts.map(post => <FeedPost {...post}/>)
    }
    else {
      return (
        <Typography
          style={{
            width: '100%',
            textAlign: 'center',
          }}
          variant='subheading'
        >
          {'No Posts To Show :{'}
        </Typography>
      )
    }
  }

  displayLikedPosts() {
    if (!!this.state.likedPosts) {
      console.log('liked', this.state.likedPosts);
      return this.state.likedPosts.map(post => <FeedPost {...{...post, l: true}} />)
    }
    else {
      return (
        <Typography
          style={{
            width: '100%',
            textAlign: 'center',
          }}
          variant='subheading'
        >
          {'No Posts To Show :{'}
        </Typography>
      )
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     this.props.posts !== nextProps.posts ||
  //     this.props.likedPosts !== nextProps.likedPosts ||
  //     this.state !== nextState
  //   );
  // }

  componentWillReceiveProps(nextProps) {
    nextProps.likedPosts.then(posts => {
      this.setState({
        likedPosts: posts
      })
    })
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
          {this.displayPosts()}
        </div>
        <div className='profile-post-section'>
          <div className={classes.smallHeader}>
            <hr className={classes.horizontals}/>
            <Typography component='h3' variant="headline">
              Liked Posts
            </Typography>
            <hr className={classes.horizontals}/>
          </div>
          {this.displayLikedPosts()}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ProfilePostsContainer);