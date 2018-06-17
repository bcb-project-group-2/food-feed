import React from 'react';
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import FriendFollow from '@material-ui/icons/SupervisorAccount'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText'
import CollectionPortrait from '../presentational/CollectionPortrait'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    padding: '.8rem .5rem',
    justifyContent: 'space-evenly',
  },
  listHeader: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.3rem 0',
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