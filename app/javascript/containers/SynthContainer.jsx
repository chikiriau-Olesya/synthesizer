import * as Tone from 'tone'

import * as snarePlayer from '../tunes/snare_player'
import * as kickPlayer from '../tunes/kick_player'
import * as hihatPlayer from '../tunes/hihat_player'
import * as congaPlayer from '../tunes/conga_player'
import * as drumPlayer from '../tunes/drum_player'

import * as chorusPlayer from '../tunes/chorus_player'
import * as kickSecondPlayer from '../tunes/kickSecond_player'
import * as echoPlayer from '../tunes/echo_player'
import * as cosmicPlayer from '../tunes/cosmic_player'
import * as rythmPlayer from '../tunes/rythm_player'

import * as daySynth from '../tunes/day_synth'
import * as mainSynth from '../tunes/main_synth'
import * as nightSynth from '../tunes/night_synth'

import React, { PureComponent } from 'react'

import WelcomeScreen from '../views/WelcomeScreen'
import SynthRoom from '../views/SynthRoom'

export default class SynthContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: []
    }
  }

  startWebAudio = async () => {
    await Tone.start()
    this.initInstruments()

    this.setState({
      webAudioStarted: true
    })
  }

  initInstruments = () => {
    Tone.Transport.bpm.value = 110
    Tone.Transport.start()

    const instruments = [
      snarePlayer.instrument,
      kickPlayer.instrument,
      hihatPlayer.instrument,
      congaPlayer.instrument,
      drumPlayer.instrument,

      daySynth.instrument,
      mainSynth.instrument,
      nightSynth.instrument,

      chorusPlayer.instrument,
      echoPlayer.instrument,
      kickSecondPlayer.instrument,
      cosmicPlayer.instrument,
      rythmPlayer.instrument
    ]

    this.setState({ instruments })
  }

  handlePropertyValueChange = (id, property, value) => {
    console.log(property, value)
    const instruments = []

    this.state.instruments.forEach((instrument, i) => {
      const newInstrument = []

      instrument.forEach((instrumentModule, i) => {
        const newInstrumentModule = Object.assign({}, instrumentModule)

        if (instrumentModule.id === id) {
          if (property.length === 1) {
            const propertyName = property[0]
            newInstrumentModule.settings[propertyName] = value
          } else if (property.length === 2) {
            const scopeName = property[0]
            const propertyName = property[1]
            newInstrumentModule.settings[scopeName][propertyName] = value
          } else if (property.length === 3) {
            let searchedEvent

            newInstrumentModule.settings.sequence.forEach((event, i) => {
              if (
                event.noteName === property[0] &&
                event.time === property[1]
              ) {
                searchedEvent = event
                newInstrumentModule.settings.sequence.splice(i, 1)
              }
            })

            if (searchedEvent === undefined) {
              newInstrumentModule.settings.sequence.push({
                time: property[1],
                noteName: property[0],
                duration: '1n',
                velocity: 1
              })
            }
          }
        }

        newInstrument.push(newInstrumentModule)
      })

      instruments.push(newInstrument)
    })

    this.setState({
      instruments
    })
  }

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  }

  renderSynthRoom = () => {
    const { instruments } = this.state

    return (
      <SynthRoom
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
      />
    )
  }

  render() {
    const { webAudioStarted } = this.state

    return (
      <div className="SynthContainer">
        {webAudioStarted === true
          ? this.renderSynthRoom()
          : this.renderWelcomeScreen()}
      </div>
    )
  }
}
