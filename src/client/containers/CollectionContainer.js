import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getPostsByMood } from "../actions/posts";
import CollectionPortrait from '../presentational/CollectionPortrait';
import FeedPost from '../presentational/FeedPost'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';


const styles = {
  posts: {
    padding: '1.5rem 0',
    width: '100%',
  },
  collectionTitle: {
    width: 'fit-content',
    padding: '.5rem 1rem',
    fontSize: '2rem'
  },
  divider: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontal: {
    width: '100%',
    height: '1px',
    background: 'black',
  },
  carousel: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly',
  },
  expandButton: {
    padding: '1rem 0',
    fontSize: '1rem',
    color: 'gray',
    borderBottom: 'solid 1px black',
    textAlign: 'center',
  },
  expandable: {
    height: 0,
    overflow: 'hidden',
  },
  expanded: {
    // maxHeight: 'initial',
    // animation: 'expand 300ms',
    height: '100%',
    overflow: 'hidden',
  },
  postContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    padding: '1rem 0',
  },
};

@connect(store => store)
class CollectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      offset: 0,
    };

    this.expand = this.expand.bind(this);
  }

  mainPortraitClick() {
    console.log('main clicked')
  }

  expand() {
    this.setState({expanded: !this.state.expanded})
  }

  createPosts() {
    if (this.props.post.moodPosts[this.props.category]) {
      return this.props.post.moodPosts[this.props.category].map(post => (
        <FeedPost
          {...post}
        />
      ))
    }
  }

  getImages() {
    //do some redux stuff, get urls
  }

  componentDidMount() {
    this.props.dispatch(getPostsByMood(this.props.category, this.state.offset))
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.post.moodPosts[this.props.category]
  //     !== this.props.post.moodPosts[this.props.category]) {
  //
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    return(
      nextProps.post.moodPosts[this.props.category] !==
      this.props.post.moodPosts[this.props.category] ||
        this.state !== nextState
    )
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classNames('collection-container', classes.posts)}>
        <div className={'collection-main'}>
          <CollectionPortrait
            // image={this.props.mainImage}
            image='https://www.healthyfood.co.nz/wp-content/uploads/2017/03/Sushi_in_10_steps-2000x1332.jpg'
            handleClick={this.mainPortraitClick}
            portrait={true}
            center={true}
          />
          <div className={classes.divider}>
            <hr className={classes.horizontal}/>
            <Typography component='h2' className={classes.collectionTitle}>
              {this.props.category}
            </Typography>
            <hr className={classes.horizontal}/>
          </div>
        </div>
        <div className={classes.carousel}>
          <CollectionPortrait
            // image={this.props.mainImage}
            image='https://natashaskitchen.com/wp-content/uploads/2013/10/Sushi-Rice-and-California-Rolls-3-1-600x900.jpg'
            handleClick={this.mainPortraitClick}
            portrait={false}
            center={true}
          />
          <CollectionPortrait
            // image={this.props.mainImage}
            image='http://iamafoodblog.com/wp-content/uploads/2017/10/untitled-1953.jpg'
            handleClick={this.mainPortraitClick}
            portrait={false}
            center={true}
          />
          <CollectionPortrait
            // image={this.props.mainImage}
            image='http://www.latimes.com/resizer/NkvSEc6uY39eX4CLyszBZkOkdYU=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/2PS3JQDYNNG27HIWBTQZNZC7UE.jpg'
            handleClick={this.mainPortraitClick}
            portrait={false}
            center={true}
          />
          <CollectionPortrait
            // image={this.props.mainImage}
            image='https://hips.hearstapps.com/del.h-cdn.co/assets/18/04/1516666104-delish-greek-sushi-stills-2.jpg'
            handleClick={this.mainPortraitClick}
            portrait={false}
            center={true}
          />
        </div>
        <div className={classes.expandButton}>
          <Typography
            component='h3'
            style={{fontSize: 'inherit', color: 'inherit', cursor: 'pointer'}}
            onClick={this.expand}
          >
            Expand
          </Typography>
        </div>
        <div style={{height: 'auto'}}>
          <div
            className={classNames(this.state.expanded ? classes.expanded : classes.expandable, 'expandable-collection')}>
            <div className={classes.postContainer}>
              {this.createPosts()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CollectionContainer);