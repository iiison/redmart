import React, { Component } from 'react'
import Header               from '$components/Header/Header'
import * as stylesIgnored   from './styles.scss'

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
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer
