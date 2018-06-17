import React, {Component} from 'react'
import List from '@material-ui/core/List'
import LikeListItem from '../presentational/LikeListItem'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

const styles = {
  container: {
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

class LikeListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div id='likes-container'>
        <Card className={classes.container}>
          <CardHeader className={classes.header} title={'Recent'}/>
          <List className={classes.list}>
            <LikeListItem
              message='blank liked your post'
              image='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/21740271_1667397943294862_8473701331986764569_n.jpg?_nc_cat=0&oh=3207c3f37d7c640b3ed57cf91464b50f&oe=5BA326C2'
            />
            <LikeListItem
              message='blank liked your post'
              image='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/21740271_1667397943294862_8473701331986764569_n.jpg?_nc_cat=0&oh=3207c3f37d7c640b3ed57cf91464b50f&oe=5BA326C2'
            />
            <LikeListItem
              message='blank liked your post'
              image='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/21740271_1667397943294862_8473701331986764569_n.jpg?_nc_cat=0&oh=3207c3f37d7c640b3ed57cf91464b50f&oe=5BA326C2'
            />
            <LikeListItem
              message='blank liked your post'
              image='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/21740271_1667397943294862_8473701331986764569_n.jpg?_nc_cat=0&oh=3207c3f37d7c640b3ed57cf91464b50f&oe=5BA326C2'
            />
            <LikeListItem
              message='blank liked your post'
              image='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/21740271_1667397943294862_8473701331986764569_n.jpg?_nc_cat=0&oh=3207c3f37d7c640b3ed57cf91464b50f&oe=5BA326C2'
            />
            <LikeListItem
              message='blank liked your post'
              image='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/21740271_1667397943294862_8473701331986764569_n.jpg?_nc_cat=0&oh=3207c3f37d7c640b3ed57cf91464b50f&oe=5BA326C2'
            />
            <LikeListItem
              message='blank liked your post'
              image='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/21740271_1667397943294862_8473701331986764569_n.jpg?_nc_cat=0&oh=3207c3f37d7c640b3ed57cf91464b50f&oe=5BA326C2'
            />
            <LikeListItem
              message='blank liked your post'
              image='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/21740271_1667397943294862_8473701331986764569_n.jpg?_nc_cat=0&oh=3207c3f37d7c640b3ed57cf91464b50f&oe=5BA326C2'
            />
          </List>
        </Card>
      </div>
    )
  }

}

export default withStyles(styles)(LikeListContainer);