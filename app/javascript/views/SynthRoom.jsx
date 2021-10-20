import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Elements from '../additional_elements/Elements'

import ToneSynth from '../module_components/ToneSynth'
import Player from '../module_components/Player'
import Sequencer from '../module_components/Sequencer'

import AutoFilterEffect from '../module_components/AutoFilterEffect'
import AutoPannerEffect from '../module_components/AutoPannerEffect'
import ChorusEffect from '../module_components/ChorusEffect'
import DistortionEffect from '../module_components/DistortionEffect'
import FreeverbEffect from '../module_components/FreeverbEffect'
import PingPongDelayEffect from '../module_components/PingPongDelayEffect'
import PitchShiftEffect from '../module_components/PitchShiftEffect'
import ReverbEffect from '../module_components/ReverbEffect'
import VibratoEffect from '../module_components/VibratoEffect'

import Channel from '../module_components/Channel'

export default class SynthRoom extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { instruments, handlePropertyValueChange } = this.props
    const instrumentElements = []

    instruments.forEach((instrument, i) => {
      const instrumentModuleElements = []

      instrument.forEach((instrumentModule, i) => {
        const { id, name, type, node, settings } = instrumentModule

        const components = {
          ToneSynth: ToneSynth,

          Player: Player,
          Sequencer: Sequencer,

          AutoFilterEffect: AutoFilterEffect,
          AutoPannerEffect: AutoPannerEffect,
          ChorusEffect: ChorusEffect,
          DistortionEffect: DistortionEffect,
          FreeverbEffect: FreeverbEffect,
          PingPongDelayEffect: PingPongDelayEffect,
          PitchShiftEffect: PitchShiftEffect,
          ReverbEffect: ReverbEffect,
          VibratoEffect: VibratoEffect,
          Channel: Channel
        }

        const ComponentType = components[type]

        instrumentModuleElements.push(
          <ComponentType
            id={id}
            name={name}
            node={node}
            settings={settings}
            handlePropertyValueChange={handlePropertyValueChange}
            key={i}
          />
        )
      })

      instrumentElements.push(
        <div className="Row" key={i}>
          {instrumentModuleElements}
        </div>
      )
    })

    return (
      <div>
        <Elements />
        <div className="SynthRoom">{instrumentElements}</div>
      </div>
    )
  }
}

SynthRoom.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
