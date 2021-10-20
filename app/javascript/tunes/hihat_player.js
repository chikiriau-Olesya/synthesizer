import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const playerSettings = {
  url: 'https://tonejs.github.io/audio/loop/hh.mp3',
  mute: true,
  volume: 1,
  autostart: true,
  loop: true,
  playbackRate: 0.4
}

const player = new Tone.Player(playerSettings)
player.chain(Tone.Destination)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Hihat Sound',
    type: 'Player',
    node: player,
    settings: playerSettings
  }
]

export { instrument }
