import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    padding: '.5rem',
    justifyContent: 'space-evenly',
  },
  listHeader: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.3rem 0',
  },
};

const Follower = props => {
  const {classes} = props;
  return(
    <ListItem className={classes.container}>
      <div className={classes.listHeader}>
        <Avatar>
          <IconButton>
            <AccountCircle/>
          </IconButton>
        </Avatar>
        <ListItemText
          style={{width: 'fit-content'}}
        >
          <Typography
            component='h3'
            variant='headline'
            style={{width: 'fit-content'}}
          >
            {props.message}
          </Typography>
        </ListItemText>
      </div>
    </ListItem>
  )
};


export default withStyles(styles)(Follower)