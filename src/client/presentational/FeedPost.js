import React, {Component} from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import {Favorite, FavoriteBorder, MoreHoriz} from '@material-ui/icons'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  posts: {
    minWidth: '23%',
    padding: '.5rem',
    margin: 'auto',
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  moreIcon: {
    color: '#ffffff',
    float: 'right',
    marginRight: '.5rem',
  },
  top: {
    position: 'relative',
  },
  favIcon: {
    width: '30px'
  }
};

@connect(store => store)
class FeedPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: false
    };
    this.reRender = false;

    this.favorite = this.favorite.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }

  handleModalOpen(id) {
    this.props.dispatch({type: 'TOGGLE_MODAL'})
  }

  buttonFill(classes) {
    return this.state.fav ?
      <Favorite className={classes.favIcon}/>
      : <FavoriteBorder className={classes.favIcon}/>;
  }

  favorite() {
    this.reRender = true;
    this.setState({
      fav: !this.state.fav
    })
  }

  shouldComponentUpdate(nextProps) {
    if (this.reRender) {
      this.reRender = false;
      return true;
    }
    return false;
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.posts} style={{animation: 'fadein 200ms'}}>
        <Card className={classes.card}>
          <div>
            <MoreHoriz
              className={classes.moreIcon + ' ' + 'post-more'}
              onClick={this.handleModalOpen}
            />
          </div>
          <CardMedia
            className={classes.media}
            image={this.props.url}
            title=""
          />
          <CardContent style={{paddingBottom: 0}}>
            <Typography
              element='h4'
              style={{
                borderBottom: 'solid 1px gray',
                paddingBottom: '.4rem',
              }}
            >
              {this.props.title}
            </Typography>
            <Typography element='p'>
              {this.props.description || 'Food feed for your friends and your food. Do not fret my child, the food has come to feed'}
            </Typography>
            <div style={{display: 'flex', flexFlow: 'row-reverse nowrap'}}>
              <IconButton onClick={this.favorite} disableRipple={true}>
                {this.buttonFill(classes)}
              </IconButton>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(FeedPost);