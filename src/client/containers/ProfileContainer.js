import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CollectionPortrait from '../presentational/CollectionPortrait'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  // userSection: {
  //   display: 'grid',
  //   gridTemplateColumns: '50% 50%',
  //   gridTemplateRows: 'auto'
  // }
  profilePortrait: {
    display: 'flex',
    flexFlow: 'column nowrap',
    fontSize: '2rem',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: '#a8a8a8'
  }
};

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div id='profile-wrapper'>
        <Card
          id='profile-portrait'
          className={classes.profilePortrait}
        >
          <CollectionPortrait
            image='http://i0.kym-cdn.com/photos/images/original/001/037/327/1e5.jpg'
            portrait='true'
            center={false}
          />
          <Typography component='h2' style={{fontSize: 'inherit'}}>
            Username
          </Typography>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ProfileContainer);