import React from 'react';
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import FriendFollow from '@material-ui/icons/SupervisorAccount'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  listHeader: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between'
  },
  image: {
    paddingTop: '50%'
  }
};

const LikeListItem = props => {
  const {classes} = props;

  return (
    <ListItem>
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
      <CardMedia
        className={classes.image}
        image={props.image}
      />
    </ListItem>
  )
};

export default withStyles(styles)(LikeListItem)