import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const playerSettings = {
  url:
    'https://tonejs.github.io/audio/drum-samples/loops/organ-echo-chords.mp3',
  mute: true,
  volume: -10,
  autostart: true,
  loop: true
}

const player = new Tone.Player(playerSettings)
console.log(player.mute)

player.chain(Tone.Destination)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Echo Sound',
    type: 'Player',
    node: player,
    settings: playerSettings
  }
]

export { instrument }
