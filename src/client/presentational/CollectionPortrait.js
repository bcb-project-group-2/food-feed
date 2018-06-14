import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'

import {withStyles} from '@material-ui/core/styles'

const styles = {
  portrait: {
    margin: 'auto',
    width: '18rem',
    height: '18rem',
    borderRadius: '100%'
  },
  carousel: {
    width: '7rem',
    height: '7rem',
    borderRadius: '100%',
  },
  image: {
    paddingTop: '100%'
  },
  header: {
    textAlign: 'center'
  }
};

const CollectionPortrait = props => {

  const {classes} = props;

  return (
    <Card className={props.portrait ? classes.portrait : classes.carousel}>
      <CardMedia
        className={classes.image}
        image={props.image}
        onClick={props.handleClick}
      >
      </CardMedia>
    </Card>
  )
};

export default withStyles(styles)(CollectionPortrait)