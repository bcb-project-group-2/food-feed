import React, {Component} from 'react'

import List from '@material-ui/core/List'
import Follower from '../presentational/Follower'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

const styles = {
  posts: {
    width: '100%',
    overflow: 'auto',
    textAlign: 'center',
    padding: '0 .5rem'
  },
  list: {
    width: '100%',
    height: '70vh',
    overflow: 'auto',
  },
  header: {
    borderBottom: 'solid 1px gray'

  }
};

class FollowerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div id={this.props.type + '-container'}>
        <Card className={classes.posts}>
          <CardHeader className={classes.header} title={this.props.type}/>
          <List className={classes.list}>
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
            <Follower
              message='Follower'
            />
          </List>
        </Card>
      </div>
    )
  }
}


export default withStyles(styles)(FollowerContainer);