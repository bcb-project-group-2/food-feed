import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'

const styles = {
  container: {
    padding: '0 .5rem 0 .5rem ',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: 'fit-content',
    justifyContent: 'center',
  },
  userIcon: {},
  title: {
    color: '#FFFFFF',
    fontSize: '1.5rem'
  }
};


class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({location: value});
  };

  render() {

    const {classes} = this.props;
    const {location} = this.state;

    return (
      <header id='nav-container-wrapper'>
        <AppBar className={classes.container}>
          <Typography className={classes.title} component='h3' color='#FFFFFF'>
            #FoodFeed
          </Typography>
          <Tabs className={classes.nav} value={location} onChange={this.handleChange}>
            <Tab label='Feed'/>
            <Tab label='activity'/>
          </Tabs>
          <IconButton>
            <Avatar>
              <VerifiedUser className={classes.userIcon}/>
            </Avatar>
          </IconButton>
        </AppBar>
      </header>
    )

  }

}

export default withStyles(styles)(NavContainer);