import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const playerSettings = {
  url: 'https://tonejs.github.io/audio/loop/FWDL.mp3',
  mute: true,
  volume: -3,
  autostart: true,
  loop: true,
  loopStart: 0.7,
  loopEnd: 1,
  playbackRate: 0.1
}

const player = new Tone.Player(playerSettings)
player.chain(Tone.Destination)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Kick Slow Sound',
    type: 'Player',
    node: player,
    settings: playerSettings
  }
]

export { instrument }
