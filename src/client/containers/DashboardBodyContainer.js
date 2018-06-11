import React, {Component} from 'react'
import SwipeableViews from 'react-swipeable-views'
import { withStyles } from '@material-ui/core/styles'
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

class DashboardBodyContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme } = this.props;
    return(
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={this.state.value}
        onChangeIndex={this.handleChangeIndex}
      >
        {location === 0 && <TabContainer>Item One</TabContainer>}
        {location === 1 && <TabContainer>Item Two</TabContainer>}
        {location === 2 && <TabContainer>Item Three</TabContainer>}

      </SwipeableViews>
    )
  }

}

export default withStyles(styles)(DashboardBodyContainer);