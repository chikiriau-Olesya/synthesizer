import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const playerSettings = {
  url: 'https://tonejs.github.io/audio/loop/snare.mp3',
  mute: true,
  volume: -10,
  autostart: true,
  loop: true,
  loopStart: 0,
  loopEnd: 0.2,
  playbackRate: 1
}

const player = new Tone.Player(playerSettings)
const filter = new Tone.AutoFilter(2).start()
const distortion = new Tone.Distortion(0.2)
player.chain(filter, distortion, Tone.Destination)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Snare Sound Day',
    type: 'Player',
    node: player,
    settings: playerSettings
  }
]

export { instrument }
