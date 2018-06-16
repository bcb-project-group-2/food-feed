import React from 'react';
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import FriendFollow from '@material-ui/icons/SupervisorAccount'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CollectionPortrait from '../presentational/CollectionPortrait'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    width: 'fit-content',
    margin: 0,
  },
  listHeader: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between'
  },
};

const LikeListItem = props => {
  const {classes} = props;
  console.log(props);

  return (
    <ListItem className={classes.container}>
      <div className={classes.listHeader}>
        <ListItemIcon>
          <Favorite/>
        </ListItemIcon>
        <ListItemText>
          <Typography
            component='h3'
            variant='headline'
          >
            {props.message}
          </Typography>
        </ListItemText>
      </div>
      <CollectionPortrait
        portrait={false}
        image='https://pbs.twimg.com/profile_images/451207149478096896/HoMUOmyu_400x400.jpeg'
      />

    </ListItem>
  )
};

export default withStyles(styles)(LikeListItem)