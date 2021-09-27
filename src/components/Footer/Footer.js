/* eslint-disable prettier/prettier */
import React from 'react'

export default class Footer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const {children} = this.props
    return (
      <>
      <footer data-testid="app-footer">
        {children}
      </footer>
      </>
    )
  }
}