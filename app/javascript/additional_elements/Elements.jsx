import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class Elements extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Elements">
        <div className="Elements_line Elements_line_top"></div>
        <div className="Elements_line Elements_line_left"></div>
        <div className="Elements_line Elements_line_right"></div>
        <div className="Elements_line Elements_line_bottom"></div>
        <div className="Elements_topLeft"></div>
        <div className="Elements_topRight"></div>
        <div className="Elements_buttonLeft"></div>
        <div className="Elements_buttonRight"></div>
      </div>
    )
  }
}
