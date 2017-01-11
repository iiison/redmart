import React, { Component } from 'react'

/**
 * Main Class, will pass on all the data from here
 * all the views will be rendered as child of MainContainer
 */
class MainContainer extends Component {
  /**
   * React Lifecycle Event: Renders Main Container
   * @return {JSX}  Calls Prop Children
   */
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer
