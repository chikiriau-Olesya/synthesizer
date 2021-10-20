import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const playerSettings = {
  url: 'https://tonejs.github.io/audio/impulse-responses/chorus-feedback.mp3',
  mute: true,
  volume: -2,
  autostart: true,
  loop: true
}

const player = new Tone.Player(playerSettings)
const pitchShift = new Tone.PitchShift(4).toDestination()
const filter = new Tone.Filter('E5').toDestination()
player.chain(pitchShift, filter, Tone.Destination)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Chorus Sound',
    type: 'Player',
    node: player,
    settings: playerSettings
  }
]

export { instrument }
