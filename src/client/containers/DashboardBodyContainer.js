import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import Typography from '@material-ui/core/Typography';
// import FeedContainer from './FeedContainer'
import createLazyContainer from 'react-lazy-import';
import Loading from '../presentational/Loading'

const FeedContainer = createLazyContainer(
  () => import('./FeedContainer'), Loading);
// const ActivityContainer = createLazyContainer(
//   () => import(''), Loading);


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
    const {classes} = this.props;
    return (
      <div id='swipe-container'>
        <SwipeableViews
          index={this.state.index}
          axis={'x'}
          onChangeIndex={this.handleChangeIndex}
        >
          <FeedContainer/>
          <Loading/>
          <Loading/>
        </SwipeableViews>
      </div>
    )
  }

}

export default withStyles(styles)(DashboardBodyContainer);