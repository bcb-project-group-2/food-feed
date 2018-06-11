import React, { Component } from "react";
import path from 'path'
console.log(__dirname);
export default function asyncComponent(getComponent, component) {
  const route = component;
  class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent(path.join(__dirname, route)).then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return <p>hello</p>
    }
  }
  return AsyncComponent;
}