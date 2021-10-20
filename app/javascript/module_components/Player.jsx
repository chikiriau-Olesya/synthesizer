import PropTypes from 'prop-types'
import React, { Component } from 'react'

import ToggleButton from '../control_components/ToggleButton'

export default class Player extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { mute, volume } = settings

    node.volume.value = volume
    node.mute = mute
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { id, name, settings } = this.props
    const { volume, mute } = settings

    this.updateNodeParams()

    return (
      <div className="ChorusEffect">
        <h1>{name}</h1>
        <ToggleButton
          text="Mute"
          isOn={mute}
          handleClick={() => this.handlePropertyValueChange(['mute'], !mute)}
        />
      </div>
    )
  }
}

Player.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
