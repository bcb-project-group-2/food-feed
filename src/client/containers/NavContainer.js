import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import VerifiedUser from '@material-ui/icons/PhotoCamera'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'

const styles = {
  container: {
    padding: '0 .5rem 0 .5rem ',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabs: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: 'fit-content',
    justifyContent: 'center',
  },
  tab: {
    padding: '.3rem 0',
  },
  userIcon: {},
  title: {
    color: '#FFFFFF',
    fontSize: '1.5rem'
  }
};

@connect(store => {
  return store
})
class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  handleChange = (event, index) => {
    if (this.state.index !== index) {
      this.props.dispatch({type: 'SWIPE', payload: index});
      // this.setState({index});
    }
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.view.index !== this.state.index) {
      this.setState({
        ...this.state,
        ...nextProps.view
      })
    }
  }

  render() {

    const {classes} = this.props;
    const {index} = this.state;

    return (
      <header id='nav-container-wrapper'>
        <AppBar className={classes.container}>
          <Typography className={classes.title} component='h3' color='#FFFFFF'>
            #FoodFeed
          </Typography>
          <Tabs className={classes.tabs} value={index} onChange={this.handleChange}>
            <Tab className={classes.tab} label='Feed'/>
            <Tab className={classes.tab} label='activity'/>
          </Tabs>
          <IconButton
            onClick={() => this.props.dispatch({type: 'SWIPE', payload: 2})}
          >
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