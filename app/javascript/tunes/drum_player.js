import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const playerSettings = {
  url: 'https://tonejs.github.io/audio/drum-samples/breakbeat.mp3',
  mute: true,
  volume: -10,
  autostart: true,
  loop: true,
  loopStart: 1.7,
  loopEnd: 2.6,
  playbackRate: 0.8
}

const player = new Tone.Player(playerSettings)
const filter = new Tone.AutoFilter(2).start()
player.chain(filter, Tone.Destination)

player.chain(Tone.Destination)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Drums Sound',
    type: 'Player',
    node: player,
    settings: playerSettings
  }
]

export { instrument }
