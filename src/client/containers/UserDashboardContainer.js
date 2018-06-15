import React, {Component} from 'react'
import NavContainer from './NavContainer'
import DashboardBodyContainer from './DashboardBodyContainer'
import CircularProgress from '@material-ui/core/CircularProgress'


// const Loading = () => (
//   <div style={{
//     width: 'fit-content',
//     height: 'fit-content',
//     margin: '50% auto',
//   }}>
//     <CircularProgress style={{
//       // height: '50%',
//       // width: '50%',
//     }}/>
//   </div>
// );

class UserDashboardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main
        style={{animation: 'fadein 300ms'}}
        id='user-dashboard-container'
      >
        <NavContainer/>
        <DashboardBodyContainer/>
      </main>
    )
  }

}

export default UserDashboardContainer;