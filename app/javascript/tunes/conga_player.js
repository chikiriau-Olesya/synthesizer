import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const playerSettings = {
  url: 'https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3',
  mute: true,
  volume: -3,
  autostart: true,
  loop: true,
  playbackRate: 0.4
}

const player = new Tone.Player(playerSettings)
const pitchShift = new Tone.PitchShift(4).toDestination()
const filter = new Tone.Filter('E5').toDestination()
player.chain(pitchShift, filter, Tone.Destination)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Conga Sound',
    type: 'Player',
    node: player,
    settings: playerSettings
  }
]

export { instrument }
