import React, {Component} from 'react'
import NavContainer from './NavContainer'
import DashboardBodyContainer from './DashboardBodyContainer'


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