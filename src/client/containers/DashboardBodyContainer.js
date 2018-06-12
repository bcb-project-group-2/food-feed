import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
}

@connect(store => {
  return store
})

class DashboardBodyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.view.index !== this.state.index) {
      this.setState({
        ...this.state,
        ...nextProps.view
      })
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.view.index !== this.state.index;
  }

  handleChangeIndex = index => {
    this.props.dispatch({type: 'SWIPE', payload: index})
  };

  render() {
    const { classes } = this.props;
    return(
      <SwipeableViews
        index={this.state.index}
        axis={this.state.index < 2 ? 'x-reverse': 'y'}
        onChangeIndex={this.handleChangeIndex}
      >
        <div style={{height: '100vh'}}>hello</div>
        <div style={{height: '100vh'}}>goodbye</div>
      </SwipeableViews>
    )
  }

}

export default withStyles(styles)(DashboardBodyContainer);